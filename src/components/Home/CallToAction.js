import React from "react";
import styled from "styled-components";
import { ButtonWrapper, ActionButton } from "../Utils/StyledComponents";
const ButtonWrapperResized = styled(ButtonWrapper)`
  height: 100px;
  width: 70%;
  margin: auto;
  margin-bottom: 15vh;
  padding: 15vh;
  align-items: center;
`;
const ActionButtonResized = styled(ActionButton)`
  font-size: 24px;
`;

export default function CallToAction() {
  return (
    <ButtonWrapperResized>
      <ActionButtonResized to="/signup"> Sign Up </ActionButtonResized>
      <ActionButtonResized to="/login"> Log In </ActionButtonResized>
      <ActionButtonResized to="/about"> About </ActionButtonResized>
    </ButtonWrapperResized>
  );
}
