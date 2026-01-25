import React from "react";
import { useDocTitle } from "../components/CustomHook";

const Publications = ({ language }) => {
  useDocTitle("peplies consult - Publications");

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {language === "de" ? "Publikationen" : "Publications"}
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

    
      </div>
    </div>
  );
};

export default Publications;
