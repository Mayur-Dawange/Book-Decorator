import React from "react";
import BannerStyled from "../Banner/BannerStyled";
import HowDoWe from "../HowDoWe/HowDoWe";
import HowItWorks from "../HowItWorks/HowItWorks";
import MapSection from "../MapSection/MapSection";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import ReadyToBook from "../ReadyToBook/ReadyToBook";
import Testimonialslider from "../Testimonialslider/Testimonialslider";

const Home = () => {
  return (
    <div>
      <BannerStyled />
      <ProjectSlider />
      <HowItWorks />
      <HowDoWe />
      <Testimonialslider />
      <MapSection />
      <ReadyToBook />
    </div>
  );
};

export default Home;
