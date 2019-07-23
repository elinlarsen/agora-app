import React from "react";
import { Component } from "react";
import styled from "styled-components";
import ajaxHandler from "../../utils/ajaxHandler.js";
import Message from "./Message.js";
import { AuthConsumer } from "../Auth/Guard";

export default class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{ user: { username: null } }],
      currentPost: null
    };

    this.messagesHandler = new ajaxHandler("http://localhost:5000", "/messages");
    this.messagesHandlerPost = new ajaxHandler(
      "http://localhost:5000",
      "/messages/new"
    );
  }

  handleChange = e => {
    this.setState({ currentPost: e.target.value });
  };

  submitMessage = e => {
    e.preventDefault();
    console.log(e.target.id);

    let userDetails = {
      _id: e.target.id,
      picture: e.target.picture,
      username: e.target.username
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
    //let messagesForProject = [];

    this.messagesHandler.getAll(res => {
      this.setState({
        messages: res.filter(a => a.project === this.props.projectId),
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
      <AuthConsumer>
        {({ user }) => (
          <ForumContainer>
            {" "}
            <ForumTitle> Recent contributions </ForumTitle>{" "}
            <Message messages={this.state.messages} />
            <Message
              type="empty"
              text={this.state.currentPost}
              messageUserId={user.id}
              messageUserPicture={user.picture}
              messageUserUsername={user.username}
              messages={[
                { user: { picture: user.picture, username: user.username } }
              ]}
              handleMessageSubmit={this.submitMessage}
              handleChange={this.handleChange}
            />
          </ForumContainer>
        )}
      </AuthConsumer>
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
