import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import styled from 'styled-components'
import { relative } from 'path';

require('dotenv').config()

const MapParent=styled.div`
display : flex; 
position : relative; 
width :100vw;
height: 40vh;
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
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 48.866667, lng: 2.333333}}
                defaultOptions={{
                    draggable: true, }}
            >        
            {props.markers}        
            </Map>  
        </MapParent>        
    ) 
});

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS 
  })(AgoraMap);
