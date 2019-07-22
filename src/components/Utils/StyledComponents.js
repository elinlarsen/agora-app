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
  defaultBorderWidth: "0.5px",
  defaultBorderRadius: "5px",
  cardHeight: 600,
  cardHeightWidthRatio: 2
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
  padding: ${props => props.theme.defaultPaddingSmall};
  border-style: solid;
  border-width: ${props => props.theme.defaultBorderWidth};
  border-radius: ${props => props.theme.defaultBorderRadius};
  border-color:${props => props.theme.color3}
    background-color: white;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizeMedium};
  color: ${props => props.theme.color1};
  margin: auto;
  width: 120px;
  text-align: center;
`;

// Define Specific Components

// -- Home Page Components -- //

export const VideoWrapper = styled.div`
  width: 100%;
  height: 30%;
`;

// --- Projects Page Components ---//

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px 30px;
  padding: 50px;
  text-align: center;
  justify-items: center;
`;

export const StyledEmptyProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.cardHeight + "px"};
  width: ${props =>
    props.theme.cardHeight / props.theme.cardHeightWidthRatio + "px"};
  font-size: 30px;
  color: white;
  font-weight: bold;
  background-color: white;
  box-shadow: 2px 2px 3px 0px #656565;
`;

// --- Projects Card Components ---//

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.theme.cardHeight + "px"};
  width: ${props =>
    props.theme.cardHeight / props.theme.cardHeightWidthRatio + "px"};
  border-width: 1px;
  background-color: white;
  box-shadow: 2px 2px 3px 0px #656565;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: ${props => props.theme.cardHeight / 1.5 + "px"};
`;

export const GenericWrapper = styled.div`
  padding: ${props => props.theme.defaultPaddingLarge};
`;

export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px 5px;
  width: 100%;
  height: ${props => props.theme.cardHeight / 6 + "px"};
  align-items: start;
`;

export const ProjectCardText = styled.p`
  display: flex;
  padding: ${props => props.theme.defaultPaddingLarge};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  height: ${props => props.theme.cardHeight / 20 + "px"};
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
`;
