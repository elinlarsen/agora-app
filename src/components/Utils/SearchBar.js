import React from 'react'
import styled from 'styled-components'

const SearchStyle=styled.input`
width: 20vw; 
border : 1px solid #0C214A;
border-radius : 10px; 
padding: 1vh;
font-size : 1.2rem;
color : white; 
margin: 1vh; 
background-color : navy; 
background-opacity : 0.2;

`

export default function SearchBar(props) {
    return (
        <SearchStyle type="text" onChange={(e) => props.handleChange(e.target.value)} 
        placeholder={props.placeholder} /> 
    )
}
