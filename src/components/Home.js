import React, { Component } from 'react'
import styled from 'styled-components'
import CallToAction from './Home/CallToAction'
import InfoCard from './Home/InfoCard'
import VideoCover from './Home/VideoCover'
//import ProjectCard from './Projects/ProjectCard'

const MainHome=styled.div`
width: 100%;
background-color : red;
`
export default class Home extends Component {
    /*
    stateless
    props.logInStatus
    props.userInfo
    */
    render() {
        return (
            <React.Fragment>
                <MainHome>
                <VideoCover/>
                <CallToAction
                    logInStatus={this.props.logInStatus}
                    userInfo={this.props.userInfo}/>
                <InfoCard/>
                <div>
                {/*this.props.projectList.map((projectItem, index) => 
                <ProjectCard key={index}
                                project={projectItem}/>)
                */}
                </div>  
                </MainHome>        
            </React.Fragment>
        )
    }
}


