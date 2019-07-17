import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const FooterContainer=styled.div`
    display : flex; 
    flex-flow : row nowrap; 
    justify-content :space-between;
    align-items: center;  
    background-color : #0C214A;
    height: 5vh; 
    padding : 0 2vw; 
`

const P=styled.div`
color : white;  
font-size: 1.2rem; 
`

export default function Footer() {
    return (
        <FooterContainer>
                <P> Made with love </P>
                <Link to={"/about"} style={{ textDecoration: 'none' }}> <P> About </P> </Link>
         
        </FooterContainer>
    )
}
