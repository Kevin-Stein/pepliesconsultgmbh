import React from "react";
import { useDocTitle } from "../components/CustomHook";
import referenzen1 from "../images/clients/Referenzen Unternehmen 1.jpeg";
import referenzen2 from "../images/clients/Referenzen Unternehmen 2.jpeg";
import referenzen3 from "../images/clients/Referenzen Unternehmen 3.jpeg";
import referenzen4 from "../images/clients/Referenzen Unternehmen 4.jpeg";
import referenzen5 from "../images/clients/Referenzen Unternehmen 5.jpeg";
import referenzen6 from "../images/clients/Referenzen Unternehmen 6.jpeg";
import referenzen from "../images/clients/Referenzen Unternehmen.jpeg";

const CompanyReferences = ({ language }) => {
  useDocTitle("peplies consult - Referenzen Unternehmen");

  const images = [referenzen1, referenzen2, referenzen3, referenzen4, referenzen5, referenzen6, referenzen];

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {language === "de" ? "Referenzen Unternehmen" : "Company References"}
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "de"
              ? "Unternehmen mit denen wir zusammen arbeiten."
              : "Companies we work with."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image}
                alt={`${language === "de" ? "Referenz" : "Reference"} ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyReferences;
