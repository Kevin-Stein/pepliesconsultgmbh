import React, { useState, useEffect, useRef } from "react";
import logo from "../images/pepliesconsult_logo_black.svg";

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743604395/tennis_txbxgw.mov",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743604394/reiten_a1mytn.mov",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743604393/tischtennis_pjg5s4.mov",
    "https://res.cloudinary.com/dbpoconup/video/upload/v1743604391/ski_alpin_r9hwpr.mov",
  ];

  useEffect(() => {
    const playVideo = async (index) => {
      const video = videoRefs.current[index];
      if (!video) return;

      try {
        video.currentTime = 0;
        await video.play();
      } catch (error) {
        // Silently handle video playback errors in production
        // Move to next video on error
        const nextIndex = (index + 1) % videos.length;
        setCurrentVideo(nextIndex);
      }
    };

    const handleVideoEnd = () => {
      const nextIndex = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextIndex);
    };

    // Add ended event listener to current video
    const currentVideoElement = videoRefs.current[currentVideo];
    if (currentVideoElement) {
      currentVideoElement.addEventListener("ended", handleVideoEnd);
      playVideo(currentVideo);
    }

    // Cleanup
    return () => {
      // Store reference to current element for cleanup
      const videoElement = videoRefs.current[currentVideo];
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
      // Stop all videos
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, [currentVideo, videos.length]);

  return (
    <>
      <div className="hero relative h-[400px] lg:h-[800px] flex flex-col items-center justify-between" id="hero">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {videos.map((video, index) => (
            <video
              key={video}
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out brightness-60 ${
                index === currentVideo ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-between h-full py-8">
          <div className="flex-grow"></div>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white leading-relaxed">
            <img
              src={logo}
              alt="peplies consult"
              className="sm:h-48 h-24 w-auto mx-auto [filter:brightness(0)_saturate(100%)_invert(100%)]"
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
