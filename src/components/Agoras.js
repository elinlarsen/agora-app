import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import SearchBar from "./Utils/SearchBar";
import AgoraMap from "./Agoras/AgoraMap";
import { AuthConsumer } from "./Auth/Guard";

//utils
import ajaxHandler from "../utils/ajaxHandler";
import filterBy from "../utils/utilFunctions";
import Geocode from "react-geocode";
import {
  MainBodyAgoras,
  WrapperAgoras,
  CTAContainer,
} from "./Utils/StyledComponents";



Geocode.enableDebug();

export default class Agoras extends Component {
  state = {
    search: "",
    agoras: [],
    agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
    displayForm: false,
    isOpen: false,
    infoIndex: null
  };

  onToggleOpen = isOpen => {
    this.setState({ isOpen: !isOpen }, () => console.log("new isopen", isOpen));
  };

  showInfo = index => {
    let copy = this.state;
    copy.infoIndex = index;
    copy.isOpen = !this.state.isOpen;
    this.setState(copy, () =>
      console.log("new state after show info fn : ", this.state)
    );
  };

  handleSearch = searchedText => {
    this.setState({ search: searchedText.toLowerCase() }, () => {});
  };

  getCoordinatesAndMarkers = agoras => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS)
    const codes = new Array(agoras.length);
    return new Promise((resolve, reject) => {
      agoras.forEach(async (agora, i) => {
        try {
          const geocode = await Geocode.fromAddress(agora.zipcode);
          codes[i] = geocode.results[0].geometry.location;
          const count = codes.reduce((acc, v) => {
            if (v) acc += 1;
            return acc;
          }, 0);
          if (count === agoras.length) resolve(codes);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  filterAgoras = () =>
    filterBy(this.state.search, this.state.agoras, "zipcode");

  componentDidMount() {
    this.state.agoraHandler.getAll( dbRes => {
      this.getCoordinatesAndMarkers(dbRes)
        .then(codes => {
            dbRes.forEach((agora, i) => {
              agora.geocode = codes[i];
            })
            this.setState({ agoras: dbRes }, () => console.log("the agoras", this.state.agoras));
          })
         .catch(err => console.error(err ,"------- error in getAll from agoras marker promise"));
        });     
  }

  handleDisplayForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  handleAddAgora = newAgora => {
    let copy = [...this.state.agoras];
    this.getCoordinatesAndMarkers([newAgora]);
    copy.push(newAgora);
    this.setState({
      agoras: copy,
      displayForm: !this.state.displayForm
    });
  };

  render() {
    console.log(" renda ----- ----- ----- ----- -----");
    return (
      <MainBodyAgoras>
        <CTAContainer>
          <AuthConsumer>
            {({ user }) => { return(      
              <Link
                style={{ textDecoration: "none", 
                          color:  "#85144b", //"#f95d64",
                          margin: "2vh 0", 
                          fontWeight: "bold" }}
                to={{ pathname: "/agoracreate", 
                state: { action: "create", currentUser : user } }}
              >
                  Create your agora! 
              </Link>) 
              }}
          </AuthConsumer>
          <SearchBar
            handleChange={this.handleSearch}
            placeholder="Search an agora by its zipcode."
          />

        </CTAContainer>

        <WrapperAgoras>
          <AgoraMap
            style={{ position: "relative" }}
            agoras={this.filterAgoras()}
            handleDelete={this.handleDelete}
            handleUpdateAgora={this.handleUpdateAgora}
          />
        </WrapperAgoras>
      </MainBodyAgoras>
    );
  }
}
