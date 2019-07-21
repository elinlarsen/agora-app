import React from 'react'
import {Link} from "react-router-dom";

import styled from 'styled-components'

import { AuthConsumer } from "../Auth/Guard";

const P=styled.div`
margin-left : 1vw; 
color : white;  
text-transform: uppercase; 
`
const UserOptions=styled.div`
display : flex; 
flex-flow: row nowrap;
justify-content: flex-end; 
align-items: center;
padding : 0 1vw; 
`
const UserProfile=styled.div`
padding : 1vw; 
color: white; 
`
const Img =styled.img`
height: 5vh; 
border-radius : 30px
`


export default function UserStatus() {

    const getUserStatus = (isloggedIn, signout) =>{
        if (isloggedIn===true) {return (<span onClick={() => signout(res => console.log(res))}> LOG OUT </span>)}
        else  {return (<Link to="/login" style={{ textDecoration: 'none' }}> <P> LOG IN </P> </Link>)}
    }

    const createUserProfile = (isloggedIn, user) =>{     
        if(isloggedIn===true){
            return (
                <UserOptions>
                    <UserProfile> {user.first_name}</UserProfile>
                    <Img src={user.picture} alt={user.first_name}/>
                </UserOptions>
            )} 
    }

    return (
        <>
            <AuthConsumer>       
                {({loginStatus, user, signout}) =>  {
                    if (loginStatus===true) {
                    return ( 
                    <>       
                        <UserOptions>
                            <UserProfile> {user.first_name}</UserProfile>
                            <Img src={user.picture} alt={user.first_name}/>
                            <P onClick={() => signout(res => console.log(res))}> LOG OUT </P>
                        </UserOptions> 
                        
                    </>
                    )}
                    else {return (
                        <Link to="/login" style={{ textDecoration: 'none' }}> <P> LOG IN </P> </Link>
                    )}
                    //createUserProfile(loginStatus, user)
                    //getUserStatus(loginStatus, signout)
                    }}             
            </AuthConsumer>
                
        </>
    )
}

