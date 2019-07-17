import React, { Component } from 'react'
import UserStatus from "./UserStatus"
import styled from 'styled-components'
import {Link} from "react-router-dom";

const NavContainer=styled.div`
    display : flex; 
    flex-flow : row nowrap; 
    justify-content :space-between;
    align-items: center;  
    background-color : #0C214A;
    height: 10vh; 
    padding : 0 2vw; 
`

const Logo=styled.div`
    font-size: 3rem; 
    color: white; 
`

export default class Nav extends Component {
    render(){
        return (
            <NavContainer>
                
                <Link to="/" style={{ textDecoration: 'none' }}> <Logo>Agora</Logo></Link>
                
                <UserStatus logInStatus={this.props.logInStatus}
                            userInfo={this.props.userInfo}/>
            </NavContainer>
        )
    }
}
