import React from "react";
import {
  Banner,
  BannerText,
  BannerTextAndIcon,
  IconsAndTextContainer,
  IconsContainer,
  PforIcon,
  H1,
  P,
  B,
  HRIcon
} from "../Utils/StyledComponents.js";

export default function InfoCard() {
  return (
    <Banner>
      <BannerText>
        {" "}
        <H1> Become the change you believe in </H1>{" "}
        <P>
          {" "}
          Impact starts from the ground, in your local community.{" "}
          <B> Agorae </B>
          is a platform to help you impact the world around you and beyond, by
          delivering tangible projects with your friends.{" "}
        </P>{" "}
        <HRIcon />
      </BannerText>
      <BannerTextAndIcon>
        <IconsAndTextContainer>
          <IconsContainer>
            <img src="https://res.cloudinary.com/dzlcu5kcg/image/upload/v1563900038/agora/community.png.png" width="15%" />
          </IconsContainer>
          <PforIcon>
            {" "}
            Connect to your Agora: a community of people living in your
            neighboorhood ready to debate ideas and achieve great things
            together.
          </PforIcon>
        </IconsAndTextContainer>
        <IconsAndTextContainer>
          <IconsContainer>
            <img src="https://res.cloudinary.com/dzlcu5kcg/image/upload/v1563894868/agora/toolbox.png.png" width="15%" />
          </IconsContainer>
          <PforIcon>
            {" "}
            Engage into projects of all kinds: social, ecology, eduction and
            works toward a common goal with or without financial contribution
          </PforIcon>
        </IconsAndTextContainer>
        <IconsAndTextContainer>
          <IconsContainer>
            <img src="https://res.cloudinary.com/dzlcu5kcg/image/upload/v1563894895/agora/cloud.png.png" width="15%" />
          </IconsContainer>
          <PforIcon>
            {" "}
            Access your agora and projects in just a few clicks. You just need a
            quick profile and you are in!
          </PforIcon>
        </IconsAndTextContainer>
      </BannerTextAndIcon>
    </Banner>
  );
}
