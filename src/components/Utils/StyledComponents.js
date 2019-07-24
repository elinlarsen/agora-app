import styled from "styled-components";
import { Link } from "react-router-dom";

// Define Theme

export const mainTheme = {
  /* color1: "#4f3a65",
  color2: "#574f7d",
  color3: "#95adbe",
  color4: "#dff0ea",*/
  defaultPaddingSmall: "5px",
  defaultPaddingLarge: "10px",
  fontSizeLarge: "20px",
  fontSizeMedium: "14px",
  fontSizeSmall: "10px",
  defaultBorderWidth: "0.5px",
  defaultBorderRadius: "5px",
  cardHeight: 600,
  cardHeightWidthRatio: 2,
  color0: "#D32F2F" /* Main Primary color */,
  color1: "#F44336",
  color2: "#212121",
  color3: "#FFFFFF",
  color4: "#FF9800",
  color5: "#212121",
  color6: "#757575",
  color7: "#BDBDBD"
};

// Define Utils Components

export const ActionButton = styled(Link)`
  display: block;
  background-color: ${props => props.theme.color1};
  padding: ${props => props.theme.defaultPaddingLarge};
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.theme.fontSizeMedium};
  width: 32%;
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
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

export const StyledInput = styled.input`
  width: 30vw;
  border: 1px solid #0c214a;
  border-radius: 10px;
  padding: 1vh;
  font-size: 1.2rem;
  color: #0c214a;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 1.3rem;
  font-weigth: bold;
  color: #0c214a;
  padding: 2vh 0;
`;

// Define Specific Components

// --Nav Components -- //

export const NavContainer = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.color1};
  height: 10vh;
  padding: 0 1vw;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

// -- User Components -- //

export const UserP = styled.div`
  margin-left: 2vw;
  color: white;
  text-transform: uppercase;
`;
export const UserOptions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1vw;
`;
export const UserProfile = styled.div`
  padding: 1vw;
  color: white;
  font-size: 1.2rem;
`;
export const Img = styled.img`
  height: 4vh;
  width: 4vh;
  border-radius: 30px;
`;

//Footer Components

export const FooterContainer = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  bottom: 0; /* Position the footer at the bottom of the page */
  width: 100%; /* Full width */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.color1};
  height: 5vh;
  padding: 0 2vw;
`;

export const FooterP = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

// Search Bar Component

export const SearchStyle = styled.input`
width: 40vw; 
border : 1px solid  #faf9f8;
border-bottom : #0C214A
border-left : #0C214A
border-radius : 10px; 
padding: 1vh;
font-size : 1.3rem;
color : #0C214A; 
margin: 1vh;  
box-shadow: 3px 3px 3px #0C214A; 

`;

// -- Home Page Components -- //

export const VideoWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin-top: -300px;
`;

export const B = styled.span`
  font-weight: bold;
`;

export const Banner = styled.div`
  display: flex;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;

export const BannerText = styled.p`
  font-size: 20px;
  width: 75%;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const BannerTextAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  width: 70%;
`;

export const IconsAndTextContainer = styled.div`
  padding-top: 20px;
  font-size: 20px;
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const IconsContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 45px;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin: 20px 0px 20px 0px;
  color: ${props => props.theme.color2};
`;

export const P = styled.p`
  font-size: 20px;
  text-align: left;
  margin: 0px 0px 10px 0px;
  width: 70%;

  color: ${props => props.theme.color2};
`;

export const PforIcon = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0px;
  text-align: left;
 
  margin: auto;
  padding: 30px;
  color: color:  ${props => props.theme.color2};
  letter-spacing: 0.1px;
  
`;

export const HRIcon = styled.hr`
  margin-top: 20px;
  width: 70%;
  display: none;
`;

// Agora Util Components //

export const MainBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3vw;
  height: 85vh;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
`;

export const AgorasContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

// Agoras Page Components //

export const MainBodyAgoras = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1vw;
  height: inherit;
`;
export const WrapperAgoras = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: inherit;
`;

export const CTAContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weigth: bold;
  font-size: 2rem;
`;

export const ContainerAgoras = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: inherit;
  padding-bottom: 7vh;
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
  justify-content: space-around;
  align-items: center;
  width: ${props => props.width};
`;

// --- Single project Page Components --- //

export const ProjectWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

export const ProjectTitle = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #21222a;
`;

export const ProjectTitleText = styled.p`
  width: 60%;
  padding: 10px;
  font-weight: bold;
  color: white;
  font-size: 20px;
`;

export const ProjectImageContainer = styled.div`
  width: 26%;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  margin: 10px 0px;
`;

export const ProjectDescriptionAndStatusWrapper = styled.div`
  display: flex;
  width: 72%;
  justify-content: space-between;
`;
export const ProjectDescription = styled.p`
  display: flex;
  width: 80%;
  heigth: 10%;
  padding: 20px;
  border-style: solid;
  margin: 10px 0px;
  border-style: solid;
  border-color: darkgray;
  font-size: 20px;
  border-radius: 5px;
`;
export const ProjectDescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// --- Forum Components ---//

export const ForumContainer = styled.div`
  width: 72%;
  border-style: solid;
  padding: 10px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
`;

export const ForumTitle = styled.p`
  padding: 10px;
  margin: 0px;
  background-color: #21222a;
  font-weight: bold;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

// --- Members Components --- //

export const PictureAndNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 5px 5px 0px;
`;
export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26%;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  padding: 10px 10px;
`;

export const MemberTitle = styled.p`
  padding: 10px;
  margin: 0px;
  background-color: #21222a;
  font-weight: bold;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

export const MemberPicture = styled.div`
  width: 20%;
  border-radius: 5px;
`;

export const MemberName = styled.p`
  padding: 10px 10px;
  margin-top: auto;
`;

// --- Message Components ---//

export const MessageRow = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-start;
`;

export const MessagePicture = styled.div`
  width: 3%;
`;

export const MessageUserName = styled.p`
  font-weight: bold;
  margin: 10px;
  padding: 0px 5px;
  width: 20%;
`;

export const MessageUserText = styled.p`
  margin: 10px;
  padding: 0px 5px;
  width: 30%;
`;

export const MessageUserInput = styled.input`
  margin: 10px;
  padding: 5px 5px;
  width: 100%;
`;

export const MessageInputForm = styled.form`
  width: 30%;
  display: flex;
`;

export const MessageInputButton = styled.input`
  padding: 5px;
  margin: 10px;
`;
