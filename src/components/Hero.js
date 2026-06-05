import React, { useState, useEffect, useRef } from "react";
import logo from "../images/pepliesconsult_logo_black.svg";
import heroVideos from "../lib/heroVideos.js";
import { requiresExternalMediaConsent, videoUrlForHtml5 } from "../lib/videoUrl.js";
import { useI18n } from "../i18n/I18nContext";

const Hero = ({ allowExternalMedia = false }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef([]);
  const { t } = useI18n();

  const videos = heroVideos;
  const heroNeedsExternalConsent = videos.some(requiresExternalMediaConsent);
  const canPlayHeroVideos =
    !prefersReducedMotion && (!heroNeedsExternalConsent || allowExternalMedia);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    // Store references at the start of the effect for cleanup
    const videoRefsSnapshot = videoRefs.current;
    const currentVideoIndex = currentVideo;

    const playVideo = async (index) => {
      if (!canPlayHeroVideos) return;
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
  }, [canPlayHeroVideos, currentVideo, prefersReducedMotion, videos.length]);

  return (
    <>
      <div className="hero relative h-[400px] lg:h-[800px] flex flex-col items-center justify-between" id="hero">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {canPlayHeroVideos &&
            videos.map((video, index) => (
              <video
                key={video}
                ref={(el) => (videoRefs.current[index] = el)}
                src={videoUrlForHtml5(video)}
                muted
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover object-[center_40%] transition-opacity duration-1000 ease-in-out brightness-60 ${
                  index === currentVideo ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          {!canPlayHeroVideos && <div className="absolute inset-0 bg-slate-800" aria-hidden />}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-between h-full py-8">
          <div className="flex-grow"></div>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white leading-relaxed">
            <img
              src={logo}
              alt={t("contact.logoAlt")}
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
