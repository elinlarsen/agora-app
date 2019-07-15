import React, { Component } from 'react'

import SearchBar from './Utils/SearchBar'
import AgoraList from './Agoras/AgoraList'
import AgoraMap from "./Agoras/AgoraMap"
import AgoraWidget from "./Agoras/AgoraWidget"

export default class Agoras extends Component {

    /*
    state : 
        - filtered pour la search bar
        - agoraList (updated when edited and new agora added / deleted )
    qui va être passer dans la list et la map 

    */
    render() {
        return (
            <div>
                 <SearchBar/>
                 <AgoraList/>
                 <AgoraMap/>
                 <AgoraWidget/>
                coucou all agoras
            </div>
        )
    }
}
