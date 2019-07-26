//react librairies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Main,
  Title,
  SubTitle,
  ButtonJoin,
  IconButton,
  Info,
  MemberName,
  BigMembersWrapper,
  MembersWrapper,
  MemberInfo,
  MemberP,
  MemberPicture,
  MemberList,
  Loc
} from "./Utils/StyledComponents";

//icon
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

// axios handler
import ajaxHandler from "../utils/ajaxHandler.js";

//components
import SearchBar from "./Utils/SearchBar";
import filterBy from "../utils/utilFunctions";
import Projects from "./Projects";

export default class Agora extends Component {
  state = {
    search: "",
    agora: {
      projects: [],
      members: [{ picture: null }],
      picture: [""]
    },

    agoraHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/agoras"),
    userHandler: new ajaxHandler(process.env.REACT_APP_API_URL_, "/users"),
    displayForm: false
  };

  handleSearch = searchedText => {
    this.setState({ search: searchedText.toLowerCase() });
  };

  filterProjects = () =>
    filterBy(this.state.search, this.state.agora.projects, "name");

  componentDidMount = () => {
    let expandItem1 = "projects";
    let expandItem2 = "members";

    this.state.agoraHandler.getOneExpandTwo(
      this.props.match.params.id,
      agora => {
        this.setState({ agora: agora });
      },
      expandItem1,
      expandItem2
    );
  };

  handleDelete = agora_id => {
    this.state.agoraHandler.deleteOne(agora_id, dbRes => {
      this.props.history.push("/agoras");
      /*let deletedAgoraInDb = dbRes
            let copy = [...this.state.agoras]
            let index = copy.indexOf(deletedAgoraInDb);
            copy.splice(index, 1)
            this.setState({
                agoras: copy
            }, () => console.log("deleted in the state"))
            */
    });
  };

  isJoined = () => {
    let joined = false;
    let members = this.state.agora.members;
    let nbMembers = members.length;
    let user = this.props.currentUser;
    if (nbMembers !== 0 && members.filter(m => m._id === user).length !== 0)
      joined = true;
    return joined;
  };

  handleJoinAgora = event => {
    event.preventDefault();
    let copy = this.state.agora;
    console.log("this.state.agora.members   ", this.state.agora.members);
    console.log("this.isJoined ? ----", this.isJoined());
    if (!this.isJoined()) copy.members.push(this.props.currentUser);
    else {
      let index = copy.members.indexOf(this.props.currentUser);
      copy.members.splice(index, 1);
    }

    this.state.agoraHandler.updateOne(
      this.state.agora._id,
      { members: copy.members },
      updatedAgora => {
        this.setState({ agora: copy }, () =>
          console.log("member joined ? ", this.isJoined())
        );
      }
    );
  };

  render() {
    let nb=this.state.agora.members.length;
    let mem;
    nb>1 ? mem="members": mem="member"

    let textJoin; 
    this.isJoined() ? textJoin="Leave this agora." : textJoin="Join now !"
    console.log("this.state.agora----", this.state.agora);
    console.log("members ---", this.state.agora.members);
    return (
      <Main>
        <Info>
          <Title>
            {" "}
            Welcome to the Agora {this.state.agora.name} !
            <Link
              style={{ textDecoration: "none", color: "#0C214A" }}
              to={{
                pathname: "/agoracreate",
                state: {
                  agoraID: this.state.agora._id,
                  action: "update"
                }
              }}
              onClick={this.handleAddProject}
            >
              <IconButton type="button">
                <FiEdit />
              </IconButton>
            </Link>
            <IconButton
              type="button"
              onClick={() => this.handleDelete(this.state.agora._id)}
            >
              {" "}
              <FiTrash />{" "}
            </IconButton>
          </Title>
          <SubTitle> {this.state.agora.description} </SubTitle>
          <Loc>
            {" "}
            {this.state.agora.address}, {this.state.agora.city}{" "}
          </Loc>
        </Info>

        <SearchBar
          handleChange={this.handleSearch}
          placeholder="Find a project by its name."
        />

        {this.state.agora.projects !== undefined}
        <Projects
          projects={this.filterProjects()}
          agoraId={this.state.agora._id}
          agora={this.state.agora}
        />
        <BigMembersWrapper>
        
          <MemberP> {this.state.agora.members.length} {mem} </MemberP>
          
          <MemberList>
            {this.state.agora.members.map((m, index) => {
              return (
                <MemberInfo key={index}>
                  <MemberPicture src={m.picture} />
                  <MemberName> {m.username} </MemberName>
                </MemberInfo>
              );
            })}
          </MemberList>
          
          <ButtonJoin
            type="button"
            onClick={event => this.handleJoinAgora(event)}
          >
            {textJoin}
          </ButtonJoin>
        
      </BigMembersWrapper>
      </Main>
    );
  }
}
