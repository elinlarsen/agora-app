import React from 'react'
import UserStatus from "./UserStatus"
import styled from 'styled-components'
import {Link} from "react-router-dom";

const NavContainer=styled.div`
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
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

export default function Nav(props) {
    return (
        <NavContainer>              
            <Link to="/" style={{ textDecoration: 'none' }}> <Logo>Agora</Logo></Link>
          
            <UserStatus/>
            
        </NavContainer>
    )
}



