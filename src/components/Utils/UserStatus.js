import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthConsumer } from "../Auth/Guard";
import { UserP, UserOptions, UserProfile, Img } from "./StyledComponents";

export default function UserStatus() {
  const getUserStatus = (isloggedIn, signout) => {
    if (isloggedIn === true) {
      return (
        <span onClick={() => signout(res => console.log(res))}> LOG OUT </span>
      );
    } else {
      return (
        <>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            {" "}
            <UserP> SIGN UP </UserP>{" "}
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            <UserP> LOG IN </UserP>{" "}
          </Link>
        </>
      );
    }
  };

  const createUserProfile = (isloggedIn, user) => {
    if (isloggedIn === true) {
      return (
        <UserOptions>
          <UserProfile> {user.first_name}</UserProfile>
          <Img src={user.picture} alt={user.first_name} />
        </UserOptions>
      );
    }
  };

  return (
    <>
      <AuthConsumer>
        {({ loginStatus, user, signout }) => {
          if (loginStatus === true) {
            return (
              <>
                <UserOptions>
                  <UserProfile> {user.first_name}</UserProfile>
                  <Img src={user.picture} alt={user.first_name} />
                  <UserP onClick={() => signout(res => console.log(res))}>
                    {" "}
                    LOG OUT{" "}
                  </UserP>
                </UserOptions>
              </>
            );
          } else {
            return (
              <UserOptions>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  <UserP> SIGN UP </UserP>{" "}
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <UserP> LOG IN </UserP>{" "}
                </Link>
              </UserOptions>
            );
          }
          //createUserProfile(loginStatus, user)
          //getUserStatus(loginStatus, signout)
        }}
      </AuthConsumer>
    </>
  );
}
