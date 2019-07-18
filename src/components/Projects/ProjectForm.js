import React, { Component } from "react";
import FormContainerProject from "../Utils/FormContainerProject.js";
import ajaxHandler from "../../ajaxHandler";
import { publicDecrypt } from "crypto";

console.log(process.env);

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
          value: "17/7/2019"
        },
        end_date: {
          name: "end_date",
          label: "End Date",
          type: "date",
          value: "17/7/2020"
        },
        tags: {
          name: "tags",
          label: "tags",
          type: "div",
          children: Tags([]),
          value: []
        },
        status: {
          name: "status",
          label: "status",
          type: "select",
          children: StatusOptions(),
          value: "ideation"
        }
      },
      displayForm: false,
      newProjectHandler: new ajaxHandler(
        "http://localhost:5000" /*process.env.REACT_APP_API_URL_*/,
        "/projects/new"
      ),
      projectHandler: new ajaxHandler(
        process.env.REACT_APP_API_URL_,
        "/projects"
      )
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.state.projectHandler.getOne(this.props.match.params.id, res => {
        console.log(res);
        let projectToUpdate = { ...this.state.project };

        projectToUpdate.name.value = res.name;
        projectToUpdate.description.value = res.description;
        projectToUpdate.minimum_contribution.value = res.minimum_contribution;
        projectToUpdate.total_amount.value = res.minimum_total_amount;
        projectToUpdate.start_date.value = res.start_date;
        projectToUpdate.end_date.value = res.end_date;
        projectToUpdate.tags.value = res.tags;
        projectToUpdate.tags.children = Tags(res.tags);
        projectToUpdate.status.value = res.status;

        this.setState({ project: projectToUpdate });
      });
    }
  };

  handleChange = event => {
    let newName = event.target.name;
    let newValue = event.target.value;
    let projectToUpdate = { ...this.state.project };

    if (event.target.type == "checkbox" && event.target.checked) {
      projectToUpdate[newName].value.push(newValue);
    } else if (event.target.type == "checkbox" && !event.target.checked) {
      projectToUpdate[newName].value.splice(
        projectToUpdate[newName].value.indexOf(newValue),
        1
      );
    }
    console.log(projectToUpdate[newName].value);
    let newTags = projectToUpdate[newName].value;
    projectToUpdate[newName] = {
      name: newName,
      label: projectToUpdate[newName].label,
      value: event.target.type != "checkbox" ? newValue : newTags,
      type: projectToUpdate[newName].type,
      children: projectToUpdate[newName].children
    };
    this.setState({ project: projectToUpdate });
  };

  handleSubmit = event => {
    event.preventDefault();
    let values = {};
    for (let key in this.state.project) {
      values[key] = this.state.project[key].value;
    }
    values.picture = "../../images/default.jpg";
    values.members = ["5d2b484933e4882ce41a993b"];

    if (this.props.match.params.id) {
      this.state.projectHandler.updateOne(
        this.props.match.params.id,
        values,
        dbRes => {
          console.log("Values");
          console.log(values);
          this.setState({ displayForm: !this.state.displayForm });
          this.props.history.push("/projects");
        }
      );
    } else {
      this.state.newProjectHandler.createOne(values, dbRes => {
        console.log("Values");
        console.log(values);
        this.setState({ displayForm: !this.state.displayForm });
        this.props.history.push("/projects");
      });
    }
  };

  onDrop = picture => {
    this.setState({
      project: { image: this.state.project.image.concat(picture) }
    });
  };

  render() {
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

const StatusOptions = props => {
  let enumList = [
    "ideation",
    "planning",
    "financed",
    "execution",
    "financed",
    "ongoing",
    "done"
  ];

  const items = enumList.map(enumItem => (
    <option value={enumItem}> {enumItem} </option>
  ));
  //const items = <option value={"a"}> {"a"} </option>;
  return items;
};

const Tags = props => {
  console.log("Active tags are ");
  console.log(props);

  let tagsList = [
    "culture",
    "environment",
    "security",
    "sport",
    "mobility",
    "digital",
    "education",
    "solidarity",
    "health",
    "cleanliness",
    "lifestyle",
    "economy"
  ];

  const checkedStatus = tag => {
    if (props.includes(tag)) return "checked";
  };

  const items = tagsList.map(enumItem => (
    <React.Fragment>
      <label name={enumItem}> {enumItem} </label>{" "}
      <input
        type="checkbox"
        value={enumItem}
        name="tags"
        checked={checkedStatus(enumItem)}
      />
    </React.Fragment>
  ));

  return items;
};
