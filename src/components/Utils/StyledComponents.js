import styled from "styled-components";
import { Link } from "react-router-dom";

// Define Theme

export const mainTheme = {
  /* color1: "#4f3a65",
  color2: "#574f7d",
  color3: "#95adbe",
  color4: "#dff0ea",*/
  defaultPaddingSmall: "1vh",
  defaultPaddingMedium: "1.5vh",
  defaultPaddingLarge: "2vh",
  fontSizeLarge: "1.3rem",
  fontSizeMedium: "1rem",
  fontSizeSmall: "0.8rem",
  defaultBorderWidth: "0.5px",
  defaultBorderRadius: "20px",
  cardHeight: 40,
  cardHeightWidthRatio: 1.6,
  ProjectDescriptionRow: 30,
  ProjectDescriptionRowRatio : 1.5,
  color0: "#D32F2F" /* Main Primary color */,
  color1: "#85144b" /* "#f95d60" "f95d60","#F44336"*/,
  color2: "#21222a" /*dark for text*/,
  color3: "#FFFFFF", //white
  color4: "#FF9800",
  color5: "#212121",
  color6: "#757575",
  color7: "#BDBDBD",
  color8: "#85144b", //dark purple;
  color9: "#faf9f8", //light background
  titleFont: "Vibur"
};

export const MainBody = styled.div`
color: ${props => props.theme.color3}; /* default text color */
display : flex; 
align-items :center; 
justify-content: center; 
background-color: ${props => props.theme.color8};
/*margin-top: 12vh; because of the fixed nav bar*/
min-height: 88vh; /*100vh minus the height of the nav*/
height: min-content;

`;

// Define Utils Components

export const ActionButton = styled(Link)`
  display: block;
  background-color: ${props => props.theme.color1};
  padding: ${props => props.theme.defaultPaddingMedium};
  text-decoration: none;
  color: ${props => props.theme.color3};
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.theme.fontSizeMedium};
  width: 100%;
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
  margin: 2vh 0vw;
`;

export const ActionButtonProject = styled(ActionButton)`
border : 1px solid ${props => props.theme.color3}; 
font-size: 0.8rem; 
width : fit-content; 
`;

export const ActionButtonBack=styled(ActionButtonProject)`
background-color: ${props => props.theme.color2};
`

export const IconButtonProject = styled(Link)`
width: 3vw;
border: none;
color: ${props => props.theme.color3};
padding: 1vh;
margin: 1vh;
font-size: 1rem;
cursor: pointer;

`
export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  &:hover ${ActionButton} {
    background-color: ${props => props.theme.color3};
    color: ${props => props.theme.color1};
    border: solid 1px ${props => props.theme.color1};
  }
`;

export const StyledTag = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.color3};
  font-size: ${props => props.theme.fontSizeSmall};
  color: ${props => props.theme.color8};  
  width: 100%;
  text-align: center;
`;

// Define Specific Components

// --Nav Components -- //

export const NavContainer = styled.div`
  /*position: fixed; 
  top: 0;  */
  width: 100%; 
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => {
    return props.theme.color1;
  }};
  height: 12vh; /*fit-content;*/
  padding: 0 2vw;
  z-index: 1;
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: white;
  font-family: ${props => props.theme.titleFont};
  margin: 1vh 0;
`;

export const AgorasLink=styled.p`
font-size : 0.8rem; 
color : ${props => props.theme.color3}; 
`

// -- User Components -- //

export const UserP = styled.div`
  margin-left: 2vw;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7rem;
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
  font-size: 1rem;
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
  font-size: 1rem;
  text-align: center;
  ::placeholder {
    font-size: 1rem;
    color: ${props => props.theme.color8};
  }
`;

//F4EBBE

// -- Home Page Components -- //

export const VideoWrapper = styled.div`
  width: 100vw;
  max-height: 40vh;
  margin-top: 0vw;
  z-index: auto;
`;

export const B = styled.span`
  font-weight: bold;
`;

export const Banner = styled.div`
  display: flex;
  flex-flow : row nowrap; 
  background-color: ${props => props.theme.color3};
  justify-content: cent;
  align-items: center;
  height: inherit;
  flex-flow: column nowrap;
  z-index: 1; 

`;

