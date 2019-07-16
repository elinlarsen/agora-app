import React from 'react'
import styled from 'styled-components'

const SearchStyle=styled.input`
width: 50%;
border : 1px solid green;
border-radius : 10px; 
padding: 1vh;
font-size : 1.2rem;
color : green; 
`

export default function SearchBar(props) {
    return (
        <SearchStyle type="text" onChange={(e) => props.handleChange(e.target.value)} 
        placeholder="Search an agora by its name." /> 
    )
}
