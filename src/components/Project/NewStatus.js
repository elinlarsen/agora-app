import React from "react";
import styled from "styled-components";

export default function ProjectStatus(props) {

  const StatusBar = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 20%;
  `;

  const CenteredWhiteText = styled.div`
    margin: auto;
    color: white;
    font-size: 1.3rem;
  `;

  const Block = styled.div`
    display: flex;
    background-color: #85144b; 
    width:99.9%;
    height: 20%; 
  `;

  const BlockOpacity=styled(Block)`
    opacity : 0.5; 
  `
  
  function renderAll(props){
    if (props.status === "ideation") {
    return(
      <>
        <Block><CenteredWhiteText> Ideation </CenteredWhiteText></Block>
        <BlockOpacity><CenteredWhiteText> Planning </CenteredWhiteText></BlockOpacity>
        <BlockOpacity><CenteredWhiteText> Financed </CenteredWhiteText></BlockOpacity>
        <BlockOpacity><CenteredWhiteText> Ongoing </CenteredWhiteText> </BlockOpacity>
        <BlockOpacity><CenteredWhiteText> Done </CenteredWhiteText></BlockOpacity>
      </>
    );}
    else if(props.status === "planning") {
      return(
        <>
          <BlockOpacity><CenteredWhiteText> Ideation </CenteredWhiteText></BlockOpacity>
          <Block><CenteredWhiteText> Planning </CenteredWhiteText></Block>
          <BlockOpacity><CenteredWhiteText> Financed </CenteredWhiteText></BlockOpacity>
          <BlockOpacity><CenteredWhiteText> Ongoing </CenteredWhiteText> </BlockOpacity>
          <BlockOpacity><CenteredWhiteText> Done </CenteredWhiteText></BlockOpacity>
        </>
      );}
      else if(props.status === "financed") {
        return(
          <>
            <BlockOpacity><CenteredWhiteText> Ideation </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Planning </CenteredWhiteText></BlockOpacity>
            <Block><CenteredWhiteText> Financed </CenteredWhiteText></Block>
            <BlockOpacity><CenteredWhiteText> Ongoing </CenteredWhiteText> </BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Done </CenteredWhiteText></BlockOpacity>
          </>
        );}
      else if (props.status === "ongoing") {
        return(
          <>
            <BlockOpacity><CenteredWhiteText> Ideation </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Planning </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Financed </CenteredWhiteText></BlockOpacity>
            <Block><CenteredWhiteText> Ongoing </CenteredWhiteText> </Block>
            <BlockOpacity><CenteredWhiteText> Done </CenteredWhiteText></BlockOpacity>
          </>
        );}
      else if (props.status === "done") {
        return(
         <>
            <BlockOpacity><CenteredWhiteText> Ideation </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Planning </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Financed </CenteredWhiteText></BlockOpacity>
            <BlockOpacity><CenteredWhiteText> Ongoing </CenteredWhiteText> </BlockOpacity>
            <Block><CenteredWhiteText> Done </CenteredWhiteText></Block>
          </>
        );}
    }
  console.log("props ----", props)
  console.log("renderAll------", renderAll({status : "ideation"}))
  return <StatusBar>{renderAll(props)}</StatusBar>;
}

