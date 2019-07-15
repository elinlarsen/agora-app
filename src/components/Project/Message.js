import React from "react";
import { Component } from "react";
import styled from "styled-components";

export default function Message(props) {
  let ForumMessages = styled.h1``;

  if (props) {
    ForumMessages = props.messages.map(item => (
      <div>
        {" "}
        <p> {item.post_date} </p> <p> {item.username} </p> <p> {item.text} </p>{" "}
      </div>
    ));
  }

  return <ForumMessages />;

  // return <p> </p>;
}
