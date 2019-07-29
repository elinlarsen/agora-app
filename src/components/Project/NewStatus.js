import React from "react";
import {StatusBar, CenteredBoldText, CenteredWhiteText, Block, BlockOpacity } from "./../Utils/StyledComponents";

export default function ProjectStatus(props) {
  
  function renderAll(props){
    if (props.status === "ideation") {
    return(
      <>
        <Block><CenteredBoldText> Ideation </CenteredBoldText></Block>
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
          <Block><CenteredBoldText> Planning </CenteredBoldText></Block>
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
            <Block><CenteredBoldText> Financed </CenteredBoldText></Block>
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
            <Block><CenteredBoldText> Ongoing </CenteredBoldText> </Block>
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
            <Block><CenteredBoldText> Done </CenteredBoldText></Block>
          </>
        );}
    }
  console.log("props ----", props)
  console.log("renderAll------", renderAll({status : "ideation"}))
  return <StatusBar>{renderAll(props)}</StatusBar>;
}

