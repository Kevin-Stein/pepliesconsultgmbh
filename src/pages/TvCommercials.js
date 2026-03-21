// src/pages/TvCommercials.js
import React from "react";
import { useDocTitle } from "../components/CustomHook";
import tvCommercialsData from "../lib/tvCommercialsData.js";
import { cloudinaryVideoUrlForHtml5 } from "../lib/cloudinaryVideoUrl.js";
import { pickLocalized } from "../lib/pickLocalized.js";
import { useI18n } from "../i18n/I18nContext";

const TvCommercials = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("tv.docTitle"));

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("tv.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tvCommercialsData.map((commercial) => (
            <div
              key={commercial.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-video bg-gray-200">
                <video
                  src={cloudinaryVideoUrlForHtml5(commercial.videoUrl)}
                  poster={commercial.thumbnailUrl}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  {t("tv.videoNotSupported")}
                </video>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{commercial.date}</span>
                </div>
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
