import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../images/pepliesconsult_logo_black.svg";

const Hero = ({ language }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  const videos = [
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743086097/1587215_4k_Skiing_3840x2160_gog0nk.mp4",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743086096/5401296_Coll_wavebreak_People_3840x2160_wqpjne.mp4",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743089133/0_Woman_Runner_3840x2160_odahxf.mp4",
  ];

  useEffect(() => {
    // Set up interval for video rotation
    intervalRef.current = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 8000);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    };
  }, []);

  return (
    <>
      <div className="hero relative h-[400px] lg:h-[800px] flex items-center justify-center" id="hero">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
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
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative z-10 text-center px-4" data-aos="zoom-in">
          <h1 className="mb-5 text-2xl md:text-5xl mt-20 font-bold text-white leading-relaxed">
            {language === "de" ? (
              <>
                WILLKOMMEN
                <br />
                <span className="sm:mt-8 block">bei der</span>
                <img
                  src={logo}
                  alt="peplies consult"
                  className="sm:h-48 h-24 w-auto mx-auto sm:mt-8 [filter:brightness(0)_saturate(100%)_invert(100%)]"
                />
              </>
            ) : (
              <>
                WELCOME
                <br />
                <span className="sm:mt-8 block">to the</span>
                
                <img
                  src={logo}
                  alt="peplies consult"
                  className="sm:h-48 h-24 w-auto mx-auto sm:mt-8 [filter:brightness(0)_saturate(100%)_invert(100%)]"
                />
              </>
            )}
          </h1>

          <div className="sm:my-8">
            <HashLink
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 shadow-xl rounded-xl"
              to="/athletes"
            >
              {language === "de" ? "Unsere Athleten" : "Our Athletes"}
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
