import React from "react";
import Footer from "../components/Footer";

const LegalNotice = ({ language }) => {
  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8">{language === "de" ? "Impressum" : "Legal Notice"}</h1>
        <div className="text-lg text-center">
          <p>
            {language === "de"
              ? "Dies ist das Impressum der peplies consult - Sports Marketing Consultants."
              : "This is the legal notice of peplies consult - Sports Marketing Consultants."}
          </p>
          <p>
            {language === "de"
              ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:"
              : "Responsible for the content according to § 55 Abs. 2 RStV:"}
          </p>
          <p>Stephan Peplies</p>
          <p>My Street</p>
          <p>12345 Stadt</p>
          <p>Germany</p>
          <p>{language === "de" ? "Kontakt:" : "Contact:"}</p>
          <p>Email: peplies@pepliesconsult.de</p>
          <p>Tel: +49 (0) 6424-964560</p>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default LegalNotice;