export const BannerText = styled.p`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 1vh;
  
`;

export const BannerTextAndIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: start;
  width: 70%;
`;

export const IconsAndTextContainer = styled.div`
  padding-top: 20px;
  font-size: 20px;
  width: 70%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  color : ${props => props.theme.color8}
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

export const Main = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.color3};
  font-weight: bold;
  margin: 0 1vw 2vh 1vw;
  font-size : 1.4rem; 
`;
export const SubTitle = styled.p`
  text-align: center;
  color: ${props => props.theme.color3};
  margin: 0.5vh 0;
  padding : 0 2vw;
`;

export const Loc = styled(SubTitle)`
  font-style: italic;
`;

export const ButtonJoin = styled.button`
  width: fit-content;
  border: 1px solid ${props => props.theme.color1};
  border-radius: ${props => props.theme.defaultBorderRadius};
  padding: 2vh 5vw;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => props.theme.color1};
  margin: 0;
  cursor: pointer;
`;

export const IconButton = styled(ButtonJoin)`
  width: 3vw;
  border: none;
  background-color: ${props => props.theme.color1};
  color: ${props => props.theme.color3};
  padding: 1vh;
  margin: 1vh;
  font-size: 1rem;
  cursor: pointer;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.color1};
  opacity: 0.9;
  padding: 2vh 0;
  border: 1px solid ${props => props.theme.color1} 0.9;
`;

export const BigMembersWrapper=styled.div`
height : fit-content; 
background-color: ${props => props.theme.color8};
display : flex; 
flex-flow: column nowrap; 
justify-content: flex-start; 
align-items: center; 
padding-bottom : 1vh;
width : 100vw;
`
export const MembersWrapper = styled.div`
  height : fit-content; 
  background-color: ${props => props.theme.color8};
  display : flex; 
  flex-flow: row nowrap; 
  justify-content: center; 
  align-items: flex-start; 
  width : 100vw;
  `
export const MemberP=styled.p`
color : ${props => props.theme.color3};
font-size : 1.5rem; 
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
  min-height: 35px; 
  min-width: 35px; 
  height : 4vw; 
  width : 4vw;
  border-radius : 5vh; 
  margin: 0.5vh 0; 
  `
  export const MemberName=styled.p`
  margin : 0; 
  font-size : 1rem; 
  color : ${props => props.theme.color3};
  text-align : center; 
  `

// Agora Util Components //

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

export const CreateLink=styled(Link)` 
text-decoration: none;
color: ${props => props.theme.color3}; 
padding: 2vh 2vw;
font-weight: "bold";
font-size: 1.2rem;
`

export const CreateLinkWrap=styled.div`
margin-bottom: 4vh; 
&:hover ${CreateLink} {
  background-color: ${props => props.theme.color3};
  color: ${props => props.theme.color1};
  border: solid 1px ${props => props.theme.color1};
}
`


export const CTAContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center; 
  margin-top: 1vh;
`;

export const ContainerAgoras = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: inherit;
  padding-bottom: 7vh;
`;

// map in Agoras

export const MapParent=styled.div`
position: relative; /* Set the navbar to fixed position */
display : flex; 
width :100vw;
height: 68vh;
`


export  const ImageContainer=styled.div`
display: flex;
height: fit-content;
width: fit-content; 
`
export const Container=styled.div`
display : flex; 
flex-flow: row wrap; 
justify-content: flex-start; 
align-items: center;
padding : 1vh 0`


export const InfoContainer=styled.div`
display : flex; 
flex-flow: column nowrap;
justify-content: flex-start; 
align-items: flex-start;
padding-left: 1vh;
width: 35vw;
height: 35vh; 
`

export const NbMembersAgora=styled.p`
margin: 0.5vh 0; 
font-size: 0.8rem; 
color: #0C214A;
`

export const Name=styled.h3`
color : #0C214A;
font-size: 1rem;
margin: 0.5vh 0; 
`

// --- Projects Page Components ---//

export const ProjectsGrid = styled.div`
/*display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3vw 3vw;
  justify-items: center;
  justify-self: center; 
  align-self: center; 
  */
  display: flex; 
  flex-flow : row wrap;
  justify-content : center; 
  align-items : center; 
  padding: 3vh 3vw;
  text-align: center;
 
