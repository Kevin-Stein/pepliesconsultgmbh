import React, { useEffect, useMemo, useState } from "react"
import { useDocTitle } from "../components/CustomHook"
import publicationsData from "../lib/publicationsData.js"
import { pickLocalized } from "../lib/pickLocalized.js"
import { useI18n } from "../i18n/I18nContext"

const publicationMediaContext = require.context("../images/publication", false, /\.(png|jpe?g|webp|gif|pdf)$/i)

const publicationSrcByFileName = publicationMediaContext.keys().reduce((acc, key) => {
  const fileName = key.replace("./", "")
  acc[fileName] = publicationMediaContext(key)
  return acc
}, {})

const PublicationTitle = ({ title, subtitle }) => (
  <div className="mb-4">
    {subtitle ? <p className="text-base font-medium text-gray-800 mb-1">{subtitle}</p> : null}
    <h2 className="text-xl font-bold text-gray-900 leading-snug">{title}</h2>
  </div>
)

const Publications = () => {
  const { locale, t } = useI18n()
  useDocTitle(t("publications.docTitle"))
  const [selectedMedia, setSelectedMedia] = useState(null)

  const mediaItems = useMemo(
    () =>
      publicationsData
        .map((item) => {
          const src = publicationSrcByFileName[item.fileName]
          if (!src) return null
          const extension = (item.fileName.split(".").pop() || "").toLowerCase()
          return {
            id: item.id,
            src,
            extension,
            title: pickLocalized(item.title, locale),
            subtitle: item.subtitle ? pickLocalized(item.subtitle, locale) : "",
            isbn: item.isbn || "",
            isPdf: extension === "pdf",
          }
        })
        .filter(Boolean),
    [locale]
  )

  useEffect(() => {
    if (!selectedMedia) return undefined
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMedia(null)
      }
    }
    document.addEventListener("keydown", onEscape)
    return () => document.removeEventListener("keydown", onEscape)
  }, [selectedMedia])

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("publications.title")}</h1>
          <p className="max-w-4xl mx-auto text-sm sm:text-base font-medium text-gray-600 mb-6">{t("publications.pageIntro")}</p>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>

        {mediaItems.length === 0 ? (
          <p className="max-w-2xl mx-auto text-center text-gray-700 font-medium">{t("publications.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
                <div
                  key={item.id}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-4">
                    <PublicationTitle title={item.title} subtitle={item.subtitle} />
                    <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden relative group">
                      <button
                        type="button"
                        onClick={() => setSelectedMedia(item)}
                        className="absolute inset-0 w-full h-full text-left"
                        aria-label={`${t("press.openHint")}: ${item.subtitle ? `${item.subtitle} – ${item.title}` : item.title}`}
                      >
                        {item.isPdf ? (
                          <iframe
                            title={item.title}
                            src={`${item.src}#page=1&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                            className="h-full w-[calc(100%+18px)] -mr-[18px] pointer-events-none"
                            scrolling="no"
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-contain pointer-events-none"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200" />
                      </button>
                    </div>
                    {item.isbn ? (
                      <p className="mt-3 text-sm text-gray-600">
                        <span className="font-semibold text-gray-700">{t("publications.isbn")}</span> {item.isbn}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="min-w-0 text-sm sm:text-base text-white">
                {selectedMedia.subtitle ? (
                  <p className="truncate text-white/90">{selectedMedia.subtitle}</p>
                ) : null}
                <p className="truncate font-semibold">{selectedMedia.title}</p>
                {selectedMedia.isbn ? (
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    {t("publications.isbn")} {selectedMedia.isbn}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedMedia.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-white"
                >
                  {t("press.openHint")}
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedMedia(null)}
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-white"
                  aria-label={t("contact.close")}
                >
                  {t("contact.close")}
                </button>
              </div>
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
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-h-[80vh] w-full object-contain rounded-xl bg-slate-900"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Publications
