import React from "react";
import {
  ProjectCardWrapper,
  ImageWrapper,
  ProjectCardText,
  ActionButton,
  HR
} from "../StyledComponents.js";

export default function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        {" "}
        <img src={props.project.picture} height="100%" width="100%" />{" "}
      </ImageWrapper>
      <ProjectCardText> {props.project.name} </ProjectCardText> <HR />
      <ProjectCardText>
        {" "}
        {"Status: "} {props.project.status}{" "}
      </ProjectCardText>{" "}
      <HR />
      <ProjectCardText>
        {" "}
        {"Number of contributors: "} {props.project.members.length}{" "}
      </ProjectCardText>
      <ActionButton href={"/project/" + props.project._id}>
        {" "}
        Be part of it!{" "}
      </ActionButton>
    </ProjectCardWrapper>
  );
}
