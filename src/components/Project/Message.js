import React from "react";
import {
  MessageRow,
  MessagePicture,
  MessageUserName,
  MessageUserText,
  MessageUserInput,
  MessageInputForm,
  MessageInputButton, 
  MessageDate, 
  MessageUserInfo
} from "../Utils/StyledComponents";

export default function Message(props) {
  let messagesList = null;

  if (props) {
    if (props.type !== "empty") {
      messagesList = props.messages.map(item => (
        <MessageRow>
          {" "}
          <MessageUserInfo>
            <MessageUserName> {item.user.username} </MessageUserName>
            <MessagePicture><img src={item.user.picture} width="100%" alt={item.user.username}/></MessagePicture> 
          </MessageUserInfo>
          <MessageDate>
            {new Date(item.post_date).toDateString() + " " + new Date(item.post_date).toLocaleTimeString()}
          </MessageDate>
          <MessageUserText> {item.text} </MessageUserText>
        </MessageRow>
      ));
    } else {
      messagesList = (
        <MessageRow>
          <MessageUserInfo>
              <MessagePicture>
                <img
                  src={props.messages[0].user.picture}
                  width="100%"
                  alt={props.messages[0].user.username}
                />{" "}
              </MessagePicture>
            </MessageUserInfo>
          {//<MessageUserText> {""} </MessageUserText>
          }
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
            <MessageInputButton type="submit" value="Share" /> </MessageInputForm>
        </MessageRow>
      );
    }
  }

  return <React.Fragment>{messagesList} </React.Fragment>;
}
