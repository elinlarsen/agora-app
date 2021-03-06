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



          <MessageUserText> 
                {item.text} 
                <MessageDate>
                    {new Date(item.post_date).toDateString() + " " + new Date(item.post_date).toLocaleTimeString()}
                </MessageDate>
          
          
          </MessageUserText>
        </MessageRow>
      ));
    } else {
      messagesList = (
        <MessageRow>

          <MessageUserInfo>
                <MessageUserName> {props.messages[0].user.username} </MessageUserName>
                <MessagePicture src={props.messages[0].user.picture} alt={props.messages[0].user.username}/>
          </MessageUserInfo>

          <MessageUserText>

              <MessageInputForm
                    onSubmit={props.handleMessageSubmit}
                    id={props.messageUserId}
                    picture={props.messageUserPicture}
                    username={props.messageUserUsername}
                  >           
                      <MessageUserInput value={props.text} onChange={props.handleChange}/>
                      <MessageInputButton type="submit" value="Share" /> 
                
                </MessageInputForm>

            </MessageUserText>

        </MessageRow>
      );
    }
  }

  return <React.Fragment>{messagesList} </React.Fragment>;
}
