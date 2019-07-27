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
            <MessagePicture src={item.user.picture} alt={item.user.username}/>
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
            
                <MessagePicture
                  src={props.messages[0].user.picture}
                  
                  alt={props.messages[0].user.username}
                />
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
