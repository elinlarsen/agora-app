import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/Utils/Nav.js";
import Footer from "./components/Utils/Footer.js";
import Agoras from "./components/Agoras.js";
import Agora from "./components/Agora.js";
import Project from "./components/Project.js";
import Projects from "./components/Projects.js";
import ProjectForm from "./components/Projects/ProjectForm.js";

import UpdateAgoraForm from "./components/Agora/UpdateAgoraForm.js";
import Auth from "./components/Auth/Auth.js";
import User from "./components/User.js";
import Home from "./components/Home.js";
//import PageAuth from "./components/Auth/Auth";

//---- custom auth component
import ProtectedRoute from "./components/Auth/ProtectedRoute";


import { ThemeProvider } from "styled-components";
import { mainTheme } from "../src/components/Utils/StyledComponents";

export default class App extends Component {
  state = {
    logInStatus: true,
    user: {
      _id: "",
      username: "usernameTest",
      picture: "picture"
    }
  };

  render() {
    return (
      <ThemeProvider theme={mainTheme}>
      <React.Fragment>
        <Nav logInStatus={this.state.logInStatus} userInfo={this.state.user} />
        <div className="main-body">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  logInStatus={this.state.logInStatus}
                  userInfo={this.state.user}
                />
              )}
            />
            <Route exact path="/agoras" component={Agoras} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/agora/:id" component={Agora} />
            <ProtectedRoute Route exact path="/agoracreate" component={UpdateAgoraForm} />
            <ProtectedRoute exact path="/projectcreate" component={ProjectForm} />
            <ProtectedRoute Route exact path="/projectcreate/:id" component={ProjectForm} />
            <Route exact path="/project/:id" component={Project} />
            <Route exact path="/user" component={User} />
            <Route exact path={["/signup","/signin" ]} component={Auth} />

          </Switch>
        </div>
        <Footer />
      </React.Fragment>
      </ThemeProvider >
    );
  }
}
