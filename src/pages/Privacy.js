import { useDocTitle } from "../components/CustomHook"
import { getPrivacySections } from "../i18n/content/privacyCopy"
import { useI18n } from "../i18n/I18nContext"

const Privacy = () => {
  const { locale, t } = useI18n()
  useDocTitle(t("privacy.docTitle"))
  const sections = getPrivacySections(locale)

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8">{t("privacy.title")}</h1>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`privacy-${section.id}`}>
              <h2
                id={`privacy-${section.id}`}
                className="text-xl sm:text-2xl font-bold text-blue-900 mb-4"
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.id}-p-${index}`}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
              {section.listItems ? (
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-4 space-y-2">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.paragraphsAfter?.map((paragraph, index) => (
                <p
                  key={`${section.id}-pa-${index}`}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Privacy
