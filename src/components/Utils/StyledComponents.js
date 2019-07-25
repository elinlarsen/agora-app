import styled from "styled-components";
import { Link } from "react-router-dom";

// Define Theme

export const mainTheme = {
  /* color1: "#4f3a65",
  color2: "#574f7d",
  color3: "#95adbe",
  color4: "#dff0ea",*/
  defaultPaddingSmall: "1px",
  defaultPaddingLarge: "2vh",
  fontSizeLarge: "1.3rem",
  fontSizeMedium: "1rem",
  fontSizeSmall: "0.8rem",
  defaultBorderWidth: "0.5px",
  defaultBorderRadius: "20px",
  cardHeight: 50,
  cardHeightWidthRatio: 1.8,
  color0: "#D32F2F" /* Main Primary color */,
  color1:  "#85144b"/* "#f95d60" "f95d60","#F44336"*/,
  color2: "#212121", /*dark for text*/
  color3: "#FFFFFF", //white
  color4: "#FF9800",
  color5: "#212121",
  color6: "#757575",
  color7: "#BDBDBD",
  color8: "#85144b", //dark purple; 
  color9: "#faf9f8",  //light background 
  titleFont: "Vibur"
};

export const MainBody = styled.div`
color: ${props => props.theme.color8}
display : flex; 
justify-content: center; 
background-color: ${props => props.theme.color9};
margin-top: 12vh; /*because of the fixed nav bar*/
min-height: 100vh;
max-height: min-content;

`

// Define Utils Components

export const ActionButton = styled(Link)`
  display: block;
  background-color: ${props => props.theme.color1};
  padding: ${props => props.theme.defaultPaddingLarge};
  text-decoration: none;
  color: ${props => props.theme.color3};
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.theme.fontSizeMedium};
  width: 80%;
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
  margin: 2vh 0; 
`;

export const WrapperButton = styled.div`
  width : 100%; 
  display : flex; 
  flex-flow: row wrap; 
  justify-content : center; 
  align-items : center; 
  &:hover ${ActionButton} {
    background-color : ${props => props.theme.color3};
    color : ${props => props.theme.color1};
    border: solid 1px ${props => props.theme.color1};
  }
`

export const StyledTag = styled.div`
  padding: ${props => props.theme.defaultPaddingSmall};
  border-style: solid;
  border-width: ${props => props.theme.defaultBorderWidth};
  border-radius: ${props => props.theme.defaultBorderRadius};
  border-color:${props => props.theme.color3}
    background-color: white;
  /*font-weight: bold;*/
  font-size: ${props => props.theme.fontSizeSmall};
  color: ${props => props.theme.color8};
  margin: auto;
  width: 100%;
  text-align: center;
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
  background-color: ${props => {
    return props.theme.color1;
  }};
  height: 12vh; /*fit-content;*/
  padding: 0 1vw;
  opacity: 0.9;
  z-index: 1;
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: white;
  font-family: ${props => props.theme.titleFont};
  margin :1vh 0; 
`;

// -- User Components -- //

export const UserP = styled.div`
  margin-left: 2vw;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
`;
export const UserOptions = styled.div`
  height: inherit; 
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
  width: 6vh;
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
  width: 100vw;
  color: ${props => props.theme.color8};
  border: none; 
  padding: 3vh;
  font-size: 1.3rem; 
  box-shadow: 3px 3px 3px #faf9f8;
  text-align: center;

  ::placeholder{
    color : ${props => props.theme.color8};
  }
`;

//F4EBBE

// -- Home Page Components -- //

export const VideoWrapper = styled.div`
width: 100vw;
height: 57vh;
margin-top: -10vw; 
z-index: auto;
`;

export const B = styled.span`
  font-weight: bold;
`;

export const Banner = styled.div`
  display: flex;
  background-color:  ${props => props.theme.color3};
  justify-content: cent;
  align-items: center;
  height: inherit;
  flex-flow: column nowrap;
  padding-top : 8vh ; 
  padding-bottom: 5vh
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

//Agora page //

export const Main= styled.div`
display : flex; 
flex-flow : column wrap; 
justify-content : center; 
align-items:center; 
height: inherit; 
`

export const Title= styled.h1`
text-align: center; 
color : ${props => props.theme.color3};
font-weight: bold; 
`
export const SubTitle= styled.p`
text-align: center; 
color :${props => props.theme.color3};
margin: 0.5vh 0; 
`

export const Loc= styled(SubTitle)`
font-style: italic;
`

export const ButtonJoin=styled.button`
    width: 20vw; 
    border : 1px solid ${props => props.theme.color1};
    border-radius : ${props => props.theme.defaultBorderRadius}; 
    padding: 2vh;
    font-size : 1.5rem;
    font-weight: bold; 
    color : ${props => props.theme.color1};
    margin: 1vh;
    cursor : pointer; 
`

export const IconButton=styled(ButtonJoin)`
width: 3vw;
border: none;
background-color : ${props => props.theme.color1};
color : ${props => props.theme.color3};
padding: 1vh;
margin: 1vh;
font-size : 1rem;
cursor : pointer; 
`

export const Info=styled.div`
width : 100%; 
display : flex; 
flex-flow: column wrap;
justify-content : space-around;
align-items : center; 
background-color : ${props => props.theme.color1};
opacity: 0.9; 
padding : 2vh 0; 
border : 1px solid ${props => props.theme.color1} 0.9

