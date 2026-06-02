import React from "react";
import { useNavigate } from "react-router-dom";

import { useDocTitle } from "../components/CustomHook";
import { getAthletes } from "../lib/athletes";
import { getAthleteSlug } from "../lib/athleteSlug";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import { useI18n } from "../i18n/I18nContext";

const Athletes = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("athletesPage.docTitle"));
  const navigate = useNavigate();

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${getAthleteSlug(athlete)}`);
  };

  const athletes = getAthletes(locale);
  const currentAthletes = athletes.filter((athlete) => !athlete.isFormer);
  const sortedCurrentAthletes = [...currentAthletes].sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("athletesPage.title")}</h1>
          <p className="max-w-4xl mx-auto text-sm sm:text-base font-medium text-gray-600 mb-6">{t("athletesPage.subtitle")}</p>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sortedCurrentAthletes.map((athlete) => (
            <button
              type="button"
              key={`${athlete.firstName}-${athlete.lastName}`}
              className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleCardClick(athlete)}
              aria-label={`${athlete.firstName} ${athlete.lastName}`}
            >
              <img
                src={athlete.portraitImageURL || placeholderPortrait}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="p-4 mt-3">
                <h2 className="text-xl font-bold">
                  {athlete.firstName} {athlete.lastName}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Athletes;
