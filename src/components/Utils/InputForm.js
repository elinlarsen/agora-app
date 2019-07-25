import React from 'react'
import {StyledInput, Label} from './StyledComponents'


export default function InputForm(props) {
    return (
        <>
        <Label> {props.label} </Label>
        <StyledInput type={props.text} 
               key={props.name}
               name={props.name} 
               value={props.value} 
               onChange={props.onChange} 
               required /> 
        </>           
    )
}
