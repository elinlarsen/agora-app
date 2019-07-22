import React from 'react'
import styled from 'styled-components'

const SearchStyle=styled.input`
width: 20vw; 
border : 1px solid white;
border-bottom: #0C214A;
border-radius : 10px; 
padding: 1vh;
font-size : 1.3rem;
color : #0C214A; 
margin: 1vh; 
`


export default function SearchBar(props) {
    return (
        <SearchStyle  type="text" onChange={(e) => props.handleChange(e.target.value)} 
    placeholder={props.placeholder} /> )
}
