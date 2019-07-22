import React, { Component } from "react";
import ajaxHandler from '../../utils/ajaxHandler'
import FormContainerProject from "../Utils/FormContainerProject"

const signUpHandler = new ajaxHandler (process.env.REACT_APP_API_URL_, "/signup");

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    user : {
        first_name: {
            name : "first_name",
            label : "Your firstname", 
            value: "Anne",
            type : "text",
        },
        last_name: {
            name : "last_name",
            label: "Your lastname",
            value : "Hidalgo",
            type : "text"},
        username: {
            name : "username",
            label: "Choose an username",
            value : "testusername",
            type : "text"
        },
        email:  {
                name : "email",
                label : "Your email",
                value : "first_last@email.com",
                type : "text"
                },         
        picture: [],
        password: {
            name  : "password", 
            label: "A (safe) password",
            value : "Ahydzd78NF",
            type : "password",
        },
        passwordConfirm: {
            name  : "passwordConfirm", 
            label: "Confirm your password",
            value : "Ahydzd78NF",
            type : "password",
        }
    }
  };


  // @todo 
  checkAllFields= () => {
      return this.checkPasswordMatch()
  }

  checkPasswordMatch = () => {
    const { password, passwordConfirm } = this.state;
    var passed = false;
    if (password && passwordConfirm) passed = password === passwordConfirm;
    else passed = true;
    return passed;
  }

  handleChange = evt => {
    let copy=this.state.user
    const { name, value } = evt.target;
    copy[name].value=value 
    this.setState({ user : copy });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.checkAllFields()) return console.warn("form incomplete");

    const {user} = this.state;
    const fd = new FormData();
    Object.keys(user).forEach(item =>{
        
        if(item === "picture"){
            console.log(item)
            user[item].forEach(key =>fd.set("picture", key, key.name))
        }
           
        else {
          console.log("user[item].value) -", user[item].value)
          fd.append(item, user[item].value)}
    })

    //for (let x of fd) (console.log("fd key value : ", x, "type of ", typeof x))

    signUpHandler.createOne( fd, serverRes => {
        this.props.redirect("/agoras");
        console.log("serverRes-----", serverRes)
    })
  };


  onDrop = (picture)=> {
    this.setState({user:{...this.state.user, picture: this.state.user.picture.concat(picture)}});
}

  render() {
     return (
      <FormContainerProject 
        exceptions={["picture"]}
        handleSubmit={this.handleSubmit}
        object={this.state.user}
        handleChange={this.handleChange}
        onDrop={this.onDrop}
        singleImage={true}
        textSubmit={"Sign up !"}   
      />

    );
  }
}