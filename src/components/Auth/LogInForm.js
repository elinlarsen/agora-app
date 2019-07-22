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
        signin( (status) => { // this callback is executed inside the Provider !!!
          this.props.redirect("/agoras");
          console.log("status ----", status)
        }, {email, password : pwd});

        //for (let x of fd) (console.log("fd key value : ", x, "type of ", typeof x))
      };
    
    checkAllFieldsFilled() {}


    handleChange = evt => {
        let copy=this.state.user
        const { name, value } = evt.target;
        copy[name].value=value 
        this.setState({ user : copy });
      };

    render() {

        return (
            <AuthConsumer>
                {({ signin }) => (
                    <FormContainerProject 
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
