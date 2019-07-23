import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FooterContainer, FooterP } from "../Utils/StyledComponents";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterP> Made with love </FooterP>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        {" "}
        <FooterP> About </FooterP>{" "}
      </Link>
    </FooterContainer>
  );
}
