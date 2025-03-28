import React from "react";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import CookieBanner from "../components/CookieBanner";

const Home = ({ language }) => {
  return (
    <>
      <CookieBanner language={language} />
      <Hero language={language} />
      <Intro language={language} />
      <Services language={language} />
      <Clients language={language} />
    </>
  );
};

export default Home;
