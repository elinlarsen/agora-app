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
import { AuthConsumer } from "./components/Auth/Guard";
//import PageAuth from "./components/Auth/Auth";

//---- custom auth component
import ProtectedRoute from "./components/Auth/ProtectedRoute";

import { ThemeProvider } from "styled-components";
import { mainTheme, MainBody } from "../src/components/Utils/StyledComponents";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <React.Fragment>
          <Nav />
          <MainBody>
          {//<div className="main-body">
          }
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/agoras" component={Agoras} />
              <Route exact path="/projects" component={Projects} />
              <ProtectedRoute exact path="/agoracreate" component={UpdateAgoraForm} />
              <ProtectedRoute exact path="/projectcreate" component={ProjectForm} />
              <ProtectedRoute exact path="/projectcreate/:id" component={ProjectForm} />
              <ProtectedRoute exact path="/project/:id" component={Project} />
              <Route exact path="/user" component={User} />
              <Route path={["/signup", "/login"]} component={Auth} />
              <AuthConsumer>
                { ({user}) => { return (
                   <Route exact path="/agora/:id" render={(routeProps) => (<Agora {...routeProps} currentUser={user}/>)} />
                )}}   
              </AuthConsumer>

            </Switch>
          {//</div>
          }
          </MainBody>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
