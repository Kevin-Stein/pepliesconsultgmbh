import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import athletes from "../lib/athletes";
import placeholderPortrait from "../images/athletes/athlet_portrait.jpg";

const Athletes = ({ language }) => {
  useDocTitle("peplies consult - Sports Marketing Consultants");
  const navigate = useNavigate();

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
  };

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8">
          {language === "de" ? "Unsere Athleten" : "Our Athletes"}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleCardClick(athlete)}
            >
              <img
                src={athlete.portraitImageURL || placeholderPortrait}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="w-full object-cover"
              />
              <div className="p-4 mt-3">
                <h2 className="text-xl font-bold">
                  {athlete.firstName} {athlete.lastName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default Athletes;
