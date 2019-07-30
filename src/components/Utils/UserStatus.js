import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../Auth/Guard";
import { UserP, UserOptions, UserProfile, MemberPicture } from "./StyledComponents";

export default function UserStatus() {
  
  return (
    <>
      <AuthConsumer>
        {({ loginStatus, user, signout }) => {
          if (loginStatus === true) {
            return (
              <>
                <UserOptions>
                  {//<UserProfile> {user.username}</UserProfile>
                  }
                  <MemberPicture src={user.picture} alt={user.username} />
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
        }}
      </AuthConsumer>
    </>
  );
}
