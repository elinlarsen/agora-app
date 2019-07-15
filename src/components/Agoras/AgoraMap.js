import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

require('dotenv').config()

const mapStyles = {
    width: '100%',
    height: '70%',
  };


  
class AgoraMap extends Component  {

    state = {
        coords : [],
    }

    getAddresses =(agoras) => {
        return agoras.map(agora => agora.location.text)
    }

    getCoordinates = (addresses) =>{
        return addresses.map(address =>  Geocode.fromAddress(address))
    }

    componentDidMount = () => {
        const addresses=this.getAddresses(this.props.agoras)
        const coordinates = this.getCoordinates(addresses) 
        
        Promise.all(coordinates).then(locations => {
          const markers = locations.map((place, index) => {
            const lat = place.results[0].geometry.location.lat;
            const lng = place.results[0].geometry.location.lng;
            return (
              <Marker
                key={index}
                position={{lat: lat,lng:lng}}
                animation={2}
              />
            )
          })
          this.setState({
            coords: markers
          })
        })
      }
    


    render() {
        Geocode.setApiKey("AIzaSyCradM-20X3j_ovam22t6F5Z48OXc1Ic2w")
    return (
        <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 48.866667, lng: 2.333333}}
        >        
         {this.state.coords}        
        </Map>          
    )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCradM-20X3j_ovam22t6F5Z48OXc1Ic2w"
  })(AgoraMap);
