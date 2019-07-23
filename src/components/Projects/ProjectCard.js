import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../Auth/Guard";
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
    <AuthConsumer>
      {({ user }) => (
        <Link
          to={"/project/" + props.project._id}
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
              {user.id == props.project.admin ? (
                <ButtonWrapper>
                  <ActionButton to={"/projectcreate/" + props.project._id}>
                    {" "}
                    Update{" "}
                  </ActionButton>{" "}
                  <ActionButton
                    to={"projects"}
                    onClick={props.deleteFunction}
                    name={props.project._id}
                  >
                    {" "}
                    Delete{" "}
                  </ActionButton>
                </ButtonWrapper>
              ) : null}
            </GenericWrapper>
          </ProjectCardWrapper>
        </Link>
      )}
    </AuthConsumer>
  );
}

const ProjectTags = props => {
  let tagItems = props.tags.map(tag => <StyledTag> {"#" + tag} </StyledTag>);
  return <TagGrid> {tagItems}</TagGrid>;
};
