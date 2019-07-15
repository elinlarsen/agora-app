import React, { Component } from 'react'


import SearchBar from './Utils/SearchBar'
import AgoraList from './Agoras/AgoraList'
import AgoraMap from "./Agoras/AgoraMap"
import AgoraWidget from "./Agoras/AgoraWidget"

import ajaxHandler from "../utils/ajaxHandler"


export default class Agoras extends Component {

    /*
    state : 
        - filtered pour la search bar
        - agoraList (updated when edited and new agora added / deleted )
    qui va être passer dans la list et la map 
    */

    state={
        search: "",
        agoras : [],
        agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL, "/agoras"),
    } 

    componentDidMount() {
        this.state.agoraHandler.getAll(dbRes => 
            {this.setState({agoras: dbRes})
        })               
    } 

   handleSearch = (searchedText) =>{
    this.setState({search: searchedText.toLowerCase()})
    }


    render() {
        let filteredAgoras;
        this.state.search!=="" 
        ? filteredAgoras =this.state.agoras.filter(
            item => item.name.toLowerCase().includes(this.state.search))
        : filteredAgoras=this.state.agoras
        console.log("this.state.agoras ----", this.state.agoras)
        console.log("filteredAgoras ----", filteredAgoras )
        
        return (
            <div>
                 <SearchBar handleChange={this.handleSearch}/>
                 <AgoraList agoras={filteredAgoras}/>
                 <AgoraMap agoras={filteredAgoras}/>
                 <AgoraWidget/>
            </div>
        )
    }
}
