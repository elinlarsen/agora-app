import React, { Component } from 'react'

import { AuthConsumer } from "./Guard";
import FormContainerProject from "../Utils/FormContainerProject"

export default class LogIn extends Component {

    state ={
        user : {
            email : {
                name : "email",
                label : "Your email",
                 value : "demo@email.com",
                 type : "text"
            },
            password :
            {
                name : "password",
                label : "Your password",
                value : "testtest",
                type : "password"
            } 
        }
    }

    handleSubmit = (evt, signin) => {
        let email= this.state.user.email.value
        let pwd=this.state.user.password.value
        evt.preventDefault();
        signin( (status) => this.props.redirect("/agoras"), {email, password : pwd});
    };
    
    checkAllFieldsFilled() {}

    handleChange = evt => {
        let copy=this.state.user
        const { name, value } = evt.target;
        copy[name].value=value 
        this.setState({ user : copy });
      };

    render() {
        let user=""
        return (
            <AuthConsumer>
                {({ signin }) => (
                   
                        <FormContainerProject 
                            currentUser={user}
                            titleForm="Account Log In"
                            exceptions= {[""]}
                            handleSubmit={evt => this.handleSubmit(evt, signin)}
                            object={this.state.user}
                            handleChange={this.handleChange}
                            textSubmit="Log In !"
                            imageUploader={false}
                            />               
                            )}                  
            </AuthConsumer>
        )
    }
}
