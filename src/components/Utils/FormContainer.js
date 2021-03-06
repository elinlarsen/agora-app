import React from "react";

//librairies
import styled from "styled-components";
import ImageUploader from "react-images-upload";

//components
import CreateButton from "./CreateButton";
import InputForm from "./InputForm";

//style 
import {FormWrapper, TitleForm} from "./StyledComponents"

/*const Form = styled.form`
  padding: 1vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: inherit;
`;*/

export default function FormContainer(props) {
  return (
    <FormWrapper id={props.id} onSubmit={props.handleSubmit}>
     
     <TitleForm >{props.titleForm}</TitleForm >

      {Object.keys(props.object).map(key => {
        if (!props.exceptions.includes(key)) {
          return (
            
            <InputForm
              label={key.toUpperCase()}
              text="text"
              name={key}
              value={props.object[key]}
              onChange={props.handleChange}
            />
          );
        }
      })}

      <ImageUploader
        name="image"
        withIcon={true}
        buttonText="Upload an image"
        onChange={props.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
        maxFileSize={10242880}
        singleImage={props.singleImage}
      />

      <CreateButton disabled={props.displayForm} 
                    text={props.textSubmit} 
                    clbk={props.handleSubmit}
                    />
    </FormWrapper>
  );
}
