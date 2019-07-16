import React from 'react'
import styled from 'styled-components'

const Button=styled.button`
    width: 50%;
    border : 1px solid green;
    border-radius : 10px; 
    padding: 1vh;
    font-size : 1.2rem;
    color : green; 
`

export default function CreateButton(props) {
    return (
        <Button disabled={props.disabled} onClick={props.clbk}>{props.text} </Button>            
    )
}
