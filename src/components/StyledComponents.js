import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  margin: auto;
  border-style: solid;
  border-color: darkblue;
  border-width: 1px;
  border-radius: 6px;
  padding: 5px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 60%;
  margin-bottom: 20px;
`;

export const ProjectCardText = styled.p`
  padding: 5px;
  margin: 0px;
  font-size: 16px;
  text-align: center;
`;

export const HR = styled.hr`
  border-style: solid;
  width: 200px;
  border-color: lightgray;
`;

export const ActionButton = styled.a`
  background-color: navy;
  padding: 10px;
  text-decoration: none;
  color: white;
  margin: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
`;
