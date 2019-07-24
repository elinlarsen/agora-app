import React from "react";
import UserStatus from "./UserStatus";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavContainer, Logo } from "../Utils/StyledComponents";

export default function Nav(props) {
  return (
    <NavContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <Logo>Agorae</Logo>
      </Link>

      <UserStatus />
    </NavContainer>
  );
}
