import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const LegalNotice = () => {
  const { t } = useI18n();
  useDocTitle(t("legal.docTitle"));
  return (
    <div className="container mx-auto p-4 my-20 lg:my-40 max-w-5xl">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900">{t("legal.title")}</h1>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-blue-900" />
        </div>

        <div className="space-y-8 border-t border-gray-100 pt-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.tmgaHeading")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              peplies consult GmbH
              <br />
              Höhenstraße 12
              <br />
              65321 Heidenrod
              <br />
              {t("legal.country")}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.contact")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Tel: +49 178 8271600
              <br />
              Tel: +49 152 53823353
              <br />
              E-Mail: peplies@pepliesconsult.de
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.vatHeading")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("legal.taxNumberLine")}
              <br />
              {t("legal.vatIntro")} DE 242914374
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.managingDirector")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Stephan Peplies</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.registerHeading")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("legal.registerCourtLabel")} {t("legal.registerCourt")}
              <br />
              {t("legal.registerNumberLabel")} HRB 31156
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t("legal.responsibleHeading")}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Stephan Peplies</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
