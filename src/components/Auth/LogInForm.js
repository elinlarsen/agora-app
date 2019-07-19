import React, { Component } from 'react'
import { AuthConsumer } from "./Guard";
import FormContainerProject from "../Utils/FormContainerProject"

export default class SignUp extends Component {

    state ={
        user : {
            email : {
                name : "email",
                label : "Your email",
                 value : "first_last@email.com",
                 type : "text"
            },
            password :
            {
                name : "password",
                label : "Your password",
                value : "Ah5y!i)2GH",
                type : "password"
            } 
        }
    }

    handleSubmit = (evt, signin) => {
        // the handleSubmit method here receives 2 params
        // 1 - the classic event object
        // 2 - the signin function, passed by the AuthConsumer
        evt.preventDefault();
        signin((status) => { // this callback is executed inside the Provider !!!
          this.props.redirect("/agoras");
        }, this.state);
      };

      checkAllFieldsFilled() {
          // TODO
      }


    handleChange = evt => {
        let copy=this.state.user
        const { name, value } = evt.target;
        copy[name].value=value 
        this.setState({ user : copy });
      };

    render() {
        console.log("state --", this.state.user)
        return (
            <AuthConsumer>
                {({ signin }) => (
                    <FormContainerProject 
                        exceptions= {[""]}
                        handleSubmit={evt => this.handleSubmit(evt, signin)}
                        object={this.state.user}
                        handleChange={this.handleChange}
                        textSubmit="Sign In !"
                        imageUploader={false}
                        />
                        
                        )}
            </AuthConsumer>
        )
    }
}
