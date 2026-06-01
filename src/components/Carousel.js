import React from "react";
import referenzen1 from "../images/clients/Referenzen Unternehmen 1.png";
import referenzen2 from "../images/clients/Referenzen Unternehmen 2.png";
import referenzen3 from "../images/clients/Referenzen Unternehmen 3.png";
import referenzen4 from "../images/clients/Referenzen Unternehmen 4.png";
import referenzen5 from "../images/clients/Referenzen Unternehmen 5.png";
import referenzen6 from "../images/clients/Referenzen Unternehmen 6.png";
import referenzen from "../images/clients/Referenzen Unternehmen 7.png";

const images = [referenzen1, referenzen2, referenzen3, referenzen4, referenzen5, referenzen6, referenzen];

const Carousel = () => {
  return (
    <div className="relative w-full h-32 lg:h-64 overflow-hidden">
      <div className="carousel-track flex absolute inset-0 justify-center items-center h-full gap-4 lg:mb-4">
        {images.concat(images).map((image, index) => (
          <img key={`${image}-${index}`} src={image} alt={`client logo ${index + 1}`} className="h-full object-cover " />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
