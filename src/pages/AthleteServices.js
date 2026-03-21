import React from "react";
import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";
import { getAthleteServiceItems } from "../i18n/content/athleteServicesCopy";

const AthleteServices = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("athleteServices.docTitle"));

  const items = getAthleteServiceItems(locale);

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40 max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">{t("athleteServices.title")}</h1>
          <p className="text-lg text-center text-gray-700 mb-10">{t("athleteServices.intro")}</p>

          <div className="space-y-8 border-t border-gray-100 pt-8">
            {items.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AthleteServices;
