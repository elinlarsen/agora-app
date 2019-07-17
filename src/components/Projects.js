import React, { Component } from "react";
import styled from "styled-components";
import ajaxHandler from "../ajaxHandler.js";
import ProjectCard from "./Projects/ProjectCard.js";
import { isTemplateElement } from "@babel/types";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.projectHandler = new ajaxHandler("http://localhost:5000", "projects");
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

    let projectCards = this.state.projects.map(projectItem => (
      <ProjectCard project={projectItem} key={projectItem._id}>
        {" "}
      </ProjectCard>
    ));

    console.log(projectCards);
    return <ProjectsGrid> {projectCards} </ProjectsGrid>;
  }
}
