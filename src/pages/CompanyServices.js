import React from "react";
import { useDocTitle } from "../components/CustomHook";

const CompanyServices = ({ language }) => {
  useDocTitle("peplies consult - Services for Companies");

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
        </h1>
        <p className="text-lg text-center mb-12">{language === "de" ? "Lorem ipsum" : "Englisch Lorem Ipsum"}</p>
      </div>
    </>
  );
};

export default CompanyServices;
