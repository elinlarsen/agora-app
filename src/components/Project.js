import React, { Component } from "react";
import Members from "./Utils/Members.js";
import Forum from "./Project/Forum.js";
import ajaxHandler from "../utils/ajaxHandler.js";
import styled from "styled-components";
import Status from "./Project/Status.js";
import {
  ActionButton,
  ProjectWrapper,
  ProjectTitle,
  ProjectTitleText,
  ProjectImageContainer,
  ProjectDescriptionAndStatusWrapper,
  ProjectDescription,
  ProjectDescriptionRow,
  ButtonWrapper
} from "./Utils/StyledComponents";
import { AuthConsumer } from "./Auth/Guard";

let projectHandler = new ajaxHandler(
  process.env.REACT_APP_API_URL_,
  "projects"
);

export default class Projects extends Component {
  state = {
    _id: this.props.match.params.id,
    name: null,
    description: null,
    picture: null,
    members: [],
    status: null,
    admin: null,
    agora: null
  };

  refreshState = () => {
    let expandItem = "members";
    projectHandler.getOne(
      this.props.match.params.id,
      data => {
        this.setState({
          _id: data._id,
          name: data.name,
          description: data.description,
          picture: data.picture,
          members: data.members,
          status: data.status,
          admin: data.admin
        });
      },
      expandItem
    );
  };

  componentDidMount = () => {
    this.refreshState();
  };

  addUser = e => {
    let newMembers = this.state.members;

    console.log(newMembers.filter(a => a._id == e.target.id).length);

    if (newMembers.filter(a => a._id == e.target.id).length == 0) {
      newMembers.push(e.target.id);
      projectHandler.updateOne(
        this.state._id,
        {
          members: newMembers
        },
        res => {
          console.log(res);
          this.refreshState();
        }
      );

      let stateCopy = { ...this.state };
      stateCopy.members = newMembers;
      this.setState(stateCopy);
    }
  };

  deleteItem = event => {
    let projectHandler = new ajaxHandler(
      process.env.REACT_APP_API_URL_,
      "/projects"
    );
    console.log("ready to delete " + event.target.name);
    projectHandler.deleteOne(event.target.name, res => {
      console.log(res);
      this.props.history.push("/projects");
    });
  };

  render() {
    const ActionButtonProject = styled(ActionButton)`
      width: 40%;
    `;
    return (
      <ProjectWrapper>
        <ProjectTitle>
          <ProjectTitleText> {this.state.name} </ProjectTitleText>
          <ButtonWrapper width="15%">
            <AuthConsumer>
              {({ user }) =>
                this.state.members.filter(a => a._id == user.id).length == 0 ? (
                  <ActionButtonProject id={user.id} onClick={this.addUser}>
                    {" "}
                    Join{" "}
                  </ActionButtonProject>
                ) : null
              }
            </AuthConsumer>
            <AuthConsumer>
              {({ user }) =>
                user.id == this.state.admin ? (
                  <ActionButtonProject
                    to={{
                      pathname: "/projectcreate/" + this.state._id,
                      state: { action: "update" }
                    }}
                  >
                    {" "}
                    Update{" "}
                  </ActionButtonProject>
                ) : null
              }
            </AuthConsumer>
            <AuthConsumer>
              {({ user }) =>
                user.id == this.state.admin ? (
                  <ActionButtonProject
                    onClick={this.deleteItem}
                    name={this.state._id}
                  >
                    {" "}
                    Delete{" "}
                  </ActionButtonProject>
                ) : null
              }
            </AuthConsumer>
          </ButtonWrapper>
        </ProjectTitle>
        <ProjectDescriptionRow>
          <ProjectImageContainer>
            {" "}
            <img
              src={this.state.picture}
              alt="project"
              width="100%"
              height="100%"
            />{" "}
          </ProjectImageContainer>
          <ProjectDescriptionAndStatusWrapper>
            <ProjectDescription> {this.state.description} </ProjectDescription>
            <Status status={this.state.status}> </Status>
          </ProjectDescriptionAndStatusWrapper>
        </ProjectDescriptionRow>
        <ProjectDescriptionRow>
          <Members membersList={this.state.members} admin={this.state.admin}>
            {" "}
          </Members>
          <AuthConsumer>
            {({ user }) => (
              <Forum
                projectId={this.state._id}
                ableToPost={
                  this.state.members.filter(a => a._id == user.id).length != 0
                }
              >
                {" "}
              </Forum>
            )}
          </AuthConsumer>
        </ProjectDescriptionRow>
      </ProjectWrapper>
    );
  }
}
