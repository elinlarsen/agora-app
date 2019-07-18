import React from 'react'
import styled from 'styled-components'

const Button=styled.button`
    width: 20vw; 
    background-color : #0C214A
    border : 1px solid #0C214A;
    border-radius : 10px; 
    padding: 1vh;
    font-size : 1.2rem;
    color : white; 
    margin: 1vh;
`

const Wrapper = styled.div`
  &:hover ${Button} {
    background-color : white;
    color : #0C214A

  }
`

export default function CreateButton(props) {
    return (
        <Wrapper>
            <Button disabled={props.disabled} onClick={props.clbk}>{props.text} </Button>     
        </Wrapper>       
    )
}
