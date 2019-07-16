import React from "react";
import { Component } from "react";
import styled from "styled-components";

export default function Message(props) {
  let ForumMessages = styled.div``;
  let messagesList = null;
  console.log(props);

  if (props) {
    messagesList = props.messages.map(item => (
      <div>
        {" "}
        <p> {item.user.username} </p>
        <p>
          {" "}
          {new Date(item.post_date).toDateString() +
            " " +
            new Date(item.post_date).toLocaleTimeString()}{" "}
        </p>
        <p> {item.text} </p>
      </div>
    ));
  }

  return <ForumMessages> {messagesList} </ForumMessages>;

  return <p> </p>;
}
