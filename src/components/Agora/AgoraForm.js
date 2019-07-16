import React, { Component } from 'react'

//ajax handler
import ajaxHandler from "../../utils/ajaxHandler"

//components
import FormContainer from "../Utils/FormContainer"


export default class AgoraForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newAgora: {
                name:"new agora",
                description: "the goal of your agora",
                image: [],
                address : "Type an address Google Maps will understand ",
                zipcode : "Zipcode",
                city: "Your city",
                members: [],
                projects:[],
            },
            displayForm: false,
            newAgoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL, "/agoras/new"),
        }   
    }

    handleChange =(event) =>{
        let { name, value } = event.target;
        this.setState({
            newAgora: {...this.state.newAgora, [name]:value }
          });
    }

    handleSubmit = (event)  =>{
        event.preventDefault();      
        this.state.newAgoraHandler.createOne(this.state.newAgora, dbres => {
            this.setState({displayForm: !this.state.displayForm})
        })
        this.props.addNewAgora(this.state.newAgora); //pass the new agora into the parent state
    } 
    
    onDrop = (picture)=> {
        this.setState({newAgora:{ image: this.state.newAgora.image.concat(picture)}});
    }

    render() {
        return (
            <>
            {this.state.displayForm}
            <FormContainer 
                exceptions={["image", "members", "projects"]}
                handleSubmit={this.handleSubmit}
                object={this.state.newAgora}
                handleChange={this.handleChange}
                onDrop={this.onDrop}
                singleImage={this.singleImage}
                displayForm={this.state.displayForm}
                textSubmit="Submit your new Agora!"/>
            </>
        )
    }
}

