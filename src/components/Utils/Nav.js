import React from "react";
import { Link } from "react-router-dom";

//components
import { AuthConsumer } from "../Auth/Guard";
import UserStatus from "./UserStatus";
import { NavContainer, Logo} from "../Utils/StyledComponents";

export default function Nav(props) {
  return (
    <AuthConsumer>
        {({ loginStatus }) => {
           if (loginStatus === true) {
              return(        
                <NavContainer>
                <Link to="/agoras" style={{ textDecoration: "none" }}><Logo>Agorae</Logo></Link>
                <UserStatus />
              </NavContainer> 
            )}
            else{
              return(
                <NavContainer>
                <Link to="/" style={{ textDecoration: "none" }}><Logo>Agorae</Logo></Link>
                <UserStatus />
                </NavContainer>
              )}
     }}
  </AuthConsumer>
  );
}
