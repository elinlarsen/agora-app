import React from "react";

//librairies
import styled from "styled-components";
import ImageUploader from "react-images-upload";

//components
import CreateButton from "./CreateButton";
import InputFormProject from "./InputFormProject";
import {FormWrapper, TitleForm} from "./StyledComponents"

const Form = styled.form`
  height: inherit;
  padding: 0vh 5vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default function FormContainerProject(props) {
  let isImageUplaod;
  if (props.imageUploader === undefined) {
    isImageUplaod = true;
  } else {
    isImageUplaod = false;
  }

  return (
    <FormWrapper id={props.id} onSubmit={props.handleSubmit}>
    <TitleForm >{props.titleForm}</TitleForm >
      {Object.keys(props.object).map(key => {
        if (!props.exceptions.includes(key))
          return (
            <InputFormProject
              label={props.object[key].label}
              type={props.object[key].type}
              name={props.object[key].name}
              value={props.object[key].value}
              onChange={props.handleChange}
              children={props.object[key].children}
            />
          );
      })}

      {isImageUplaod === true && (
        <ImageUploader
          name="image"
          withIcon={true}
          buttonText="Upload an image"
          onChange={props.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={props.singleImage}
        />
      )}
      <CreateButton disabled={props.displayForm} 
                    text={props.textSubmit} 
                    clbk={props.handleSubmit}/>
    </FormWrapper>
  );
}
