import React from "react";
import { Link } from "react-router-dom";
import {
  ProjectCardWrapper,
  ImageWrapper,
  ProjectCardText,
  HR,
  StyledTag,
  TagGrid,
  GenericWrapper,
  ProjectCardTitle
} from "../Utils/StyledComponents.js";

import { FiUsers } from "react-icons/fi";


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
          <ProjectCardTitle> {props.project.name} </ProjectCardTitle> <HR />
          <ProjectTags tags={props.project.tags}> </ProjectTags>
          <HR />
          <ProjectCardText> {props.project.members.length} <FiUsers /> </ProjectCardText>
        </GenericWrapper>
      </ProjectCardWrapper>
    </Link>
  );
}

const ProjectTags = props => {
  let tagItems = props.tags.map(tag => <StyledTag> {"#" + tag} </StyledTag>);
  return <TagGrid> {tagItems}</TagGrid>;
};
