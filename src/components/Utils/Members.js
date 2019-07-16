import React from "react";
import styled from "styled-components";
import { regExpLiteral } from "@babel/types";

export default function Members(props) {
  const listItems = props.membersList.map(item => <p> {item.username} </p>);

  return (
    <MessageContainer>
      {" "}
      <p> Current project members </p> {listItems}{" "}
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26%;
  padding: 10px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 10px;
`;
