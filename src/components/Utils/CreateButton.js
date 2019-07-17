import React from 'react'
import styled from 'styled-components'

const Button=styled.button`
    width: 30vw; 
    border : 1px solid #0C214A;
    border-radius : 10px; 
    padding: 1vh;
    font-size : 1.2rem;
    color : #0C214A; 
    margin: 2vh;
    margin-bottom: 3vh;  
`

const Wrapper = styled.div`
  &:hover ${Button} {
    background-color : #0C214A;
    color : white

  }
`

export default function CreateButton(props) {
    return (
        <Wrapper>
            <Button disabled={props.disabled} onClick={props.clbk}>{props.text} </Button>     
        </Wrapper>       
    )
}
