import React, { Component } from 'react'

//components
import SearchBar from './Utils/SearchBar'
import AgoraList from './Agoras/AgoraList'
import AgoraMap from "./Agoras/AgoraMap"
import AgoraForm from "./Agora/AgoraForm"
import CreateButton from "./Utils/CreateButton"

//utils
import ajaxHandler from "../utils/ajaxHandler"
import filterBy from "../utils/utilFunctions"

import { Marker } from 'google-maps-react';
import Geocode from "react-geocode";

import styled from 'styled-components'

const MainBody=styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: center; 
padding: 0 1vw; 
height: 80vh; 
`
const Wrapper=styled.div`
display : flex; 
flex-flow: row wrap; 
justify-content: space-evenly; 
align-items: center; 
`

const AgorasContainer=styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: flex-start;
padding : 2vh 0; `

export default class Agoras extends Component {

    state={
        search: "",
        agoras : [],
        agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
        markers :[],
        displayForm: false,
    } 

   handleSearch = (searchedText) =>{
    this.setState({search: searchedText.toLowerCase()})
    this.filterMarkers()
    }

    locationToMarker =  (agora, index, location) =>{
        const { lat, lng } = location.results[0].geometry.location; 
        let marker=<Marker
                        key={index}
                        position={{lat: lat,lng:lng}}
                        animation={3}
                        />
        agora.coords ={ lat, lng }
        agora.marker=marker
        
        return agora
    }

    getCoordinatesAndMarkers = (agoras) =>{
        agoras.map( (agora, index) => {
            Geocode.fromAddress(agora.address)
            .then(response => {
                this.locationToMarker(agora, index, response)
                })
            .catch(err => {
                console.log("ERROR ADDRESS ----- ", err, "this address is -----", agora.address)
                Geocode.fromAddress(agora.zipcode)
                    .then( res => {
                        this.locationToMarker(agora, index, res)
                        })
                    .catch(err => console.log("ERROR ZIPCODE", err, "the zipcode is ----", agora.zipcode))
            })
        })
    }

    filterAgoras = () => filterBy(this.state.search, this.state.agoras, "name")


    filterMarkers = () =>{
        let filteredAgoras= this.filterAgoras()
        console.log("coucou")
        this.getCoordinatesAndMarkers(filteredAgoras)
    }   

    componentDidMount() {  
        this.state.agoraHandler.getAll(dbRes => 
            {
                this.setState({agoras: dbRes})
                this.filterMarkers()
        })             
    } 

    handleDisplayForm = () =>{
        this.setState({displayForm: !this.state.displayForm})
    }

    handleAddAgora = (theAgora) =>{
        let copy=[...this.state.agoras]
        copy.push(theAgora)
         this.setState({
            agoras : copy,
            displayForm: !this.state.displayForm})
    }

    render() {
       console.log(" ----- ----- ----- ----- -----")
       //console.log("this.state.agoras", this.state.agoras)
        return (
            <MainBody>        
                <Wrapper>        
                    <AgorasContainer>
                        <SearchBar handleChange={this.handleSearch} placeholder="Find an agora"/>
                        <AgoraList agoras={this.filterAgoras()}/>
                    </AgorasContainer>

                    <AgoraMap style={{position: "relative"}} 
                              agoras={this.filterAgoras()}
                              />            
        
                 </Wrapper> 
                 {this.state.displayForm && <AgoraForm 
                displayForm={this.state.displayForm} 
                addNewAgora={this.handleAddAgora}/>}

                <CreateButton clbk={this.handleDisplayForm} 
                              text="Create your Agora!"/>   
            </MainBody>
        )
    }
}
