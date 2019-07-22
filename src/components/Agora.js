//react librairies
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

// axios handler
import ajaxHandler from "../utils/ajaxHandler.js";

//components
import ProjectCard from "./Projects/ProjectCard.js";
import SearchBar from './Utils/SearchBar'
import filterBy from '../utils/utilFunctions'
import CreateButton from './Utils/CreateButton';

const Main= styled.div`
display : flex; 
flex-flow : column wrap; 
justify-content : center; 
align-items:center; 
padding : 1vh; 
`

const ProjectsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 30px 0px;
padding: 50px;
`;

const Title= styled.h1`
text-align: center; 
color : #0C214A; 
`
const SubTitle= styled.p`
text-align: center; 
color : #0C214A; 
`



export default class Agora extends Component {

   state={
        search: "",
        agora : {
            projects: [],
            members: [],
            picture: []
        },
        agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
        displayForm: false,
    } 

   handleSearch = (searchedText) =>{
    this.setState({search: searchedText.toLowerCase()})
    }

    filterProjects = () => filterBy(this.state.search, this.state.agora.projects, "name")

    componentDidMount = () => {
        let expandItem = "projects";

        this.state.agoraHandler.getOne(
            this.props.match.params.id,
            data => this.setState({ agora :  data })
            ,
            expandItem
        );
      };

      handleDelete = (agora_id) => {
        this.state.agoraHandler.deleteOne(agora_id, dbRes => {
            let deletedAgoraInDb = dbRes
            let copy = [...this.state.agoras]
            let index = copy.indexOf(deletedAgoraInDb);
            copy.splice(index, 1)
            this.setState({
                agoras: copy
            }, () => console.log("deleted in the state"))
        })
    }

    render() {
        console.log("this.state.agora----", this.state.agora)
        console.log("filterProjects()", this.filterProjects())
        return (
            <Main>
                <Title>Welcome to the Agora {this.state.agora.name} ! </Title>
                <SubTitle> {this.state.agora.description} </SubTitle>
                <div> 
                        <Link style={{textDecoration : 'none', color : '#0C214A' }} to={
                                    {   pathname: '/agoracreate',
                                        state: {
                                            agoraID: this.state.agora._id,
                                            action : "update", 
                                        } }}>Update</Link>      
                        <CreateButton clbk={() => this.handleDelete(this.state.agora._id)}
                                    text="Delete" 
                                    disabled={false}>
                        </CreateButton>
                        <SearchBar handleChange={this.handleSearch} placeholder="Find a project by its name."/>
                </div>

                {this.state.agora.projects!==undefined}
                <ProjectsGrid> {
                        this.filterProjects().map(projectItem => (
                        <ProjectCard project={projectItem} 
                                    key={projectItem._id}/>
                     ))}        
                 </ProjectsGrid>;  
            </Main>
        )
    }
}
