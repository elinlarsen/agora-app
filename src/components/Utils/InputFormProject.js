import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 30vw;
  border: 1px solid #0c214a;
  border-radius: 10px;
  padding: 1vh;
  font-size: 1.2rem;
  color: #0c214a;
`;

const Label = styled.label`
  text-align: center;
  font-size: 1.3rem;
  font-weigth: bold;
  color: #0c214a;
  padding: 2vh 0;
`;

export default function InputFormProject(props) {
  return (
    <>
      <Label> {props.label} </Label>
      <Input
        type={props.type}
        key={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
      >
        {props.children}
      </Input>
    </>
  );
}

const Input = props => {
  if (props.type != "select" && props.type != "div") {
    return (
      <StyledInput
        type={props.type}
        key={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
      />
    );
  }
  return (
    <StyledInput
      as={props.type}
      type={props.type}
      key={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required
    >
      {props.children}
    </StyledInput>
  );
};
