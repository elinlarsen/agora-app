import React, { Component } from "react";
import { Link } from "react-router-dom";
import ajaxHandler from "../utils/ajaxHandler.js";
import ProjectCard from "./Projects/ProjectCard.js";
import {
  ProjectsGrid,
  StyledEmptyProjectCard
} from "./Utils/StyledComponents.js";

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
    });
  };

  render() {
    let projectCards = this.state.projects.map(projectItem => (
      <ProjectCard
        project={projectItem}
        key={projectItem._id}
        deleteFunction={this.deleteItem}
      >
        {" "}
      </ProjectCard>
    ));

    let emptyProjectCard = (
      <StyledEmptyProjectCard>
        {" "}
        <Link to="projectcreate" style={{ textDecoration: "none" }}>
          {" "}
          <p>New Project </p>{" "}
        </Link>
      </StyledEmptyProjectCard>
    );

    return (
      <ProjectsGrid>
        {" "}
        {projectCards} {emptyProjectCard}{" "}
      </ProjectsGrid>
    );
  }

  deleteItem = event => {
    let projectHandler = new ajaxHandler(
      process.env.REACT_APP_API_URL_,
      "/projects"
    );
    projectHandler.deleteOne(event.target.name, res => console.log(res));
    let newState = this.state;
    let indexToRemove = newState.projects.findIndex(
      project => project._id === event.target.name
    );
    newState.projects.splice(indexToRemove, 1);
    this.setState(newState);
  };
}