`;

export const StyledEmptyProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.cardHeight + "vh"};
  width: ${props =>
    props.theme.cardHeight / props.theme.cardHeightWidthRatio + "vh"};
  font-size: 1rem;
  color: ${props => props.theme.color3};
  font-weight: bold;
  background-color: ${props => props.theme.color3};
  text-decoration: none;
  margin: 2vh 2vw;
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
  margin: 2vh 2vw;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: ${props => props.theme.cardHeight / 1.6 + "vh"};
`;

export const GenericWrapper = styled.div`
  padding: ${props => props.theme.defaultPaddingSmall};
`;

export const TagGrid = styled.div`
  display : flex; 
  flex-flow : row wrap; 
  justify-content : center; 
  align-items: center; 
  /*
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5vw 0.5vw;*/
  width: 100%;
  height: ${props => props.theme.cardHeight / 8 + "vh"};
  align-items: start;
`;

export const ProjectCardText = styled.p`
  margin : 0
  margin-top: 1vh; 
  display: flex;
  padding: ${props => props.theme.defaultPaddingMedium};
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-align: center;
  height: ${props => props.theme.cardHeight / 15 + "vh"};
  width: 100%;
  color: ${props => props.theme.color2};
`;

export const ProjectCardTitle = styled(ProjectCardText)`
  font-size: 0.9rem;
  text-align: center;
  margin : 0;
  margin-bottom: 2vh 
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
  color: ${props => props.theme.color3};
`;

// --- Single project Page Components --- //

export const ProjectWrapper = styled.div`
  width: 100%;
  display : flex; 
  flex-flow: column wrap; 
  justify-content: flex-start; 
  align-items : flex-start; 
`;

export const ProjectTitle = styled.div` 
  width: 100vw; 
  display: flex;
  flex-flow : row wrap;
  justify-content: space-around;
  align-items: center; 
  background-color: ${props => props.theme.color2};
  padding : 3vh 3vw;
   
`;

export const ProjectTitleText = styled.p`
  margin: 0;  
  width: 80%;
  font-weight: bold;
  color: white;
  font-size: 1.3rem;
  text-align: center; 
  padding-left : 10vw; 

  @media (max-width: 650px) {
    padding-left : 0;
    font-size: 1.1rem;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 30%;
  max-height : 40vh; 
  @media (max-width: 650px) {
    width: 100%;
    padding: 4vh 10vw;
  } 
`;

export const ProjectDescription = styled.p`
  
  text-align: center; 
  align-items: center; 
  padding: 2vh 5vw; 
  height :fit-content; 
  width: 40%;
  margin :0; 
  @media (max-width: 650px) {
    width: 100%;
    padding: 4vh 10vw;
    margin-top: 5vh; 
  }
`;

export const ProjectDescriptionRow = styled.div`
  height: fit-content; 
  display: flex;
  flex-flow : row wrap; 
  justify-content: space-between;
  align-items: center; 
  font-size : 1.2rem; 
  background-color: ${props => props.theme.color2};


  @media (max-width: 650px) {
    font-size : 1rem; 
  }
`;

export const ProjectForumRow=styled(ProjectDescriptionRow)`
align-items : flex-start; 
padding: 1vh 3vw;
@media (max-width: 650px) {
  width: 100%;
  padding: 4vh 10vw;

`

// --- Status --- //



export const StatusBar = styled.div`   
  
    height: inherit; 
    padding: 1vh 5vw;  
    width: 20%;

    @media (max-width: 650px) {
      width: 100%;
    }
  `;

export const StatusWrap=styled.div`
    height: inherit;
    display: flex;
    flex-direction: column-reverse;
    justify-content :space-between; 
    align-items: center; 
`

  export  const CenteredWhiteText = styled.div`
    margin: auto;
    font-size: 1rem;
    text-align : center; 
  `;

  export const CenteredBoldText=styled(CenteredWhiteText)`
  font-weight: bold; 
  `

  export  const Block = styled.div`
    display: flex;
    background-color: inherit; 
    height: 20%; 
    font-weight : bold; 
    padding : 1vh 1vw; 
  `;

  export   const BlockOpacity=styled(Block)`
    opacity : 0.5; 
  `

