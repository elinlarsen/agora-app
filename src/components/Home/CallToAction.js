import React from "react";
import styled from "styled-components";
import { ButtonWrapper, ActionButton, WrapperButton } from "../Utils/StyledComponents";
const ButtonWrapperResized = styled(ButtonWrapper)`
  height: 100px;
  width: 70%;
  margin: 5vh;
  margin-bottom: 8vh;
  padding: 5vh;
  align-items: center;
`;
const ActionButtonResized = styled(ActionButton)`
  font-size: 1.2rem;
`;

export default function CallToAction() {
  return (
    <ButtonWrapperResized>
      <WrapperButton>
          <ActionButtonResized to="/signup"> Sign Up </ActionButtonResized>
      </WrapperButton>
      <WrapperButton>
          <ActionButtonResized to="/login"> Log In </ActionButtonResized>
      </WrapperButton>
      <WrapperButton>
          <ActionButtonResized to="/about"> About </ActionButtonResized>
      </WrapperButton>
    </ButtonWrapperResized>
  );
}
