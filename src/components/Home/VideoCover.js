import React from "react";
import { VideoWrapper } from "../Utils/StyledComponents";

export default function VideoCover() {
  return (
    <VideoWrapper>
      <video autoPlay loop>
        <source src="../../videos/coverupdated.mp4" type="video/mp4" />
      </video>
    </VideoWrapper>
  );
}
