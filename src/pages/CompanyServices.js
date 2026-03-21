import React from "react";
import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";
import { getCompanyServicesCopy } from "../i18n/content/companyServicesCopy";

const CompanyServices = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("companyServices.docTitle"));

  const copy = getCompanyServicesCopy(locale);

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40 max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900">{t("companyServices.title")}</h1>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-blue-900"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed text-center sm:text-left">{copy.intro}</p>

            <div className="space-y-10 border-t border-gray-100 pt-8 not-prose">
              {copy.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{section.h2}</h2>
                  {section.type === "list" ? (
                    <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed space-y-2">
                      {section.items.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{section.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyServices;
