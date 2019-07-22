import React from 'react'
import { Map, GoogleApiWrapper} from 'google-maps-react';
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
    console.log(props.agoras)
    return (
        <MapParent>
            <Map
                google={props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 48.866667, lng: 2.333333}}
                defaultOptions={{
                    draggable: true, }}
            >        
            {//props.markers
            } 
            {props.agoras.map(agora => agora.marker)
            }       
            </Map>  
        </MapParent>        
    ) 
});

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS 
  })(AgoraMap);
