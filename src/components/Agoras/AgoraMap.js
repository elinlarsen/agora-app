import React, {useState} from 'react'
import { Map, GoogleApiWrapper,  Marker, InfoWindow} from 'google-maps-react';

import {MapParent, ImageContainer, Container, InfoContainer, NbMembersAgora, Name} from "../Utils/StyledComponents"

//icon
import { FiUsers } from "react-icons/fi";

require('dotenv').config()



const mapStyles = { 
    width: '100%',
    height: '100%',
  };


const AgoraMap = React.memo(function AgoraMap (props){
    
    const [selectedMarker,setMarker] = useState({})
    const [selectedAgora,setAgora] = useState({})
    
function setMarkerAndPlace(props,marker,e, agora){
    setMarker(marker)
    setAgora(agora)
}



    return (
        <MapParent>
            <Map
                google={props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 48.866667, lng: 2.333333}}
                defaultOptions={{draggable: true, }}
            >           
                {props.agoras.map((agora, index) => {   
                    console.log("agora.members.length.toString() --", agora.members.length.toString())                        
                    return( <Marker onClick={(props, marker, e) => setMarkerAndPlace(props, marker, e,agora)}
                                    key={index+"-marker"}
                                
                                    position={{ lat: agora.geocode.lat, 
                                                lng: agora.geocode.lng }}
                                    label={agora.members.length.toString()}
                                    name = {agora.name}>
                                        </Marker> )                     
                })} 
                <InfoWindow
                    marker={selectedMarker}
                    visible={true}>              
                    {<InfoContainer>
                        <ImageContainer><img src={selectedAgora.picture} alt={selectedAgora.name} height="100%" width="100%" /></ImageContainer>
                        <Name>{selectedAgora.name}</Name>
                        <NbMembersAgora> {selectedAgora.members!==undefined ? selectedAgora.members.length : 0} <FiUsers /> </NbMembersAgora>
                        <a style={{textDecoration : 'none', color : '#0C214A', fontSize : "0.8rem" }} href={`/agora/${selectedAgora._id}`}> Discover </a>
                        
                    </InfoContainer>
                    }
                    </InfoWindow>           
            </Map>  
        </MapParent>        
    ) 
});

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS 
  })(AgoraMap);
