import React from "react";
import { Component } from "react";
import styled from "styled-components";
import ajaxHandler from "../../utils/ajaxHandler.js";
import Message from "./Message.js";
import { AuthConsumer } from "../Auth/Guard";
import { ForumContainer, ForumTitle } from "../Utils/StyledComponents";

export default class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{ user: { username: null } }],
      currentPost: null
    };

    this.messagesHandler = new ajaxHandler(
      process.env.REACT_APP_API_URL_,
      "/messages"
    );
    this.messagesHandlerPost = new ajaxHandler(
      process.env.REACT_APP_API_URL_,
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
      console.log(res.filter(a => a.project === this.props.projectId));
      this.setState({
        messages: /*res == []
            ?*/ res.filter(
          a => a.project === this.props.projectId
        ) /*
            : [{ user: { username: null } }]*/,
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

    return (
      <AuthConsumer>
        {({ user }) => (
          <ForumContainer>
            {" "}
            <ForumTitle> Forum </ForumTitle>{" "}
            <Message messages={this.state.messages} />
            {this.props.ableToPost ? (
              <Message
                type="empty"
                text={this.state.currentPost}
                messageUserId={user._id}
                messageUserPicture={user.picture}
                messageUserName={""}
                messages={[
                  { user: { picture: user.picture, username: user.username } }
                ]}
                handleMessageSubmit={this.submitMessage}
                handleChange={this.handleChange}
              />
            ) : (
              <div />
            )}
          </ForumContainer>
        )}
      </AuthConsumer>
    );
  }
}
