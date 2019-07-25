import React from "react";
import { VideoWrapper } from "../Utils/StyledComponents";

export default function VideoCover() {
  return (
    <VideoWrapper>
      <video autoPlay muted loop height="auto" width="100%">
        <source src="https://res.cloudinary.com/dzlcu5kcg/video/upload/v1563996420/agora/coverupdated_n6gdm8.mp4" type="video/mp4" />
      </video>
    </VideoWrapper>
  );
}
