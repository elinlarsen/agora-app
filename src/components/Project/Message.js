import React from "react";
import { Component } from "react";
import styled from "styled-components";

const MessageRow = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-start;
`;

const MessagePicture = styled.div`
  width: 3%;
`;

const MessageUserName = styled.p`
  font-weight: bold;
  margin: 10px;
  padding: 0px 5px;
  width: 20%;
`;

const MessageUserText = styled.p`
  margin: 10px;
  padding: 0px 5px;
  width: 30%;
`;

const MessageUserInput = styled.input`
  margin: 10px;
  padding: 5px 5px;
  width: 100%;
`;

const MessageInputForm = styled.form`
  width: 30%;
  display: flex;
`;

const MessageInputButton = styled.input`
  padding: 5px;
  margin: 10px;
`;

export default function Message(props) {
  let messagesList = null;
  let emptyMessage = null;

  if (props) {
    if (props.type != "empty") {
      messagesList = props.messages.map(item => (
        <MessageRow>
          {" "}
          <MessagePicture>
            {" "}
            <img src={item.user.picture} width="100%" />{" "}
          </MessagePicture>
          <MessageUserName> {item.user.username} </MessageUserName>
          <MessageUserText>
            {new Date(item.post_date).toDateString() +
              " " +
              new Date(item.post_date).toLocaleTimeString()}
          </MessageUserText>
          <MessageUserText> {item.text} </MessageUserText>
        </MessageRow>
      ));
    } else {
      messagesList = (
        <MessageRow>
          <MessagePicture>
            <img src={props.messages[0].user.picture} width="100%" />{" "}
          </MessagePicture>
          <MessageUserName> {props.messages[0].user.username} </MessageUserName>
          <MessageUserText> {""} </MessageUserText>
          <MessageInputForm onSubmit={props.handleMessageSubmit}>
            {" "}
            <MessageUserInput
              value={props.text}
              placeholder="Enter your contribution here"
              onChange={props.handleChange}
            />
            <MessageInputButton type="submit" value="Submit" />
          </MessageInputForm>
        </MessageRow>
      );
    }
  }

  return <React.Fragment>{messagesList} </React.Fragment>;
}
