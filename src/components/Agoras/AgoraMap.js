import React, {useState} from 'react'
import { Map, GoogleApiWrapper,  Marker, InfoWindow} from 'google-maps-react';

import Geocode from "react-geocode";
import styled from 'styled-components'

require('dotenv').config()

const MapParent=styled.div`
position: relative; /* Set the navbar to fixed position */
display : flex; 
width :100vw;
height: 65vh;
`

const ImageContainer=styled.div`
display: flex;
height: 17vh;
width: 25vw; 
`
const Container=styled.div`
display : flex; 
flex-flow: row; 
justify-content: flex-start; 
align-items: center;
padding : 1vh 0`


const InfoContainer=styled.div`
display : flex; 
flex-flow: column wrap;
justify-content: flex-start; 
align-items: flex-start;
padding-left: 1vh;
width: 30vh;
`

const Members=styled.div`
`
const Location=styled.div``

const Name=styled.h3`
color : #0C214A;
font-size: 1.2rem;
`

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
                    return( <Marker onClick={(props, marker, e) => setMarkerAndPlace(props, marker, e,agora)}
                                            key={index+"-marker"}
                                            position={{ lat: agora.geocode.lat, 
                                                        lng: agora.geocode.lng }}
                                            name = {agora.name}>
                                        </Marker> )                     
                })} 
                <InfoWindow
                    marker={selectedMarker}
                    visible={true}>              
                    {<InfoContainer>
                        <ImageContainer><img src={selectedAgora.picture} alt={selectedAgora.name} height="100%" width="100%" /></ImageContainer>
                        <Name>{selectedAgora.name}</Name>
                        <a style={{textDecoration : 'none', color : '#0C214A' }} href={`/agora/${selectedAgora._id}`}> Discover </a>
                        
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
