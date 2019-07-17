import React from "react";
import { Component } from "react";
import styled from "styled-components";
import ajaxHandler from "../../ajaxHandler.js";
import Message from "./Message.js";

export default class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{ user: { username: null } }],
      currentPost: null
    };

    this.messagesHandler = new ajaxHandler("http://localhost:5000", "messages");
    this.messagesHandlerPost = new ajaxHandler(
      "http://localhost:5000",
      "messages/new"
    );
  }

  handleChange = e => {
    console.log("coucou");
    this.setState({ currentPost: e.target.value });
  };

  submitMessage = e => {
    e.preventDefault();

    let userDetails = {
      _id: "5d2b484933e4882ce41a993b",
      picture: "../../images/me.jpg",
      username: "yacineberrada"
    };

    let dataToPost = {
      user: userDetails._id,
      text: this.state.currentPost,
      project: this.props.projectId,
      post_date: Date.now()
    };

    this.messagesHandlerPost.createOne(dataToPost, dbRes => {
      console.log(dbRes);
      this.updateStateWithNewMessage();
    });
  };

  componentDidMount = () => {
    this.updateStateWithNewMessage();
  };

  updateStateWithNewMessage = () => {
    let messagesForProject = [];

    this.messagesHandler.getAll(res => {
      this.setState({
        messages: res.filter(a => a.project == this.props.projectId),
        currentPost: ""
      });
    }, "user");
  };

  render() {
    let userDetails = {
      picture: "../../images/me.jpg",
      username: "yacineberrada"
    };
    let emptyMessage = [{ user: userDetails }];

    if (this.state.messages[0])
      console.log(this.state.messages[0].user.username);
    return (
      <ForumContainer>
        {" "}
        <ForumTitle> Recent contributions </ForumTitle>{" "}
        <Message messages={this.state.messages} />
        <Message
          type="empty"
          text={this.state.currentPost}
          messages={emptyMessage}
          handleMessageSubmit={this.submitMessage}
          handleChange={this.handleChange}
        />
      </ForumContainer>
    );
  }
}

const ForumContainer = styled.div`
  width: 72%;
  border-style: solid;
  padding: 10px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
`;

const ForumTitle = styled.p`
  padding: 10px;
  margin: 0px;
  background-color: #21222a;
  font-weight: bold;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;
