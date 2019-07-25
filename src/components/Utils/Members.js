import React from "react";
import styled from "styled-components";
import {
  PictureAndNameContainer,
  MemberContainer,
  MemberTitle,
  MemberPicture,
  MemberName
} from "./StyledComponents";

export default function Members(props) {
  console.log(props.admin);
  console.log(props.membersList);

  const listItemsUsernames = props.membersList.map(item => (
    <React.Fragment>
      <PictureAndNameContainer>
          <MemberPicture src={item.picture} width="100%" alt={item.name} />
        <MemberName>
          {" "}
          <p>
            {" "}
            {item.username} {item._id == props.admin ? "(admin)" : ""}
          </p>{" "}
        </MemberName>
      </PictureAndNameContainer>
    </React.Fragment>
  ));

  return (
    <MemberContainer>
      {" "}
      <MemberTitle> Current project members</MemberTitle> <MemberPicture />{" "}
      {listItemsUsernames}
    </MemberContainer>
  );
}
