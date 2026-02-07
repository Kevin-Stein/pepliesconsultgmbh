import React from "react";

import Carousel from "./Carousel";

const Clients = ({ language }) => {
  return (
    <div className="bg-white pb-6 sm:pb-24 min-h-[150px] sm:min-h-[300px] flex items-center" id="clients">
      <div className="container mx-auto px-2 sm:px-12">
        <section>
          <div className="my-2 sm:my-8 py-2 sm:py-8">
            <h2 className="my-1 sm:my-4 text-center text-xl sm:text-3xl md:text-4xl text-blue-900 uppercase font-bold">
              {language === "de" ? "Referenzen Unternehmen" : "Company References"}
            </h2>
            <div className="flex justify-center">
              <div className="w-8 sm:w-32 border-b-4 border-blue-900"></div>
            </div>
           
          </div>

          <div>
            <Carousel />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
