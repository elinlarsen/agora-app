import React, { Component } from "react";
import Members from "./Utils/Members.js";
import Forum from "./Project/Forum.js";
import styled from "styled-components";
import ajaxHandler from "../ajaxHandler.js";
import queryString from "query-string";

let projectHandler = new ajaxHandler("http://localhost:5000", "projects");

export default class Projects extends Component {
  /*state : 
    - filtered pour la search bar
    - projectList (updated when edited and new project added / deleted )
    */

  state = {
    _id: null,
    name: null,
    description: null,
    picture: null,
    members: []
  };

  componentDidMount = () => {
    let expandItem = queryString.parse(this.props.location.search).expand;
    console.log("expand item is " + expandItem);
    projectHandler.getOne(
      this.props.match.params.id,
      data =>
        this.setState({
          _id: data._id,
          name: data.name,
          description: data.description,
          picture: data.picture,
          members: data.members
        }),
      expandItem
    );
  };

  render() {
    return (
      <ProjectWrapper>
        <ProjectTitle> {this.state.name} </ProjectTitle>
        <ProjectDescriptionRow>
          <ProjectImage src={this.state.picture} alt="project" />
          <ProjectDescription> {this.state.description} </ProjectDescription>
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
  width: 80%;
  padding: 10px;
`;
const ProjectTitle = styled.div`
  padding: 10px;
  background-color: darkblue;
  font-weight: bold;
  color: white;
`;

const ProjectImage = styled.img`
  width: 25%;
  heigth: 10%;
  border-style: solid;
  margin: 10px 0px;
`;
const ProjectDescription = styled.p`
  width: 70%;
  heigth: 10%;
  padding: 20px;
  border-style: solid;
  margin: 10px 0px;
`;
const ProjectDescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
