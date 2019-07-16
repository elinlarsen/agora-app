import React from "react";
import styled from "styled-components";
export default function ProjectCard(props) {
  const ProjectCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 300px;
    margin: auto;
    border-style: solid;
    border-radius: 2px;
  `;

  const ImageWrapper = styled.div`
    display: flex;
    height: 60%;
    margin-bottom: 20px;
  `;

  const ProjectCardText = styled.p`
    padding: 5px;
    margin: 0px;
    font-size: 16px;
    text-align: center;
  `;

  const HR = styled.hr`
    border-style: solid;
    width: 200px;
    border-color: lightgray;
  `;

  const ActionButton = styled.a`
    background-color: navy;
    padding: 10px;
    text-decoration: none;
    color: white;
    margin: 10px;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
  `;

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
