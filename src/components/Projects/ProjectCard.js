import React from "react";
import { Link } from "react-router-dom";
import {
  ProjectCardWrapper,
  ImageWrapper,
  ProjectCardText,
  ActionButton,
  HR,
  ButtonWrapper,
  StyledTag,
  TagGrid,
  GenericWrapper
} from "../Utils/StyledComponents.js";

export default function ProjectCard(props) {
  return (
    <Link
      to={{
        pathname: "/project/" + props.project._id,
        state: { agoraId: props.agoraId }
      }}
      style={{ textDecoration: "none" }}
    >
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
        <GenericWrapper>
          <ProjectCardText> {props.project.name} </ProjectCardText> <HR />
          <ProjectTags tags={props.project.tags}> </ProjectTags>
          <HR />
          <ProjectCardText>
            {" "}
            {"Number of contributors: "} {props.project.members.length}{" "}
          </ProjectCardText>
        </GenericWrapper>
      </ProjectCardWrapper>
    </Link>
  );
}

const ProjectTags = props => {
  let tagItems = props.tags.map(tag => <StyledTag> {"#" + tag} </StyledTag>);
  return <TagGrid> {tagItems}</TagGrid>;
};
