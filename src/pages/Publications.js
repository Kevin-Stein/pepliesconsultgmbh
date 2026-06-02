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

const splitTitleByDash = (title = "") => {
  for (const separator of [" - ", " – "]) {
    const idx = title.indexOf(separator)
    if (idx === -1) continue
    return {
      lead: title.slice(0, idx),
      rest: title.slice(idx + separator.length),
    }
  }
  return { lead: title, rest: "" }
}

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
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("publications.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-gray-600 font-medium mb-10">{t("publications.pageIntro")}</p>

        {mediaItems.length === 0 ? (
          <p className="max-w-2xl mx-auto text-center text-gray-700 font-medium">{t("publications.empty")}</p>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {mediaItems.map((item) => {
              const { lead, rest } = splitTitleByDash(item.title)
              return (
                <div
                  key={item.id}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-4">
                    <h2 className="text-xl text-gray-900 mb-4 leading-snug">
                      <span className="font-bold">{lead}</span>
                      {rest ? (
                        <>
                          {" – "}
                          <span className="font-normal">{rest}</span>
                        </>
                      ) : null}
                    </h2>
                    <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden relative group">
                      <button
                        type="button"
                        onClick={() => setSelectedMedia(item)}
                        className="absolute inset-0 w-full h-full text-left"
                        aria-label={`${t("press.openHint")}: ${item.title}`}
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
                  </div>
                </div>
              )
            })}
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
              <p className="text-sm sm:text-base text-white truncate">
                {(() => {
                  const { lead, rest } = splitTitleByDash(selectedMedia.title)
                  return (
                    <>
                      <span className="font-semibold">{lead}</span>
                      {rest ? (
                        <>
                          {" – "}
                          <span className="font-normal">{rest}</span>
                        </>
                      ) : null}
                    </>
                  )
                })()}
              </p>
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
