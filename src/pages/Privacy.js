import { useDocTitle } from "../components/CustomHook";

const Privacy = ({ language }) => {
  useDocTitle("peplies consult - Privacy Policy");
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "1. Datenschutz auf einen Blick" : "1. Privacy at a glance"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "Allgemeine Hinweise" : "General information"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de"
              ? "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."
              : "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified."}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "2. Datenerfassung auf unserer Website" : "2. Data collection on our website"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de"
              ? "Wer ist verantwortlich für die Datenerfassung auf dieser Website?"
              : "Who is responsible for data collection on this website?"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de"
              ? "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."
              : "The data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website."}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de" ? "3. Ihre Rechte" : "3. Your rights"}
          </p>
          <p className="text-gray-600 font-semibold text-base md:text-xl mb-6">
            {language === "de"
              ? "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Sperrung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit widerrufen. Außerdem haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
              : "You have the right to receive information about the origin, recipient and purpose of your stored personal data at any time free of charge. You also have the right to request the correction or blocking of this data. If you have given your consent to data processing, you can revoke this consent at any time. You also have the right to request the restriction of the processing of your personal data."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
