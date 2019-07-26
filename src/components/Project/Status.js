import React from "react";
import styled from "styled-components";

export default function ProjectStatus(props) {
  const StatusBar = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 20%;
    /*margin: 10px 0px;
    width: 18%;
    border-style: solid;
    border-color: ${props => props.theme.color2};
    border-width: 0.5px;*/
  `;

  const Ideation = styled.div`
    display: flex;
    background-color: lightgreen;
    width:99.9%
    height: 20%;
    font-weight: bold;
    color: black;
  `;

  const Planning = styled.div`
    display: flex;
    background-color: green;
    width:99.9%
    height: 40%;
    font-weight: bold;
    color: black;
  `;

  const Financed = styled.div`
    display: flex;
    background-color: blue;
    width:99.9%
    height: 60%;
    font-weight: bold;
    color: black;
  `;

  const Ongoing = styled.div`
    display: flex;
    background-color: lightblue;
    width:99.9%
    height: 80%;
    font-weight: bold;
    color: black;
  `;

  const Done = styled.div`
    display: flex;
    background-color: turquoise;
    width:99.9%
    height: 100%;
    font-weight: bold;
    color: black;
  `;

  const CenteredWhiteText = styled.div`
    margin: auto;
    color: white;
    font-size: 20px;
    opacity : 0.2; 
  `;

  function renderStatus(props) {
    if (props.status === "ideation") {
      return (
        <Ideation>
          {" "}
          <CenteredWhiteText> Ideation </CenteredWhiteText>{" "}
        </Ideation>
      );
    } else if (props.status === "planning") {
      return (
        <Planning>
          <CenteredWhiteText> Planning </CenteredWhiteText>{" "}
        </Planning>
      );
    } else if (props.status === "financed") {
      return (
        <Financed>
          {" "}
          <CenteredWhiteText> Financed </CenteredWhiteText>{" "}
        </Financed>
      );
    } else if (props.status === "ongoing") {
      return (
        <Ongoing>
          {" "}
          <CenteredWhiteText> Ongoing </CenteredWhiteText>{" "}
        </Ongoing>
      );
    } else if (props.status === "done") {
      return (
        <Done>
          {" "}
          <CenteredWhiteText> Done </CenteredWhiteText>{" "}
        </Done>
      );
    }
  }

  return <StatusBar>{renderStatus(props)}</StatusBar>;
}

//enum: ["ideation", "planning", "financed", "ongoing", "done"]
