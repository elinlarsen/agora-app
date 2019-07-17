import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Wrapper=styled.div`
display : flex; 
flex-flow; column; 
justify-content: flex-start; 
align-items: flex-start;
`
const ImageContainer=styled.div`
display: flex;
height: 20vh;
width: 45vw; 
`
const Container=styled.div`
display : flex; 
flex-flow: row; 
justify-content: flex-start; 
align-items: center;`


const InfoContainer=styled.div`
display : flex; 
flex-flow: column wrap;
justify-content: flex-start; 
align-items: flex-start;
`

const Members=styled.div`
`
//const Image=styled.img``

const Location=styled.div``

function AgoraContainer(props){

    return(
        <Container>
            <ImageContainer>
                <img src={props.agora.picture[0]} height="100%" width="100%" />
            </ImageContainer>
             
         <InfoContainer>
            <Members>{props.agora.members.length}</Members>
            <Location>{props.agora.city}</Location>
            <Link to={`/agora/${props.agora._id}`}> See more </Link>
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


