import React, { Component } from "react";
import FormContainerProject from "../Utils/FormContainerProject.js";
import ajaxHandler from "../../utils/ajaxHandler";
import { changeDateFormat } from "../../utils/utilFunctions";
import { AuthConsumer } from "../Auth/Guard";

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.action =this.props.location.state.action;
    this.agora=this.props.location.state.agora;
    this.state = {
      project: {
        name: {
          label: "Name",
          name: "name",
          value: "New project name" ,
          type: "text"
        },
        description: {
          label: "Description",
          name: "description",
          value: "Description of your project",
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
          label: "Tags",
          type: "div",
          children: Tags([]),
          value: []
        },
        status: {
          name: "status",
          label: "Status",
          type: "select",
          children: StatusOptions(),
          value: "ideation"
        },

        picture: { value: [] }
      },
      displayForm: false,
      createProjectHandler: new ajaxHandler(
        process.env.REACT_APP_API_URL_,
        "/projects/new"
      ),
      projectHandler: new ajaxHandler(
        process.env.REACT_APP_API_URL_,
        "/projects"
      ),
      agoraHandler : new ajaxHandler(
        process.env.REACT_APP_API_URL_,
        "/agoras"
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

    let formData = new FormData();
    let currentProject = this.state.project;

    Object.keys(currentProject).forEach(item => {
      if (item === "picture")
        currentProject[item].value.forEach(key =>
          formData.set("picture", key, key.name)
        );
      else if (["tags"].includes(item)) {
        currentProject[item].value.forEach(key => {
          formData.append([item], key);
        });
      } else {
        formData.append(item, currentProject[item].value);
      }
    });

    formData.append("admin", event.target.id);
    formData.append("members", event.target.id);

    if(this.action==="update"){
      this.state.projectHandler.updateOne(
        this.props.match.params.id,
        formData,
        dbRes => {this.props.history.push("/projects/"+ this.props.match.params._id); }
      );
    } else if (this.action==="create"){
      this.state.createProjectHandler.createOne(formData, 
          newProject => {
            this.agora.projects.push(newProject)
            this.state.agoraHandler.updateOne(this.agora._id, this.agora, 
                updatedAgora => {
                  console.log("updated agora:  ", updatedAgora)
                  this.props.history.push({
                    pathname : "/agora/"+this.agora._id,
                    //state : {newProject}
                  });
          } )
      });
    }
  };



  onDrop = picture => {
    let stateCopy = { ...this.state };
    stateCopy.project.picture.value = stateCopy.project.picture.value.concat(
      picture
    );
    this.setState(stateCopy, () => console.log(this.state.project.picture));
  };

  render() {
    return (
      <AuthConsumer>
        {({ user }) => (
          <>
            {this.state.displayForm}
            <FormContainerProject
              id={user.id}
              exceptions={["picture", "members", "public"]}
              handleSubmit={this.handleSubmit}
              object={this.state.project}
              handleChange={this.handleChange}
              onDrop={this.onDrop}
              singleImage={this.singleImage}
              displayForm={this.state.displayForm}
              textSubmit="Submit your new project!"
            />
          </>
        )}
      </AuthConsumer>
    );
  }
}

const StatusOptions = props => {
  let enumList = ["ideation", "planning", "financed", "ongoing", "done"];

  const items = enumList.map(enumItem => (
    <option value={enumItem}> {enumItem} </option>
  ));
  return items;
};

const Tags = props => {
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
