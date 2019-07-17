import React from 'react'
import styled from 'styled-components'

const SearchStyle=styled.input`
width: 30vw; 
border : 1px solid #0C214A;
border-radius : 10px; 
padding: 1vh;
font-size : 1.2rem;
color : #0C214A; 
margin: 1vh; 
`

export default function SearchBar(props) {
    return (
        <SearchStyle type="text" onChange={(e) => props.handleChange(e.target.value)} 
        placeholder="Search an agora by its name." /> 
    )
}
