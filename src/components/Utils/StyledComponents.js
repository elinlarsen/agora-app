import styled from "styled-components";
// Define Theme

export const mainTheme = {
  color1: "#4f3a65",
  color2: "#574f7d",
  color3: "#95adbe",
  color4: "#dff0ea",
  defaultPaddingSmall: "5px",
  defaultPaddingLarge: "10px",
  fontSizeLarge: "20px",
  fontSizeMedium: "14px",
  fontSizeSmall: "10px",
  defaultBorderRadius: "5px"
};

// Define Utils Components

export const ActionButton = styled.a`
  display: block;
  background-color: ${props => props.theme.color2};
  padding: ${props => props.theme.defaultPaddingLarge};
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.theme.fontSizeMedium};
  width: 32%;
  border-radius: ${props => props.theme.defaultBorderRadius};
`;

export const StyledTag = styled.div`
  padding: ${props => props.theme.defaultPaddingLarge};
  border-radius: ${props => props.theme.defaultBorderRadius};
  background-color: ${props => props.theme.color1};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizeMedium};
  color: white;
  margin: auto;
  width: 120px;
  text-align: center;
`;

// Define Specific Components

// --- Projects Page Components ---//

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px 0px;
  padding: 50px;
`;

export const StyledEmptyProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 670px;
  width: 300px;
  border-radius: ${props => props.theme.defaultBorderRadius};
  font-size: 30px;
  color: white;
  font-weight: bold;
  background-color: white;
`;

// --- Projects Card Components ---//

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 670px;
  border-width: 1px;
  border-radius: 6px;
  background-color: white;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 300px;
  margin-bottom: 20px;
`;

export const GenericWrapper = styled.div`
  padding: ${props => props.theme.defaultPaddingLarge};
`;

export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px 5px;
  width: 100%;
  height: 80px;
`;

export const ProjectCardText = styled.p`
  display: flex;
  padding: ${props => props.theme.defaultPaddingLarge};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  height: 15px;
  width: 90%;
  align-self: center;
`;

export const HR = styled.hr`
  border-style: solid;
  width: 90%;
  border-color: lightgray;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  height: 40px;
`;
