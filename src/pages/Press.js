import React, { useEffect, useMemo, useState } from "react";
import { useDocTitle } from "../components/CustomHook";
import pressArticles from "../lib/pressArticles.js";
import { useI18n } from "../i18n/I18nContext";
import { getPressTitle } from "../i18n/content/pressTitleTranslations";

const pressPdfContext = require.context("../images/press", false, /\.pdf$/i);
const pressPdfMap = pressPdfContext.keys().reduce((acc, key) => {
  const fileName = key.replace("./", "");
  acc[fileName] = pressPdfContext(key);
  return acc;
}, {});

const splitTitleByDash = (title = "") => {
  const separator = " - ";
  const idx = title.indexOf(separator);
  if (idx === -1) return { lead: title, rest: "" };
  return {
    lead: title.slice(0, idx),
    rest: title.slice(idx + separator.length),
  };
};

const Press = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("press.docTitle"));
  const [selectedArticle, setSelectedArticle] = useState(null);

  const normalizedArticles = useMemo(
    () =>
      pressArticles.map((article) => ({
        ...article,
        id: `${article.file}-${article.title}`,
        fileName: article.file.split("/").pop(),
      })),
    []
  );

  useEffect(() => {
    if (!selectedArticle) return undefined;
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedArticle(null);
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [selectedArticle]);

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("press.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-gray-600 font-medium mb-10">{t("press.pageIntro")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normalizedArticles.map((article) => {
            const localPdfSrc = article.fileName ? pressPdfMap[article.fileName] : null;
            const isAvailable = Boolean(localPdfSrc);
            const localizedTitle = getPressTitle(locale, article.title);
            const { lead, rest } = splitTitleByDash(localizedTitle);
            return (
              <div
                key={article.id}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h2 className="text-xl text-gray-900 mb-4 leading-snug">
                    <span className="font-bold">{lead}</span>
                    {rest ? (
                      <>
                        {" - "}
                        <span className="font-normal">{rest}</span>
                      </>
                    ) : null}
                  </h2>
                  <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden relative group">
                    {isAvailable ? (
                      <button
                        type="button"
                        onClick={() => setSelectedArticle({ ...article, src: localPdfSrc })}
                        className="absolute inset-0 w-full h-full text-left"
                        aria-label={`${t("press.openHint")}: ${localizedTitle}`}
                      >
                        <iframe
                          title={localizedTitle}
                          src={`${localPdfSrc}#page=1&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                          className="h-full w-[calc(100%+18px)] -mr-[18px] pointer-events-none"
                          scrolling="no"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200" />
                      </button>
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
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center"
          onClick={() => setSelectedArticle(null)}
        >
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm sm:text-base text-white truncate">
                {(() => {
                  const { lead, rest } = splitTitleByDash(getPressTitle(locale, selectedArticle.title));
                  return (
                    <>
                      <span className="font-semibold">{lead}</span>
                      {rest ? (
                        <>
                          {" - "}
                          <span className="font-normal">{rest}</span>
                        </>
                      ) : null}
                    </>
                  );
                })()}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={selectedArticle.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-white"
                >
                  {t("press.openHint")}
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-white"
                  aria-label={t("contact.close")}
                >
                  {t("contact.close")}
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white h-[80vh]">
              <iframe
                title={getPressTitle(locale, selectedArticle.title)}
                src={`${selectedArticle.src}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                className="h-full w-[calc(100%+18px)] -mr-[18px]"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Press;
