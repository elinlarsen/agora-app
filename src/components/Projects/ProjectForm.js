import React, { Component } from "react";
import FormContainerProject from "../Utils/FormContainerProject.js";
import ajaxHandler from "../../utils/ajaxHandler";
import { changeDateFormat } from "../../utils/utilFunctions";

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
          value: "2020-07-16"
        },
        end_date: {
          name: "end_date",
          label: "End Date",
          type: "date",
          value: "2020-07-17"
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
      createProjectHandler: new ajaxHandler(
        process.env.REACT_APP_API_URL_,
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
        let projectToUpdate = { ...this.state.project };
        projectToUpdate.name.value = res.name;
        projectToUpdate.description.value = res.description;
        projectToUpdate.minimum_contribution.value = res.minimum_contribution;
        projectToUpdate.total_amount.value = res.minimum_total_amount;
        projectToUpdate.start_date.value = changeDateFormat(res.start_date);
        projectToUpdate.end_date.value = changeDateFormat(res.end_date);
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

    if (event.target.type === "checkbox" && event.target.checked) {
      projectToUpdate[newName].value.push(newValue);
    } else if (event.target.type === "checkbox" && !event.target.checked) {
      let indexOfItemToUncheck = projectToUpdate[newName].value.indexOf(
        newValue
      );
      projectToUpdate[newName].value.splice(indexOfItemToUncheck, 1);
    }

    let newTags = projectToUpdate[newName].value;

    projectToUpdate[newName] = {
      name: newName,
      label: projectToUpdate[newName].label,
      value: event.target.type !== "checkbox" ? newValue : newTags,
      type: projectToUpdate[newName].type,
      children:
        event.target.type === "checkbox"
          ? Tags(projectToUpdate[newName].value)
          : projectToUpdate[newName].children
    };
    this.setState({ project: projectToUpdate });
  };

  handleSubmit = event => {
    event.preventDefault();
    let values = {};
    for (let key in this.state.project) {
      values[key] = this.state.project[key].value;
    }
    values.picture = "../../images/trump.jpg";
    values.members = ["5d2b484933e4882ce41a993b"];

    if (this.props.match.params.id) {
      console.log(this.state.createOrUpdateProjectHandler);
      this.state.projectHandler.updateOne(
        this.props.match.params.id,
        values,
        dbRes => {
          this.setState({ displayForm: !this.state.displayForm });
          this.props.history.push("/projects");
        }
      );
    } else {
      this.state.createProjectHandler.createOne(values, dbRes => {
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
  let enumList = ["ideation", "planning", "financed", "ongoing", "done"];

  const items = enumList.map(enumItem => (
    <option value={enumItem}> {enumItem} </option>
  ));
  //const items = <option value={"a"}> {"a"} </option>;
  return items;
};

const Tags = props => {
  let tagsList = [
    "Culture",
    "Environment",
    "Security",
    "Sport",
    "Mobility",
    "Digital",
    "Education",
    "Solidarity",
    "Health",
    "Cleanliness",
    "Lifestyle",
    "Economy"
  ];

  const checkedStatus = tag => {
    if (props.includes(tag)) return true;
    else return false;
  };

  const items = tagsList.map(enumItem => (
    <React.Fragment>
      <input
        type="checkbox"
        value={enumItem}
        name="tags"
        checked={checkedStatus(enumItem)}
      />
      <label name={enumItem}> {enumItem} </label>{" "}
    </React.Fragment>
  ));

  return items;
};
