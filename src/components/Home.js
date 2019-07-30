import React, { Component } from "react";
import styled from "styled-components";
import CallToAction from "./Home/CallToAction";
import InfoCard from "./Home/InfoCard";
import VideoCover from "./Home/VideoCover";

const HomeWrapper=styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
height: inherit; 
width : inherit; 
`
export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <VideoCover />
        <InfoCard />
        <CallToAction />
      </HomeWrapper>
    );
  }
}
