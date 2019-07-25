
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
        this.currentUser=this.props.location.state.currentUser;
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
        event.preventDefault();
        const {agora} = this.state      
        if (!this.checkAllFields()) return console.warn("form incomplete");
        var fd = new FormData();

        console.log("currentUser", this.currentUser)

        if(this.action==="create"){
            console.log("coucou")
   
            Object.keys(agora).forEach(item =>{
                for(let x of fd) console.log("form data --------",x)
                if(item === "picture")agora[item].forEach(key =>fd.set("picture", key, key.name))

                else if([ 'members', 'projects'].includes(item)) agora[item].forEach(key => fd.set([item], key))

                else {fd.append(item, agora[item])}
            })

            fd.append("admin", this.currentUser._id);
            fd.append("members", this.currentUser._id);

            for(let x in fd){console.log(x)}

            this.state.newAgoraHandler.createOne(fd, newAgora => {
                console.log("created agora --", newAgora)
                this.props.history.push("/agoras");
            })
        }   

        if(this.action==="update"){
            console.log("coucou update")

             Object.keys(agora).forEach(item =>{
                if(item === "picture")agora[item].forEach(key =>fd.set("picture", key, key.name))

                else if([ 'members', 'projects'].includes(item)) agora[item].forEach(key => fd.set([item], key))

                else {fd.append(item, agora[item])                
                }
            })

            this.state.agoraHandler.updateOne(agora._id, fd,  updatedAgora => {
                console.log("updatedAgora --", updatedAgora)
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
                dbres.picture=[]
                this.setState({agora: dbres}, () => console.log("this.state from DB updated with empty picture ----", this.state))
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

         console.log("this action ---", this.action)
         console.log("this.currentUser ----" , this.currentUser)
        return (
            <>
            <FormContainer 
                 titleForm={title}
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

