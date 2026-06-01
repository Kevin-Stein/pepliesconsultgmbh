import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const Privacy = () => {
  const { t } = useI18n();
  useDocTitle(t("privacy.docTitle"));
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("privacy.title")}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section1Heading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section1Subheading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section1Body")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section2Heading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section2Subheading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section2Body")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section3Heading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("privacy.section3Body")}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
