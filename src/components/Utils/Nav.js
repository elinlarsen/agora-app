import React, { Component } from 'react'
import UserStatus from "./UserStatus"
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Logo=styled.div``

export default class Nav extends Component {
    render(){
        return (
            <div>
                <Logo>
                    <div>
                     <Link to="/">Agora</Link>
                     </div>
                </Logo>
                <UserStatus logInStatus={this.props.logInStatus}
                            userInfo={this.props.userInfo}/>
            </div>
        )
    }
}
