import React, { Component } from 'react'
import {Link} from "react-router-dom";

//components
import SearchBar from './Utils/SearchBar'
import AgoraList from './Agoras/AgoraList'
import AgoraMap from "./Agoras/AgoraMap"
//import AgoraForm from "./Agora/AgoraForm"
//import CreateButton from "./Utils/CreateButton"

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
height: inherit; 
`
const Wrapper=styled.div`
display : flex; 
flex-flow: row wrap; 
justify-content: space-between; 
align-items: flex-start; 
height: inherit; 
`

const SearchContainer=styled.div`
height: 10vh; 
width : 100%; 
display : flex; 
justify-content: center; 
align-items: center;
font-weigth: bold;  
font-size : 2rem; 
`

const AgorasContainer=styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: flex-start;
height: inherit; 
padding-bottom : 7vh `

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
            return Geocode.fromAddress(agora.address)
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

    handleAddAgora = (newAgora) =>{
        let copy=[...this.state.agoras]
        this.getCoordinatesAndMarkers([newAgora]) 
        copy.push(newAgora)
         this.setState({
            agoras : copy,
            displayForm: !this.state.displayForm})
    }

    handleDelete = (agora_id) =>{
        this.state.agoraHandler.deleteOne(agora_id, dbRes =>{
            let deletedAgoraInDb=dbRes      
            let copy=[...this.state.agoras]
            let index = copy.indexOf(deletedAgoraInDb);
            copy.splice(index, 1) 
            this.setState({
                agoras: copy
            }, () => console.log("deleted in the state"))
        })
    }

    handleUpdateAgora = ()=>{
        console.log("coucou")

    }

    render() {
       console.log(" ----- ----- ----- ----- -----")
        return (
            <MainBody>   
                <SearchContainer>
                    <Link style={{textDecoration : 'none', color : '#0C214A'}} to={{ pathname: '/agoracreate',state: {action : "create"}}}>
                            Create your agora!  
                    </Link> 
                </SearchContainer>
   
                <Wrapper> 
                     
                    <AgorasContainer>
                        <SearchBar handleChange={this.handleSearch} 
                                   placeholder="Find an agora"/>
                        <AgoraList agoras={this.filterAgoras()}
                                   handleDelete={this.handleDelete}
                                   displayForm={this.state.displayForm}
                                   handleUpdateAgora={this.handleUpdateAgora}                   
                        />
                    </AgorasContainer>

                    <AgoraMap style={{position: "relative"}} 
                              agoras={this.filterAgoras()}
                              />                  
                 </Wrapper> 
                 {/*this.state.displayForm && <AgoraForm 
                                                displayForm={this.state.displayForm} 
                                                addNewAgora={this.handleAddAgora}/>}
                {<CreateButton clbk={this.handleDisplayForm} 
                              text="Create your Agora!"/>  */}
            </MainBody>
        )
    }
}
