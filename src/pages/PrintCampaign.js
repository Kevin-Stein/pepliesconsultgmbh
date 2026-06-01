import React, { useEffect, useState } from "react";
import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const campaignMediaContext = require.context("../images/PR_print_plakate", false, /\.(png|jpe?g|webp|gif|pdf)$/i);

const mediaItems = campaignMediaContext
  .keys()
  .map((key) => {
    const fileName = key.replace("./", "");
    const extension = (fileName.split(".").pop() || "").toLowerCase();
    const baseName = fileName.replace(/\.[^.]+$/, "");
    const cleanedBaseName = baseName
      .replace(/_[a-z0-9]{6,}$/i, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return {
      id: fileName,
      src: campaignMediaContext(key),
      extension,
      title: cleanedBaseName || baseName,
      isPdf: extension === "pdf",
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title, "de"));

const PrintCampaign = () => {
  const { t } = useI18n();
  useDocTitle(t("printCampaign.docTitle"));
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (!selectedMedia) return undefined;
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [selectedMedia]);

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("printCampaign.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-gray-600 font-medium mb-10">{t("printCampaign.galleryIntro")}</p>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 gap-4 sm:gap-5">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="group mb-4 sm:mb-5 w-full break-inside-avoid overflow-hidden rounded-xl bg-slate-100 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedMedia(item)}
              aria-label={`${item.isPdf ? t("printCampaign.openPdf") : t("printCampaign.openImage")} ${item.title}`}
            >
              <div className="relative bg-slate-50 flex items-center justify-center p-2">
                {item.isPdf ? (
                  <>
                    <div className="h-72 max-h-72 w-full overflow-hidden">
                      <iframe
                        src={`${item.src}#page=1&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                        title={item.title}
                        className="h-full w-[calc(100%+18px)] -mr-[18px] pointer-events-none"
                        scrolling="no"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" aria-hidden />
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto max-h-72 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-white"
                aria-label={t("contact.close")}
              >
                {t("contact.close")}
              </button>
            </div>
            {selectedMedia.isPdf ? (
              <div className="rounded-xl overflow-hidden bg-white h-[80vh]">
                <iframe
                  title={selectedMedia.title}
                  src={`${selectedMedia.src}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                  className="h-full w-[calc(100%+18px)] -mr-[18px]"
                  scrolling="no"
                />
              </div>
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.title} className="max-h-[80vh] w-full object-contain rounded-xl bg-slate-900" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintCampaign;
