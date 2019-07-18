
import React, { Component } from 'react'

//ajax handler
import ajaxHandler from "../../utils/ajaxHandler"

//components
import FormContainer from "../Utils/FormContainer"

//var FormData = require('form-data');

import styled from 'styled-components'
const FormTitle= styled.h2`
color : #0C214A; 
text-align : center; 
`

export default class UpdateAgoraForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            agora: {
                _id : "",
                name:"A funny name for your agora",
                description: "What's its purpose ?",
                picture: [],
                address : "An address ",
                zipcode : "A zipcode",
                city: "A city",
                members: [],
                projects:[],
            },
            agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
            newAgoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras/new"),
        };
        this.action =this.props.location.state.action;
        this.id=this.props.location.state.agoraID;
    }

    checkAllFields() {
        //todo : check if address is a valid google maps request
        return true;
      }

    handleChange =(event) =>{
        let { name, value } = event.target;
        this.setState({
            agora: {...this.state.agora, [name]:value }
          });
    }

    handleSubmit = (event)  =>{
        const {agora} = this.state
        event.preventDefault();
        if (!this.checkAllFields()) return console.warn("form incomplete");

        var fd = new FormData();
       
        Object.keys(agora).forEach(item =>{
            if(typeof agora[item] === "object" && item !== "picture"){
                fd.append([item], JSON.stringify(agora[item]))
            }
            else{
                fd.append([item], agora[item])
                if (item=="picture" && agora[item][0]!==undefined) fd.set("picture", agora[item][0], agora[item][0].name)
            }
        })

    if(this.action==="update"){
        this.state.agoraHandler.updateOne(agora._id, fd,  updatedAgora => {
            this.props.history.push("/agoras");
           
        })
    }
    if(this.action==="create"){
        this.state.newAgoraHandler.createOne(fd, newAgora => {
            this.props.history.push("/agoras");
        })
    }
    } 
    
    onDrop = (picture)=> {
        this.setState({agora:{...this.state.agora, picture: this.state.agora.picture.concat(picture)}});
    }

    componentDidMount(){
        if(this.action==="update"){
            this.state.agoraHandler.getOne(this.id, (dbres) =>{
                console.log("dbres getOne : ", dbres)
                this.setState({agora: dbres}, () => console.log("this.state ----", this.state))
            })           
        }
    }
  

    render() {
        let title; let submit; 
         if (this.action==="create") {
             title="Create your agora";
             submit="Submit your new agora"
         }
         else{
            title="Update your agora";
            submit="Submit your updated agora"
         }
        return (
            <>
            <FormTitle> {title} </FormTitle>
            <FormContainer 
                exceptions={["_id", "__v", "picture", "members", "projects"]}
                handleSubmit={this.handleSubmit}
                object={this.state.agora}
                handleChange={this.handleChange}
                onDrop={this.onDrop}
                singleImage={true}
                //displayForm={this.props.displayForm}
                textSubmit={submit}/>
            </>
        )
    }
}

