import React, { Component } from "react";
import { Marker } from "google-maps-react";
import Geocode from "react-geocode";
//Components
import SearchBar from "./Utils/SearchBar";
import AgoraList from "./Agoras/AgoraList";
import AgoraMap from "./Agoras/AgoraMap";
import AgoraForm from "./Agora/AgoraForm";
import CreateButton from "./Utils/CreateButton";
import { MainBody, Wrapper, AgorasContainer } from "../Utils/StyledComponents";
//ajax
import ajaxHandler from "../utils/ajaxHandler";


export default class Agoras extends Component {

  state = {
    search: "",
    agoras: [],
    agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL, "/agoras"),
    markers: [],
    displayForm: false
  };

  handleSearch = searchedText => {
    this.setState({ search: searchedText.toLowerCase() });
    this.filterMarkers();
  };

  getAddresses = agoras => {
    return agoras.map(agora => agora.address);
  };

  getCoordinates = addresses => {
    let coords = addresses.map(address => Geocode.fromAddress(address));
    return coords;
  };

  getMarkers = coordinates => {
    Promise.all(coordinates).then(locations => {
      const markers = locations.map((place, index) => {
        const lat = place.results[0].geometry.location.lat;
        const lng = place.results[0].geometry.location.lng;
        return (
          <Marker key={index} position={{ lat: lat, lng: lng }} animation={3} />
        );
      });
      this.setState({ markers: markers });
    });
  };

  filterAgoras = () => {
    let filteredAgoras;
    this.state.search !== ""
      ? (filteredAgoras = this.state.agoras.filter(item => {
          let nameToCompare = item.name
            .toLowerCase()
            .split(" ")
            .join("");
          console.log("item ---", nameToCompare);
          let searched = this.state.search.toLowerCase();
          return nameToCompare.includes(searched);
          console.log(
            " nameToCompare.includes(searched)",
            nameToCompare.includes(searched)
          );
        }))
      : (filteredAgoras = this.state.agoras);
    console.log("filteredAgoras---", filteredAgoras);
    return filteredAgoras;
  };

  filterMarkers = () => {
    let filteredAgoras = this.filterAgoras();
    let filteredAddresses = this.getAddresses(filteredAgoras);
    let addresses;
    let hardAddresses = ["Paris"];
    filteredAddresses
      ? (addresses = filteredAddresses)
      : (addresses = hardAddresses);
    let coordinates = this.getCoordinates(addresses);
    this.getMarkers(coordinates);
  };

  componentDidMount() {
    this.state.agoraHandler.getAll(dbRes => {
      this.setState({ agoras: dbRes });
      this.filterMarkers();
    });
  }

  handleDisplayForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  handleAddAgora = theAgora => {
    let copy = [...this.state.agoras];
    copy.push(theAgora);
    console.log("new Agora", theAgora);
    console.log("all agoras --", copy);
    this.setState({
      agoras: copy,
      displayForm: !this.state.displayForm
    });
  };

  render() {
    console.log(" ----- ----- ----- ----- -----");
    console.log("i am rendered again", this.state);
    return (
      <MainBody>
        {this.state.displayForm && (
          <AgoraForm addNewAgora={this.handleAddAgora} />
        )}

        <CreateButton clbk={this.handleDisplayForm} text="Create your Agora!" />

        <Wrapper>
          <AgorasContainer>
            <SearchBar handleChange={this.handleSearch} />
            <AgoraList agoras={this.filterAgoras()} />
          </AgorasContainer>

          <AgoraMap
            style={{ position: "relative" }}
            markers={this.state.markers}
          />
        </Wrapper>
      </MainBody>
    );
  }
}
