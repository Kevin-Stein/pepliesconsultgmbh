import React from "react";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";

const Home = ({ language }) => {
  return (
    <>
      <Hero />
      <Intro language={language} />
      <Services language={language} />
      <Clients language={language} />
    </>
  );
};

export default Home;
