import React from "react";

import Carousel from "./Carousel";

const Clients = ({ language }) => {
  return (
    <div className="my-8 bg-white-100">
      <section>
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            {language === "de" ? "Unternehmen" : "Companies"}
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            {language === "de" ? "Unternehmen mit denen wir zusammen arbeiten." : "Companies we work with."}
          </h2>
        </div>

        <div>
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default Clients;
