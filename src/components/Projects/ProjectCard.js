import React from "react";
import ajaxHandler from "../../ajaxHandler.js";

import {
  ProjectCardWrapper,
  ImageWrapper,
  ProjectCardText,
  ActionButton,
  HR,
  ButtonWrapper,
  StyledTag,
  TagGrid
} from "../Utils/StyledComponents.js";

export default function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        {" "}
        <img
          src={props.project.picture}
          height="100%"
          width="100%"
          alt={props.project.name}
        />{" "}
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
        <ActionButton onClick={props.deleteFunction} name={props.project._id}>
          {" "}
          Delete{" "}
        </ActionButton>
      </ButtonWrapper>{" "}
    </ProjectCardWrapper>
  );
}

const ProjectTags = props => {
  let tagItems = props.tags.map(tag => <StyledTag> {tag} </StyledTag>);
  return <TagGrid> {tagItems}</TagGrid>;
};
