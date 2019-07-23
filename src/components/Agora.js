//react librairies
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

//icon
import { FiTrash } from 'react-icons/fi';
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

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
height: inherit; 
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

const Button=styled.button`
    width: 15vw; 
    border : 1px solid #0C214A;
    border-radius : 10px; 
    padding: 1vh;
    font-size : 1.2rem;
    color : #0C214A; 
    margin: 1vh;
`

const IconButton=styled(Button)`
width: 3vw;
border: none;
background-color : #faf9f8
padding: 1vh 0;
margin: 1vh 0;
font-size : 0.8rem;
cursor : pointer; 
`

const Info=styled.div`
display : flex; 
flex-flow: column wrap;
justify-content : space-around;
align-items : center; 

`

const CTAwrapper = styled.div`

display : flex; 
flex-flow: row wrap;
justify-content : space-around;
align-items : center; 
bakckground-color: white; 
height : 15vh;


  &:hover ${Button} {
    background-color :  #0C214A
    color :white;
    cursor : pointer; 

  }`

  const MembersWrapper=styled.div`
  width : 100vw;
  `

  const Number=styled.div`
  width : inherit; 
  height : 30vh; 
  background-color: #0C214A; 
  color : white;
  font-size : 3rem; 
  display : flex; 
  flex-flow: column nowrap; 
  justify-content: flex-start; 
  align-items: center; 
  padding-bottom : 5vh
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
            data => {
                this.setState({ agora :  data }              
                )}
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

    handleJoinAgora =()=>{}

    handleAddProject = (newProject) =>{
        let copy=this.state.agora
        copy.projects.push(newProject._id)
        this.setState({agora : copy}, () => console.log("agora with new project : ", this.state.agora))

    }

    render() {
        console.log("this.state.agora----", this.state.agora)
        console.log("filterProjects()", this.filterProjects())
        return (
            <Main>
                <Info>
                    <Title> Welcome to the Agora {this.state.agora.name} ! 
                    <Link   style={{textDecoration : 'none', color : '#0C214A' }} 
                            to={{   pathname: '/agoracreate',
                                    state: {
                                        agoraID: this.state.agora._id,
                                        action : "update", 
                                        
                                    } }}          
                            onClick={this.handleAddProject} >
                               <IconButton type="button" ><FiEdit /></IconButton>                               
                    </Link> 

                    <IconButton  type="button" onClick={() => this.handleDelete(this.state.agora._id)}> <FiTrash /> </IconButton>
                    
                               
                    </Title>
                    <SubTitle> {this.state.agora.description} </SubTitle>
                    <em> {this.state.agora.address}, {this.state.agora.city} </em> 
              </Info>
                                   

                <CTAwrapper> 
                    <SearchBar handleChange={this.handleSearch} placeholder="Find a project by its name."/>

                    <Link style={{ textDecoration: 'none', color: '#0C214A' }} 
                          to={{ pathname: '/projectcreate', 
                                state: { action: "create", 
                                         agora : this.state.agora, } }}>
                        Create a project! 
                    </Link>

                </CTAwrapper>

                {this.state.agora.projects!==undefined}
                <ProjectsGrid> {
                        this.filterProjects().map(projectItem => (
                        <ProjectCard project={projectItem} 
                                    key={projectItem._id}/>
                     ))}        
                 </ProjectsGrid>

                 <MembersWrapper> 
                     <Number> 
                            <p> {this.state.agora.members.length} members </p>
                            <Button  type="button" onClick={() => this.handleJoinAgora(this.state.agora._id)}> Join now! </Button>                         
                     </Number>


                 </MembersWrapper>

            </Main>
        )
    }
}
