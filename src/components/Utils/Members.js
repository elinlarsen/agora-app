import React from "react";
import styled from "styled-components";
import {
  PictureAndNameContainer,
  MemberContainer,
  MemberTitle,
  MemberPictureContainer,
  MemberPicture,
  MemberName
} from "./StyledComponents";

export default function Members(props) {
  console.log(props.admin);
  console.log(props.membersList);

  const listItemsUsernames = props.membersList.map(item => (

      <PictureAndNameContainer>
        <MemberPicture src={item.picture} width="10%" alt={item.name} />{" "}
        <MemberName>
            {item.username} {item._id == props.admin ? "(admin)" : ""}
        </MemberName>
      </PictureAndNameContainer>

  ));

  return (
   <>
   {listItemsUsernames}
   </>

  );
}


