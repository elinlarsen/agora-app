import React from "react";
import { StyledInput, Label } from "./StyledComponents";

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
  if (props.type !== "select" && props.type !== "div") {
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
