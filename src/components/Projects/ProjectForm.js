import React, { Component } from "react";
import FormContainerProject from "../Utils/FormContainerProject.js";
import ajaxHandler from "../../ajaxHandler";
import { publicDecrypt } from "crypto";

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: {
          label: "Name",
          name: "name",
          value: "new project" + Math.random(),
          type: "text"
        },
        description: {
          label: "Description",
          name: "description",
          value: "the description of your project",
          type: "text"
        },
        minimum_contribution: {
          label: "Minimum Contribution",
          name: "minimum_contribution",
          value: 0,
          type: "number"
        },
        total_amount: {
          name: "total_amount",
          label: "Total Amount",
          value: 0,
          type: "number"
        },
        start_date: {
          name: "start_date",
          label: "Start Date",
          type: "date",
          value: Date.now()
        }

        /*start_date: new Date("2019/17/07").toISOString()
        
        end_date: "When is the project expected to end",
        tags: "What is your project about? You can select many",
        status:
          "What is the project current status. If it is a new project, it is likely to be ideation",
        members: [],

        public: true*/
      },
      displayForm: false,
      newProjectHandler: new ajaxHandler(
        "http://localhost:5000",
        "/projects/new"
      )
    };
  }

  handleChange = event => {
    let newName = event.target.name;
    let newValue = event.target.value;
    let projectToUpdate = { ...this.state.project };

    projectToUpdate[newName] = {
      name: newName,
      label: projectToUpdate[newName].label,
      value: newValue,
      type: projectToUpdate[newName].type
    };

    console.log(newName);
    this.setState({ project: projectToUpdate });
  };

  handleSubmit = event => {
    event.preventDefault();
    let values = {};
    for (let key in this.state.project) {
      values[key] = this.state.project[key].value;
    }

    //Adding user
    values.members = ["5d2b484933e4882ce41a993b"];

    this.state.newProjectHandler.createOne(values, dbRes => {
      console.log(dbRes);
      this.setState({ displayForm: !this.state.displayForm });
    });
    //this.props.addNewproject(this.state.project);
  };

  onDrop = picture => {
    this.setState({
      project: { image: this.state.project.image.concat(picture) }
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.displayForm}
        <FormContainerProject
          exceptions={["picture", "members", "public"]}
          handleSubmit={this.handleSubmit}
          object={this.state.project}
          handleChange={this.handleChange}
          onDrop={this.onDrop}
          singleImage={this.singleImage}
          displayForm={this.state.displayForm}
          textSubmit="Submit your new Project!"
        />
      </>
    );
  }
}
