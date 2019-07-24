import React from "react";
import styled from "styled-components";
import {
  MessageRow,
  MessagePicture,
  MessageUserName,
  MessageUserText,
  MessageUserInput,
  MessageInputForm,
  MessageInputButton
} from "../Utils/StyledComponents";

export default function Message(props) {
  let messagesList = null;
  //let emptyMessage = null;

  if (props) {
    if (props.type !== "empty") {
      messagesList = props.messages.map(item => (
        <MessageRow>
          {" "}
          <MessagePicture>
            {" "}
            <img
              src={item.user.picture}
              width="100%"
              alt={item.user.username}
            />{" "}
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
            <img
              src={props.messages[0].user.picture}
              width="100%"
              alt={props.messages[0].user.username}
            />{" "}
          </MessagePicture>
          <MessageUserName> {props.messageUserName} </MessageUserName>
          <MessageUserText> {""} </MessageUserText>
          <MessageInputForm
            onSubmit={props.handleMessageSubmit}
            id={props.messageUserId}
            picture={props.messageUserPicture}
            username={props.messageUserUsername}
          >
            {" "}
            <MessageUserInput
              value={props.text}
              onChange={props.handleChange}
            />
            <MessageInputButton type="submit" value="Share" />
          </MessageInputForm>
        </MessageRow>
      );
    }
  }

  return <React.Fragment>{messagesList} </React.Fragment>;
}
