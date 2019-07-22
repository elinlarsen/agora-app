import React from 'react'
import { Map, GoogleApiWrapper,  Marker, InfoWindow} from 'google-maps-react';

import Geocode from "react-geocode";
import styled from 'styled-components'


require('dotenv').config()

const MapParent=styled.div`
position: relative; /* Set the navbar to fixed position */
padding-top: 10vh; 
display : flex; 
width :40vw;
height: 55vh;
`

const mapStyles = { 
    width: '100%',
    height: '100%',
  };

const AgoraMap = React.memo(function AgoraMap (props){
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS)

    return (
        <MapParent>
            <Map
                google={props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{ lat: 48.866667, lng: 2.333333}}
                defaultOptions={{draggable: true, }}
            > 
           
                {props.agoras.map((agora, index) => {
                    let indexMarker=`${index}-marker`
                    let indexInfo=`${index}-info`
                    console.log("coucou !!", agora)
                    console.log("isOpen", props.isOpen)
                    return( 
                        <Marker onClick={() => props.showInfo(indexMarker)}
                                key={indexMarker}
                                position={{ lat: agora.geocode.lat, lng: agora.geocode.lng }}
                                name = {agora.name}>

                                {(props.isOpen ) &&
                                    <InfoWindow key={indexInfo}
                                                onCloseClick={props.onToggleOpen}>
                                    <span>Hello Agora {agora.name}</span>
                                    </InfoWindow>}
                        </Marker>)               
                })}            
            </Map>  
        </MapParent>        
    ) 
});

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS 
  })(AgoraMap);
