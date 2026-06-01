import React from "react";
import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const ScientificAdvisoryBoard = () => {
  const { t } = useI18n();
  useDocTitle(t("scientificAdvisoryBoard.docTitle"));
  const economicsMembers = t("scientificAdvisoryBoard.sections.sportsEconomics.members");
  const medicineMembers = t("scientificAdvisoryBoard.sections.sportsMedicine.members");

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("scientificAdvisoryBoard.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-10">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("scientificAdvisoryBoard.sections.sportsEconomics.title")}</h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              {(Array.isArray(economicsMembers) ? economicsMembers : []).map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("scientificAdvisoryBoard.sections.sportsMedicine.title")}</h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              {(Array.isArray(medicineMembers) ? medicineMembers : []).map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScientificAdvisoryBoard;