`
export const MembersWrapper=styled.div`
  height : fit-content; 
  background-color: ${props => props.theme.color8};
  display : flex; 
  flex-flow: column nowrap; 
  justify-content: flex-start; 
  align-items: center; 
  padding-bottom : 5vh
  width : 100vw;
  `
export const MemberP=styled.p`
color : ${props => props.theme.color3};
font-size : 2.5rem; 
margin: 0; 
margin : 2vh 0;

`
  export const MemberList=styled.div`
  width : 100vw;
  display : flex; 
 flex-flow : row nowrap; 
 justify-content: center; 
 align-items : center; 
 margin: 1vh 0; 
  `

  export const MemberInfo=styled.div`
  height : inherit; 
  width : inherit; 
  display : flex; 
  flex-flow : column nowrap; 
  justify-content: center; 
  align-items : center; 
  `

  export const MemberPicture=styled.img`
  height : 5vw; 
  width : 5vw;
  border-radius : 5vh; 
  `
  export const MemberName=styled.p`
  font-size : 1.2rem; 
  color : ${props => props.theme.color3};
  `

// Agora Util Components //

/*export const MainBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
`;*/
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
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 4vh;
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
  height: ${props => props.theme.cardHeight + "vh"};
  width: ${props =>
    props.theme.cardHeight / props.theme.cardHeightWidthRatio + "vh"};
  font-size: 30px;
  color: ${props => props.theme.color3};
  font-weight: bold;
  background-color: ${props => props.theme.color3};
  box-shadow: 3px 3px 3px 0px #656565;
  text-decoration : none; 
`;

// --- Projects Card Components ---//

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.theme.cardHeight + "vh"};
  width: ${props =>
    props.theme.cardHeight / props.theme.cardHeightWidthRatio + "vh"};
  border-width: 1px;
  background-color: ${props => props.theme.color3};
  box-shadow: 2px 2px 3px 0px #656565;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: ${props => props.theme.cardHeight / 1 + "vh"};
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
  height: ${props => props.theme.cardHeight / 6 + "vh"};
  align-items: start;
`;

export const ProjectCardText = styled.p`
  display: flex;
  padding: ${props => props.theme.defaultPaddingLarge};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  height: ${props => props.theme.cardHeight / 20 + "vh"};
  width: 100%;
  align-self: center;
  color: ${props => props.theme.color2};
`;

export const ProjectCardTitle=styled(ProjectCardText)`
font-weight : bold; 
font-size : 1rem;
text-align : left;
`

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
  color : ${props => props.theme.color3};
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
  margin: 10px 0px;
  font-size: 20px;
  border-style: solid;
  border-color: ${props => props.theme.color2};
  border-width: 0.5px;
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
  padding: 0px 10px;
  border-style: solid;
  border-color: ${props => props.theme.color2};
  border-width: 0.5px;
`;

export const ForumTitle = styled.p`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #21222a;
  color: white;

  font-weight: bold;
  font-size: 20px;
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

  padding: 0px 10px;
  border-style: solid;
  border-color: ${props => props.theme.color2};
  border-width: 0.5px;
`;

export const MemberTitle = styled.p`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #21222a;
  color: white;

  font-weight: bold;
  font-size: 20px;
`;

/*export const MemberPicture = styled.div`
  width: 20%;
`;

export const MemberName = styled.p`
  padding: 0px 20px;
  margin-top: auto;
  font-weight: bold;
  font-size: 20px;
`;*/

// ---Auth --- //

export const AuthWrapper= styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: inherit;
`

// --- Form utils  --- //


export const StyledInput = styled.input`
  width: 40vh;
  border: 1px solid ${props => props.theme.color8};
  border-radius: 20px;
  padding: 1.5vh;
  font-size: 1.2rem;
  margin-bottom: 3vh; 
  color: ${props => props.theme.color8};
  background-color : ${props => props.theme.color3};
`;

export const Label = styled.label`
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${props => props.theme.color8};
  padding: 2vh 0;
`;


export const TitleForm=styled.div`
color : ${props => props.theme.color8};
font-size: 2rem;
margin : 2vh 2vw; 
padding-bottom 2vh; 
`

export const FormWrapper=styled.div`
  margin: 5vh 5vw;
  padding : 2vh 2vw; 
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: inherit;
  background-color : ${props => props.theme.color3};     
  width: fit-content; 
  border-width: 1px;
  box-shadow: 2px 2px 3px 0px #656565;
`

// --- Message Components ---//

export const MessageRow = styled.div`
  display: flex;
  padding-top: 5px;
  justify-content: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  width: 100%;
`;

export const MessagePicture = styled.div`
  width: 3%;
`;

export const MessageUserName = styled.p`
  font-weight: bold;
  margin-top: auto;
  padding: 0px 20px;
  width: 20%;
`;

export const MessageUserText = styled.p`
  margin-top: auto;
  padding: 0px 20px;
  width: 50%;
`;

export const MessageInputForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const MessageUserInput = styled.input`
  padding: 5px;
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

export const MessageInputButton = styled.input`
  padding: 5px;
  margin: 10px;
  height: 100%;
`;
