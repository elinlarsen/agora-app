import React from 'react'
import styled from 'styled-components'

const Input=styled.input`
    width: 30vw;
    border : 1px solid green;
    border-radius : 10px; 
    padding: 1vh;
    font-size : 1.2rem;
    color : green; 
`

const Label=styled.label`
    text-align: center;
    font-size : 1.3rem;
    color : black; 
`


export default function InputForm(props) {
    return (
        <>
        <Label> {props.label} </Label>
        <Input type={props.text} 
               key={props.name}
               name={props.name} 
               value={props.value} 
               onChange={props.onChange} 
               required /> 
        </>           
    )
}
