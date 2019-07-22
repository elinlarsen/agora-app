import React, { Component } from 'react'
import { Link } from "react-router-dom";

//components
import SearchBar from './Utils/SearchBar'
import AgoraList from './Agoras/AgoraList'
import AgoraMap from "./Agoras/AgoraMap"
//import AgoraForm from "./Agora/AgoraForm"
//import CreateButton from "./Utils/CreateButton"

//utils
import ajaxHandler from "../utils/ajaxHandler"
import filterBy from "../utils/utilFunctions"

import Geocode from "react-geocode";

import styled from 'styled-components'


Geocode.enableDebug();

const MainBody = styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: center; 
padding: 0 1vw; 
height: inherit; 
`
const Wrapper = styled.div`
display : flex; 
flex-flow: row wrap; 
justify-content: space-between; 
align-items: flex-start; 
height: inherit; 
`

const CTAContainer = styled.div`
height: inherit; 
width : 100%; 
display : flex; 
justify-content: center; 
align-items: center;
font-weigth: bold;  
font-size : 2rem; 
`

const AgorasContainer = styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: flex-start;
height: inherit; 
padding-bottom : 7vh `

export default class Agoras extends Component {

    state = {
        search: "",
        agoras: [],
        agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
        displayForm: false,
        isOpen: false,
        infoIndex: null
    }

    onToggleOpen= (isOpen) => {
        this.setState({isOpen  : !isOpen}, () => console.log("new isopen", isOpen))
    }

    showInfo = (index) =>{
        let copy=this.state
        copy.infoIndex=index
        copy.isOpen=!this.state.isOpen
        this.setState(copy, () => console.log("new state after show info fn : ", this.state))
    }


    handleSearch = (searchedText) => {
        this.setState({ search: searchedText.toLowerCase() }, () => {
        })
    }

    getCoordinatesAndMarkers = (agoras) => {
        const codes = new Array(agoras.length);
        return new Promise((resolve, reject) => {
            agoras.forEach(async (agora, i) => {
                try {
                    const geocode = await Geocode.fromAddress(agora.zipcode);
                    codes[i] = geocode.results[0].geometry.location;
                    const count = codes.reduce((acc, v) => { if (v) acc += 1; return acc }, 0)
                    if (count === agoras.length) resolve(codes)

                } catch (error) {reject(error)}
            })
        })
    }

    filterAgoras = () => filterBy(this.state.search, this.state.agoras, "zipcode")

    componentDidMount() {
        this.state.agoraHandler.getAll(async dbRes => {
            this.getCoordinatesAndMarkers(dbRes)
                .then(codes => {
                    dbRes.forEach((agora, i) => {
                        agora.geocode = codes[i];
                    })
                    this.setState({ agoras: dbRes })
                })
        })
    }

    handleDisplayForm = () => {
        this.setState({ displayForm: !this.state.displayForm })
    }

    handleAddAgora = (newAgora) => {
        let copy = [...this.state.agoras]
        this.getCoordinatesAndMarkers([newAgora])
        copy.push(newAgora)
        this.setState({
            agoras: copy,
            displayForm: !this.state.displayForm
        })
    }

  
    render() {
        console.log(" renda ----- ----- ----- ----- -----")
        return (
            <MainBody>
                <CTAContainer>
                    <SearchBar  handleChange={this.handleSearch} placeholder="Search an agora by its zipcode." />
                    <Link style={{ textDecoration: 'none', color: '#0C214A' }} to={{ pathname: '/agoracreate', state: { action: "create" } }}>
                        Create your agora!
                    </Link>
                </CTAContainer>

                <Wrapper>
                    {/*<AgorasContainer>
                        <AgoraList agoras={this.filterAgoras()}
                            handleDelete={this.handleDelete}
                            displayForm={this.state.displayForm}
                            handleUpdateAgora={this.handleUpdateAgora}
                        />
                    </AgorasContainer>*/}

                    <AgoraMap style={{ position: "relative" }}
                              agoras={this.filterAgoras()}
                              handleDelete={this.handleDelete}
                              handleUpdateAgora={this.handleUpdateAgora}
                    />
                </Wrapper>
            </MainBody>
        )
    }
}
