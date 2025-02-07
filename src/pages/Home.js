import React from "react";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";

const Home = ({ language }) => {
  return (
    <>
      <Hero language={language} />
      <Intro language={language} />
      <Services language={language}/>
      <Clients language={language}/>
      <Footer language={language} />
    </>
  );
};

export default Home;
