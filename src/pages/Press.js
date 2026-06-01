import React, { useEffect, useMemo, useState } from "react";
import { useDocTitle } from "../components/CustomHook";
import pressArticles from "../lib/pressArticles.js";
import { useI18n } from "../i18n/I18nContext";
import { getPressTitle } from "../i18n/content/pressTitleTranslations";

const Press = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("press.docTitle"));
  const [availability, setAvailability] = useState({});

  const normalizedArticles = useMemo(
    () =>
      pressArticles.map((article) => ({
        ...article,
        id: `${article.file}-${article.title}`,
      })),
    []
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const checkAvailability = async () => {
      const results = await Promise.all(
        normalizedArticles.map(async (article) => {
          try {
            const response = await fetch(article.file, {
              method: "HEAD",
              signal: controller.signal,
            });
            return [article.id, response.ok];
          } catch {
            return [article.id, false];
          }
        })
      );
      if (isMounted) {
        setAvailability(Object.fromEntries(results));
      }
    };

    checkAvailability();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [normalizedArticles]);

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("press.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normalizedArticles.map((article) => {
            const isAvailable = availability[article.id] ?? true;
            return (
            <div
              key={article.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-blue-900 font-semibold">
                    {t(`press.categories.${article.category.toLowerCase()}`)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{getPressTitle(locale, article.title)}</h2>
                <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden relative group">
                  {isAvailable ? (
                    <a
                      href={article.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900 text-white px-6 text-center"
                      aria-label={`${t("press.openHint")}: ${getPressTitle(locale, article.title)}`}
                    >
                      <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 16.5V4.5m0 12l4.5-4.5M12 16.5L7.5 12M4.5 18.75h15"
                        />
                      </svg>
                      <p className="text-sm font-semibold">{t("press.openHint")}</p>
                    </a>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-700 px-6 text-center text-sm font-semibold">
                      {t("press.unavailable")}
                    </div>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Press;
