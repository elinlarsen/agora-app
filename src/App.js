import React from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom";


import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import Agoras from './components/Agoras.js'
import Agora from './components/Agora.js'
import Project from './components/Project.js'
import Projects from './components/Projects.js'
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import User from './components/User.js'

function App(props) {
  return (  
    <React.Fragment>
      <Nav/>
        <div className="main-body">
            <Switch>
                <Route exact path="/agoras" component={ Agoras}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/agora" component={Agora}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/user" component={User}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/login" component={LogIn}/>
            </Switch>
        </div>  
      <Footer/>
    </React.Fragment>  );
}
export default App;
