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
    // Store references at the start of the effect for cleanup
    const videoRefsSnapshot = videoRefs.current;
    const currentVideoIndex = currentVideo;

    const playVideo = async (index) => {
      const video = videoRefsSnapshot[index];
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
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideo(nextIndex);
    };

    // Add ended event listener to current video
    const currentVideoElement = videoRefsSnapshot[currentVideoIndex];
    if (currentVideoElement) {
      currentVideoElement.addEventListener("ended", handleVideoEnd);
      playVideo(currentVideoIndex);
    }

    // Cleanup
    return () => {
      // Use the stored reference for cleanup
      if (currentVideoElement) {
        currentVideoElement.removeEventListener("ended", handleVideoEnd);
      }
      // Stop all videos using the snapshot
      videoRefsSnapshot.forEach((video) => {
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
              className={`absolute inset-0 w-full h-full object-cover object-[center_72%] transition-opacity duration-1000 ease-in-out brightness-60 ${
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
              className="sm:h-48 h-24 w-auto mx-auto"
              style={{
                filter: "brightness(0) saturate(100%) invert(100%) drop-shadow(0 0 20px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(0,0,0,0.4)) drop-shadow(0 0 60px rgba(0,0,0,0.3))",
              }}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
