import React from "react";
import styled from "styled-components";

export default function Members(props) {
  const listItemsUsernames = props.membersList.map(item => (
    <React.Fragment>
      <PictureAndNameContainer>
        <MemberPicture>
          {" "}
          <img src={item.picture} width="100%" alt={item.name}/>
        </MemberPicture>
        <MemberName>
          {" "}
          <p> {item.username} </p>{" "}
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

const PictureAndNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 5px 5px 0px;
`;
const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26%;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  padding: 10px 10px;
`;

const MemberTitle = styled.p`
  padding: 10px;
  margin: 0px;
  background-color: #21222a;
  font-weight: bold;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

const MemberPicture = styled.div`
  width: 20%;
  border-radius: 5px;
`;
const MemberName = styled.p`
  padding: 10px 10px;
  margin-top: auto;
`;
