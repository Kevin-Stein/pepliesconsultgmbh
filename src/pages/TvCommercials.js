// src/pages/TvCommercials.js
import React from 'react';
import { useDocTitle } from '../components/CustomHook';
import tvCommercialsData from '../lib/tvCommercialsData.js';

const TvCommercials = ({ language }) => {
  useDocTitle(language === 'de' ? 'peplies consult - TV Werbespots' : 'peplies consult - TV Commercials');

  return (
    <div className="bg-white py-12 sm:py-24 mt-40"> {/* Similar outer structure to Press page */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {language === 'de' ? 'TV Werbespots' : 'TV Commercials'}
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tvCommercialsData.map((commercial) => (
            <div
              key={commercial.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Player */}
              <div className="w-full aspect-video bg-gray-200"> {/* Aspect ratio for video */}
                <video
                  src={commercial.videoUrl}
                  poster={commercial.thumbnailUrl} // Use thumbnail as poster
                  controls // Add basic browser controls
                  preload="metadata" // Load only metadata initially
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Details below video */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{commercial.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {commercial.title[language] || commercial.title.en}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvCommercials;