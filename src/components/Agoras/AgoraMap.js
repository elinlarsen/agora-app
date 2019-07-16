import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

require('dotenv').config()

const mapStyles = {
    width: '100%',
    height: '70%',
  };

const AgoraMap = React.memo(function AgoraMap (props){

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS)
    return (
        <Map
            google={props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{ lat: 48.866667, lng: 2.333333}}
        >        
         {props.markers}        
        </Map>          
    ) 
});

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS 
  })(AgoraMap);
