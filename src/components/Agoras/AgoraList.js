import React from 'react'

export default function AgoraList(props) {
    return (
        <div>
            <ul>   
            {props.agoras.map( (agora, index) => 
                    ( <li key={index}> {agora.name} with {agora.members.length} members situated in {agora.city} </li>))
            }
            </ul>
        </div>
    )
}


