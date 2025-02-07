import React from "react";

import { HashLink } from "react-router-hash-link";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/athletes.svg";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row py-36 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900 ">
                WILLKOMMEN bei peplies consult - Sports Marketing Consultants
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                Wir sind „Consultants of Choice“ für nationale und internationale Athleten, Vereine, Verbände und
                Wirtschaftsunternehmen im Bereich des Sportmarketing und Sportsponsoring.
              </div>
              <div className="my-8 space-x-0 md:space-x-2 md:mb-8 content-center">
                <HashLink
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                  to="/athletes"
                >
                  Unsere Athleten
                </HashLink>
              </div>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
              <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
