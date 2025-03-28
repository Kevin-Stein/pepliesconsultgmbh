import React from "react";
import { useDocTitle } from "../components/CustomHook";
import pressArticles from "../lib/pressArticles.js";

const Press = ({ language }) => {
  useDocTitle("peplies consult - Press");

  const getTranslatedTitle = (title) => {
    if (language === "en") {
      const translations = {
        "Berliner Tagesspiegel - Pyeong Chang 2018": "Berliner Tagesspiegel - Pyeong Chang 2018",
        "Socrates Fachmagazin Sponsoring": "Socrates Magazine Sponsoring",
        "Oberpfalzmedien Veröffentlichung": "Oberpfalzmedien Publication",
        "Fridericianerbote 2023": "Fridericianerbote 2023",
        "KON 37 2008 47 Highlights": "KON 37 2008 47 Highlights",
        "SKM C258 2009": "SKM C258 2009",
        "SKM C258 2009 (2)": "SKM C258 2009 (2)",
        "SKM C258 2009 (3)": "SKM C258 2009 (3)",
        "SKM C258 2009 (4)": "SKM C258 2009 (4)",
        "WESST 2022": "WESST 2022",
        "F2202102.031": "F2202102.031",
      };
      return translations[title] || title;
    }
    return title;
  };

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {language === "de" ? "Presse" : "Press"}
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <div
              key={index}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-blue-900 font-semibold">{article.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{getTranslatedTitle(article.title)}</h2>
                <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden relative group">
                  <embed
                    src={`${article.file}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full"
                  />
                  <a
                    href={article.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <p className="text-sm font-semibold">
                        {language === "de" ? "Zum Öffnen klicken" : "Click to open"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
