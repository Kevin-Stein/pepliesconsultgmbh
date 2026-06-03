// src/pages/TvCommercials.js
import React from "react";
import { useDocTitle } from "../components/CustomHook";
import tvCommercialsData from "../lib/tvCommercialsData.js";
import { cloudinaryVideoUrlForHtml5 } from "../lib/cloudinaryVideoUrl.js";
import { pickLocalized } from "../lib/pickLocalized.js";
import { useI18n } from "../i18n/I18nContext";

const PREVIEW_SECONDS = 1;

const handleVideoPreviewAtOneSecond = (event) => {
  const video = event.currentTarget;
  if (!video || Number.isNaN(video.duration)) return;

  const previewTime = video.duration > PREVIEW_SECONDS ? PREVIEW_SECONDS : 0;
  if (Math.abs(video.currentTime - previewTime) < 0.05) {
    video.pause();
    return;
  }

  const handleSeeked = () => {
    video.pause();
    video.removeEventListener("seeked", handleSeeked);
  };

  video.addEventListener("seeked", handleSeeked);
  try {
    video.currentTime = previewTime;
  } catch {
    video.removeEventListener("seeked", handleSeeked);
  }
};

const TvCommercialVideo = ({ commercial, fallbackText }) => (
  <video
    src={`${cloudinaryVideoUrlForHtml5(commercial.videoUrl)}#t=${PREVIEW_SECONDS}`}
    poster={commercial.thumbnailUrl || undefined}
    controls
    preload="metadata"
    playsInline
    className="w-full h-full object-cover"
    onLoadedMetadata={handleVideoPreviewAtOneSecond}
  >
    {fallbackText}
  </video>
);

const TvCommercials = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("tv.docTitle"));

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("tv.title")}</h1>
          <p className="max-w-4xl mx-auto text-sm sm:text-base font-medium text-gray-600 mb-6">{t("tv.subtitle")}</p>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tvCommercialsData.map((commercial) => (
            <div
              key={commercial.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-video bg-gray-200">
                <TvCommercialVideo commercial={commercial} fallbackText={t("tv.videoNotSupported")} />
              </div>

              <div className="p-4">
                {commercial.date ? (
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{commercial.date}</span>
                  </div>
                ) : null}
                <h2 className="text-xl font-bold text-gray-900">{pickLocalized(commercial.title, locale)}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvCommercials;
