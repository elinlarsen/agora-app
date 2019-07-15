import React from 'react'
import {Link} from "react-router-dom";

import styled from 'styled-components'

const UserStatusStyle=styled.div``
const UserOptions=styled.div``
const UserProfile=styled.div``

export default function UserStatus(props) {

    const getUserStatus = (isloggedIn) =>{
        let status; 
        isloggedIn 
        ? status= {state: "Log Out", link: '/logOut'} 
        : status = {state: "Log In", link: '/logIn'} 
        return ( 
            <UserStatusStyle>
                <div> 
                    <Link to={status.link}>{status.state}</Link>
                </div>
            </UserStatusStyle>)
    }

    const createUserProfile = (isloggedIn, user) =>{
        if(isloggedIn){
        return (
            <UserProfile>
                <div>
                    <span> Hello {user.username}</span>
                    <img src={user.picture} alt={user.username}/>
                </div>
            </UserProfile>
            )
        } 
    }

    return (
        <UserOptions>
           {getUserStatus(props.logInStatus)}
           {createUserProfile(props.logInStatus, props.userInfo)}      
        </UserOptions>
    )
}
