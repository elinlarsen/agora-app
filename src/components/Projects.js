import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ajaxHandler from "../utils/ajaxHandler.js";
import ProjectCard from "./Projects/ProjectCard.js";
import StyledComponents from "./Utils/StyledComponents.js";
import { isTemplateElement } from "@babel/types";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.projectHandler = new ajaxHandler(
      process.env.REACT_APP_API_URL_,
      "projects"
    );
  }

  componentDidMount = () => {
    this.projectHandler.getAll(res => {
      this.setState({ projects: res });
      console.log(res);
    });
  };

  render() {
    const ProjectsGrid = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 30px 0px;
      padding: 50px;
    `;

    const StyledProjectCard = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;
      width: 300px;
      margin: auto;
      border-style: solid;
      border-radius: 2px;
      border-color: black;
      font-size: 30px;
      color: white;
      font-weight: bold;
      background-color: lightblue;
    `;

    let projectCards = this.state.projects.map(projectItem => (
      <ProjectCard project={projectItem} key={projectItem._id}>
        {" "}
      </ProjectCard>
    ));

    let emptyProjectCard = (
      <StyledProjectCard>
        {" "}
        <Link to="projectcreate">
          {" "}
          <p>New Project </p>{" "}
        </Link>
      </StyledProjectCard>
    );

    console.log(projectCards);
    return (
      <ProjectsGrid>
        {" "}
        {projectCards} {emptyProjectCard}{" "}
      </ProjectsGrid>
    );
  }
}
