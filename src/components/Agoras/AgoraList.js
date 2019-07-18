import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Wrapper=styled.div`
display : flex; 
flex-flow: column; 
justify-content: flex-start; 
align-items: flex-start;
padding :1vh 0; 
`
const ImageContainer=styled.div`
display: flex;
height: 20vh;
width: 20vw; 
`
const Container=styled.div`
display : flex; 
flex-flow: row; 
justify-content: flex-start; 
align-items: center;
padding : 1vh 0`


const InfoContainer=styled.div`
display : flex; 
flex-flow: column wrap;
justify-content: flex-start; 
align-items: flex-start;
padding-left: 1vh;
width: 40vh;
`

const Members=styled.div`
`

const Location=styled.div``

const Name=styled.h3`
color : #0C214A;
font-size: 1.2rem;

`

function AgoraContainer(props){
    return(
        <Container>
            <ImageContainer>
                    <img src={props.agora.picture[0]} height="100%" width="100%" />
                </ImageContainer>
                
            <InfoContainer>
                <Name>{props.agora.name}</Name>
                <Members>{props.agora.members.length} members</Members>
                <Location>{props.agora.city}</Location>
                <Link to={`/agora/${props.agora._id}`}> See more </Link>
                <Link to={`/agora/${props.agora._id}`}> Update </Link>
            </InfoContainer>
        </Container>
    )
}

export default function AgoraList(props) {
    return (
        <Wrapper>
           
            {props.agoras.map( (agora, index) => 
                (<AgoraContainer key={index}
                                 agora={agora}
                                />))
                //( <li key={index}> {agora.name} with {agora.members.length} members situated in {agora.city} </li>))
          
            }
        </Wrapper>
    )
}


