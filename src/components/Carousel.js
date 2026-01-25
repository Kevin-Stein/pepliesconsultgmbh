import React from "react";
import referenzen1 from "../images/clients/Referenzen Unternehmen 1.jpeg";
import referenzen2 from "../images/clients/Referenzen Unternehmen 2.jpeg";
import referenzen3 from "../images/clients/Referenzen Unternehmen 3.jpeg";
import referenzen4 from "../images/clients/Referenzen Unternehmen 4.jpeg";
import referenzen5 from "../images/clients/Referenzen Unternehmen 5.jpeg";
import referenzen6 from "../images/clients/Referenzen Unternehmen 6.jpeg";
import referenzen from "../images/clients/Referenzen Unternehmen.jpeg";

const images = [referenzen1, referenzen2, referenzen3, referenzen4, referenzen5, referenzen6, referenzen];

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
