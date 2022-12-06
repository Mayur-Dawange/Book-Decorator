import React from "react";
import BannerStyled from "../Banner/BannerStyled";
import HowDoWe from "../HowDoWe/HowDoWe";
import HowItWorks from "../HowItWorks/HowItWorks";
import MapSection from "../MapSection/MapSection";

const Home = () => {
  return (
    <div>
      <BannerStyled />
      <HowItWorks />
      <HowDoWe />
      <MapSection />
    </div>
  );
};

export default Home;
