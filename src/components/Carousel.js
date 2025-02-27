import React from "react";
import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";

const images = [kws, geps, protergia];

const Carousel = () => {
  return (
    <div className="relative w-full h-32 lg:h-64 overflow-hidden">
      <div className="carousel-track flex absolute inset-0 justify-center items-center h-full gap-4 lg:mb-4">
        {images.concat(images).map((image, index) => (
          <img key={index} src={image} alt="client" className="h-full object-cover " />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
