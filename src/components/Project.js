import React, { Component } from "react";
import Members from "./Utils/Members.js";
import Forum from "./Project/Forum.js";
import styled from "styled-components";
import ajaxHandler from "../ajaxHandler.js";
import Status from "./Project/Status.js";
import queryString from "query-string";

let projectHandler = new ajaxHandler("http://localhost:5000", "projects");

export default class Projects extends Component {
  /*state : 
    - filtered pour la search bar
    - projectList (updated when edited and new project added / deleted )
    */

  state = {
    _id: this.props.match.params.id,
    name: null,
    description: null,
    picture: null,
    members: [],
    status: null
  };

  componentDidMount = () => {
    //let expandItem = queryString.parse(this.props.location.search).expand;
    let expandItem = "members";
    //console.log("expand item is " + expandItem);
    projectHandler.getOne(
      this.props.match.params.id,
      data => {
        this.setState({
          _id: data._id,
          name: data.name,
          description: data.description,
          picture: data.picture,
          members: data.members,
          status: data.status
        });
      },
      expandItem
    );
  };

  render() {
    return (
      <ProjectWrapper>
        <ProjectTitle> {this.state.name} </ProjectTitle>
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
          <Members membersList={this.state.members}> </Members>
          <Forum projectId={this.state._id}> </Forum>
        </ProjectDescriptionRow>
      </ProjectWrapper>
    );
  }
}

const ProjectWrapper = styled.div`
  width: 90%;
  padding: 10px;
`;
const ProjectTitle = styled.div`
  padding: 10px;
  background-color: #21222a;
  font-weight: bold;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

const ProjectImageContainer = styled.div`
  width: 26%;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  margin: 10px 0px;
`;

const ProjectDescriptionAndStatusWrapper = styled.div`
  display: flex;
  width: 72%;
  justify-content: space-between;
`;
const ProjectDescription = styled.p`
  display: flex;
  width: 80%;
  heigth: 10%;
  padding: 20px;
  border-style: solid;
  margin: 10px 0px;
  border-style: solid;
  border-color: darkgray;
  font-size: 20px;
  border-radius: 5px;
`;
const ProjectDescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
