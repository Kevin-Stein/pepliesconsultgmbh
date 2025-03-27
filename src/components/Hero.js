import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Hero = ({ language }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743086097/1587215_4k_Skiing_3840x2160_gog0nk.mp4",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743086096/5401296_Coll_wavebreak_People_3840x2160_wqpjne.mp4",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743089133/0_Woman_Runner_3840x2160_odahxf.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 8000); // Switch every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero relative h-[130%]" id="hero">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            key={currentVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top transition-opacity duration-1000"
            style={{ opacity: 1 }}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="m-auto overflow-hidden mx-4 p-2 md:p-12 relative z-10" data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row lg:p-36 pt-20 justify-center items-center text-center">
            <div className="w-full flex flex-col justify-center items-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">
                {language === "de"
                  ? "WILLKOMMEN bei peplies consult - Sports Marketing Consultants"
                  : "WELCOME to peplies consult - Sports Marketing Consultants"}
              </h1>

              <div className="my-8 space-x-0 md:space-x-2 md:mb-8 content-center">
                <HashLink
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                  to="/athletes"
                >
                  {language === "de" ? "Unsere Athleten" : "Our Athletes"}
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
