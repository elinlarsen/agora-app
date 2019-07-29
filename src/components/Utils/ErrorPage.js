import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const ErrorWrap=styled.div`
display : flex; 
flex-flow : column wrap; 
justify-content : center; 
align-items: center; 

`

export default function ErrorPage() {
    console.log("error page")
    return (
        <ErrorWrap>
            <h1>404</h1>
            <h3> You seem to be lost.</h3>
            <p> Go back to the <Link to="/" style={{fontWeight: "bold", textDecoration: "none", color : "white"}}> main page</Link>. </p>
        </ErrorWrap>
    )
}
