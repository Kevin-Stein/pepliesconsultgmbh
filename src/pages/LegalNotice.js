import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const LegalNotice = () => {
  const { t } = useI18n();
  useDocTitle(t("legal.docTitle"));
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("legal.title")}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.tmgaHeading")}</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            peplies consult GmbH
            <br />
            Höhenstraße 12
            <br />
            65321 Heidenrod
            <br />
            {t("legal.country")}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.contact")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            Tel: +49 (0) 6424-964560
            <br />
            E-Mail: peplies@pepliesconsult.de
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.vatHeading")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {t("legal.vatIntro")} DE 123 456 789
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.managingDirector")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">Stephan Peplies</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.registerHeading")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">{t("legal.registerBody")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {t("legal.registerCourtLabel")} Marburg/Lahn
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {t("legal.registerNumberLabel")} HRB 4982
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">{t("legal.responsibleHeading")}</p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">Stephan Peplies</p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
