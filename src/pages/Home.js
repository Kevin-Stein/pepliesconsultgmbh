import React from "react";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";

const Home = ({ allowExternalMedia = false }) => {
  return (
    <>
      <Hero allowExternalMedia={allowExternalMedia} />
      <Intro />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
