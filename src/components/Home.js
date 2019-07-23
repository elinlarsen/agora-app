import React, { Component } from "react";
import styled from "styled-components";
import CallToAction from "./Home/CallToAction";
import InfoCard from "./Home/InfoCard";
import VideoCover from "./Home/VideoCover";

const MainHome = styled.div`
  width: 100%;
  background-color: red;
`;
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <VideoCover />
        <InfoCard />
        <CallToAction />
      </React.Fragment>
    );
  }
}
