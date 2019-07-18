import React from "react";
import styled from "styled-components";

export default function ProjectStatus(props) {
  const StatusBar = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 10px 0px;
    width: 18%;
    border-style: solid;
    border-color: darkgray;
    border-radius: 5px;
  `;

  const Ideation = styled.div`
    display: flex;
    background-color: lightgreen;
    width: 100%;
    height: 20%;
    font-weight: bold;
    color: black;
  `;

  const Planning = styled.div`
    display: flex;
    background-color: green;
    width: 100%;
    height: 40%;
    font-weight: bold;
    color: black;
  `;

  const Financed = styled.div`
    display: flex;
    background-color: blue;
    width: 100%;
    height: 60%;
    font-weight: bold;
    color: black;
  `;

  const Ongoing = styled.div`
    display: flex;
    background-color: lightblue;
    width: 100%;
    height: 80%;
    font-weight: bold;
    color: black;
  `;

  const Done = styled.div`
    display: flex;
    background-color: turquoise;
    width: 100%;
    height: 100%;
    font-weight: bold;
    color: black;
  `;

  const CenteredWhiteText = styled.div`
    margin: auto;
    color: white;
    font-size: 20px;
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
          {" "}
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
