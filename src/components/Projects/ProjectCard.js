import React from "react";
import {
  ProjectCardWrapper,
  ImageWrapper,
  ProjectCardText,
  ActionButton,
  HR,
  Button
} from "../Utils/StyledComponents.js";

export default function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        {" "}
        <img src={props.project.picture} height="100%" width="100%" />{" "}
      </ImageWrapper>
      <ProjectCardText> {props.project.name} </ProjectCardText> <HR />
      <ProjectCardText>
        <ProjectTags tags={props.project.tags}> </ProjectTags>
      </ProjectCardText>{" "}
      <HR />
      <ProjectCardText>
        {" "}
        {"Status: "} {props.project.status}{" "}
      </ProjectCardText>{" "}
      <HR />
      <ProjectCardText>
        {" "}
        {"Number of contributors: "} {props.project.members.length}{" "}
      </ProjectCardText>
      <ButtonWrapper>
        <ActionButton href={"/project/" + props.project._id}>
          {" "}
          Contribute{" "}
        </ActionButton>
        <ActionButton href={"/projectcreate/" + props.project._id}>
          {" "}
          Update{" "}
        </ActionButton>
        <ActionButton> Delete </ActionButton>
      </ButtonWrapper>{" "}
    </ProjectCardWrapper>
  );
}

const ProjectTags = props => {
  let tagItems = props.tags.map(tag => <span> {tag} </span>);
  return (
    <React.Fragment>
      {" "}
      <span> Topics: </span> {tagItems}
    </React.Fragment>
  );
};
