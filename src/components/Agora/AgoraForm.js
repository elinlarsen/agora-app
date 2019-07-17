
import React, { Component } from 'react'

//ajax handler
import ajaxHandler from "../../utils/ajaxHandler"

//components
import FormContainer from "../Utils/FormContainer"

//var FormData = require('form-data');


export default class AgoraForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newAgora: {
                name:"new agora",
                description: "the goal of your agora",
                picture: [],
                address : "Type an address Google Maps will understand ",
                zipcode : "Zipcode",
                city: "Your city",
                members: [],
                projects:[],
            },

            newAgoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL, "/agoras/new"),
        }   
    }

    checkAllFields() {
        //todo : check if address is a valid google maps request
        return true;
      }

    handleChange =(event) =>{
        let { name, value } = event.target;
        this.setState({
            newAgora: {...this.state.newAgora, [name]:value }
          });
    }

    handleSubmit = (event)  =>{
        const {newAgora } = this.state
        event.preventDefault();
        if (!this.checkAllFields()) return console.warn("form incomplete");

        var fd = new FormData();
       
        Object.keys(this.state.newAgora).forEach(item =>{
            if(typeof newAgora[item] === "object" && item !== "picture"){
                const stringifiedArr = JSON.stringify(newAgora[item])
                fd.append([item], stringifiedArr)
            }
            else{
            fd.append([item], this.state.newAgora[item])
            if (item=="picture" && this.state.newAgora[item][0]!==undefined) fd.set("picture", this.state.newAgora[item][0], this.state.newAgora[item][0].name)
            }
        })

        console.log("form data updated ------", fd)
        for(let x of fd) console.log(x)
      
        this.state.newAgoraHandler.createOne(fd, dbres => {
            console.log("fd after db handler ", fd)
            console.log("dbres ---->", dbres)
        })

        this.props.addNewAgora(this.state.newAgora); //pass the new agora into the parent state
    } 
    
    onDrop = (picture)=> {
        console.log(picture)
        this.setState({newAgora:{...this.state.newAgora, picture: this.state.newAgora.picture.concat(picture)}});
    }
    //todo : spread
  

    render() {
        return (
            <>
            {this.props.displayForm}
            <FormContainer 
                exceptions={["picture", "members", "projects"]}
                handleSubmit={this.handleSubmit}
                object={this.state.newAgora}
                handleChange={this.handleChange}
                onDrop={this.onDrop}
                singleImage={true}
                displayForm={this.state.displayForm}
                textSubmit="Submit your new Agora!"/>
            </>
        )
    }
}

