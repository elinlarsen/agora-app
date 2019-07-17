import React from 'react'
import {Link} from "react-router-dom";

import styled from 'styled-components'

const P=styled.div`
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
const Img =styled.div``

export default function UserStatus(props) {

    const getUserStatus = (isloggedIn) =>{
        let status; 
        isloggedIn 
        ? status= {state: "Log Out", link: '/logOut'} 
        : status = {state: "Log In", link: '/logIn'} 
        return ( 
            <>
                <Link to={status.link} style={{ textDecoration: 'none' }}> <P> {status.state} </P> </Link>
            </>)
    }

    const createUserProfile = (isloggedIn, user) =>{
        if(isloggedIn){
        return (
            <UserOptions>
                <UserProfile> Hello {user.username}</UserProfile>
                <Img src={user.picture} alt={user.username}/>
            </UserOptions>
            )
        } 
    }

    return (
        <UserOptions>
          
           {createUserProfile(props.logInStatus, props.userInfo)}  
           {getUserStatus(props.logInStatus)}    
        </UserOptions>
    )
}
