import React, { Component } from 'react'
import styled from "styled-components";
import ajaxHandler from "../ajaxHandler.js";
import ProjectCard from "./Projects/ProjectCard.js";

import SearchBar from './Utils/SearchBar'
import filterBy from '../utils/utilFunctions'


const ProjectsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 30px 0px;
padding: 50px;
`;

export default class Agora extends Component {
    /*
    props : agoraId
    state : 
        filtered projects

        if agoraId == null => form create Agora
        else description & ...
    */

   state={
        search: "",
        agora : "",
        agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL, "/agoras"),
        displayForm: false,
    } 

   handleSearch = (searchedText) =>{
    this.setState({search: searchedText.toLowerCase()})
    }

    filterProjects = () => filterBy(this.state.search, this.state.projects, "name")

    componentDidMount = () => {
        //let expandItem = queryString.parse(this.props.location.search).expand;
        let expandItem = "projects";
        //console.log("expand item is " + expandItem);
        this.state.agoraHandler.getOne(
          this.props.match.params.id,
          data => {
            this.setState({ agora : {              
                _id: data._id,
                name: data.name,
                description: data.description,
                picture: data.picture,
                members: data.members,
                projects: data.projects,
                address: data.address,
                zipcode: data.zipcode,
                city: data.city
                }
            });
            console.log(data)
          },
          expandItem
        );
      };

    render() {
        console.log("this.state.agora-----", this.state.agora)
        return (
            <div>
                <SearchBar handleChange={this.handleSearch}/>
                            
            </div>
        )
    }
}
