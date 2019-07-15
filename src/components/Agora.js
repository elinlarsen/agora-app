import React, { Component } from 'react'
import SearchBar from './Utils/SearchBar'

export default class Agora extends Component {
    /*
    props : agoraId
    state : 
        filtered projects

        if agoraId == null => form create Agora
        else description & ...
    */

    render() {
        return (
            <div>
                <SearchBar/>
                coucou
            </div>
        )
    }
}
