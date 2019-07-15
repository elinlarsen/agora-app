import React from "react";
import { Component } from "react";
import styled from "styled-components";
import ajaxHandler from "../../ajaxHandler.js";
import Message from "./Message.js";

export default class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    let messagesForProject = [];
    let messagesHandler = new ajaxHandler("http://localhost:5000", "messages");
    messagesHandler.getAll(res => {
      //res.filter(a => a.project == this.props.projectId);
      let messagesForProject = res; /*.filter(
        a => a.project == this.props.projectId
      );*/
      this.setState({ messages: messagesForProject });
    });
  }

  render() {
    return (
      <ForumContainer>
        {" "}
        <p> Recent contributions </p>{" "}
        <Message messages={this.state.messages}> </Message>
      </ForumContainer>
    );
  }
}

const ForumContainer = styled.div`
  width: 75%;
  border-style: solid;
`;