// --- Forum Components ---//

export const ForumContainer = styled.div`
  width: 100vw;
  padding : 1vh 2vw; 
  background-color :${props => props.theme.color2};
`;

export const ForumTitle = styled.p`
  margin: 0;
  padding: 1vh 0; 
  background-color: ${props => props.theme.color2};
  color: ${props => props.theme.color3};
  font-weight: bold;
  font-size: 1rem;
  text-align : center; 

`;

// --- Members Components --- //

export const PictureAndNameContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center; 
  width: fit-content; 
  margin: 2vh 2vw; 
`;
export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : space-between; 
  height: inherit; 
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
  background-color: ${props => props.theme.color2};
  color: ${props => props.theme.color3};
  font-weight: bold;
  font-size: 20px;
`;

export const MemberPictureContainer = styled.div``; /*

export const MemberName = styled.p`
  padding: 0px 20px;
  margin-top: auto;
  font-weight: bold;
  font-size: 20px;
`; */

// ---Auth --- //

export const AuthWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

// --- Form utils  --- //

export const StyledInput = styled.input`
  width: 40vh;
  border: 1px solid ${props => props.theme.color8};
  /*border-radius: 20px;*/
  padding: 1.5vh;
  font-size: 1em;
  margin-bottom: 3vh;
  color: ${props => props.theme.color8};
  background-color: ${props => props.theme.color3};
`;

export const Label = styled.label`
  text-align: left;
  font-size: 1em;
  font-weight: bold;
  color: ${props => props.theme.color8};
  padding: 2vh 0;
`;

export const TitleForm = styled.div`
color : ${props => props.theme.color8};
font-size: 1.3em;
margin : 2vh 0vw; 
padding-bottom 2vh; 
`;

export const FormWrapper = styled.form`
  margin: 5vh 3vw;
  padding: 2vh 5vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  background-color: ${props => props.theme.color3};
  width: fit-content;
  border-width: 1px;
  box-shadow: 5px 5px 5px 0px ${props => props.theme.color8};
`;

// --- Message Components ---//

export const MessageRow = styled.div`
  display: flex;
  flex-flow : row nowrap;  
  justify-content: flex-start;
  align-items: center; 

`;

export const MessageUserInfo=styled.div`
display : flex; 
flex-flow : column nowrap; 
justify-content : center; 
align-items: center; 
width: fit-content;

`

export const MessagePicture = styled(MemberPicture)`  
`;

export const MessageUserName = styled.p`
  font-size: 0.8rem; 
  font-weight: bold;
  margin: 0;
  width: 100%;
  text-align : center; 
  margin-top: 1vh;
`;

export const MessageDate=styled.p`
margin: 0;
padding: 0 2vw; 
width: fit-content;
font-size : 0.8rem; 
text-align: center; 
`

export const MessageUserText = styled.p`
  font-size: 1rem;
  margin: 0;
  width: 80vw;
  padding: 2vh 5vw;
`;

export const MessageInputForm = styled.form`
  width: inherit;
  height: inherit;
  display: flex;
  flex-flow : row wrap; 
  align-items: center;
  font-size: 1rem;
  border-radius : 20px; 
  margin: 1vh 1vw;

`;

export const MessageUserInput = styled.input`
  width: 80%;
  height: 100%;
  font-size: 1.2rem;
  border : 1px solid ${props => props.theme.color3};
  border-shadow: none; 
  border-radius : 20px;
  padding: 1vh 1vw;

`;

export const MessageInputButton = styled.input`
  width: 10%;
  padding: 1vh 1vw;
  margin-left: 6vw;
  height: 100%;
  border : 1px solid ${props => props.theme.color3};
  border-radius : 10px; 
  color : ${props => props.theme.color2};
  font-size: 1rem; 
  background-color : ${props => props.theme.color3};

  @media (max-width: 650px) {
    width: 80%;
    margin : 5vh 0; 
  } 

  
`;
