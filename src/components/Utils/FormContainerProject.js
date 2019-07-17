import React from "react";

//librairies
import styled from "styled-components";
import ImageUploader from "react-images-upload";

//components
import CreateButton from "./../Utils/CreateButton";
import InputFormProject from "../Utils/InputFormProject";

const Form = styled.form`
  padding: 5vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default function FormContainerProject(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      {Object.keys(props.object).map(key => {
        if (!props.exceptions.includes(key))
          return (
            <InputFormProject
              label={key}
              type={props.object[key].type}
              name={props.object[key].name}
              value={props.object[key].value}
              onChange={props.handleChange}
            />
          );
      })}

      <ImageUploader
        name="image"
        withIcon={true}
        buttonText="Upload an image"
        onChange={props.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        singleImage={props.singleImage}
      />

      <CreateButton disabled={props.displayForm} text={props.textSubmit} />
    </Form>
  );
}
