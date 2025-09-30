import { useDocTitle } from "../components/CustomHook";

const LegalNotice = ({ language }) => {
  useDocTitle("peplies consult - Legal Notice");
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          {language === "de" ? "Impressum" : "Legal Notice"}
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 TMG"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            peplies consult GmbH
            <br />
            Höhenstraße 12
            <br />
            65321 Heidenrod
            <br />
            Deutschland
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Kontakt" : "Contact"}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            Tel: +49 (0) 6424-964560
            <br />
            E-Mail: peplies@pepliesconsult.de
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Umsatzsteuer-ID" : "VAT ID"}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {language === "de"
              ? "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:"
              : "VAT identification number pursuant to §27 a of the German VAT Act:"}{" "}
            DE 123 456 789
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Geschäftsführer" : "Managing Director"}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">Stephan Peplies</p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Registereintrag" : "Commercial Register"}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {language === "de" ? "Eintragung im Handelsregister." : "Entry in the Commercial Register."}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {language === "de" ? "Registergericht: Amtsgericht" : "Register Court:"} Marburg/Lahn
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">
            {language === "de" ? "Registernummer:" : "Registry number:"} HRB 4982
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de"
              ? "Verantwortlich für den Inhalt nach § 18 MStV:"
              : "Responsible for content in accordance with Section 18 of the German Media Services Treaty (MStV):"}{" "}
          </p>
          <p className="text-gray-600 font-semi text-base md:text-xl mb-6">Stephan Peplies</p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
