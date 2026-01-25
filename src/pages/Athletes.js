import React from "react";
import { useNavigate } from "react-router-dom";

import { useDocTitle } from "../components/CustomHook";
import { getAthletes } from "../lib/athletes";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import sigCindyHaasch from "../images/sig_cindy haasch.png";
import sigAlinaNussbicker from "../images/sig_alina nussbicker.png";

const Athletes = ({ language }) => {
  useDocTitle("peplies consult - Athletes");
  const navigate = useNavigate();

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
  };

  // Get athletes in the specified language
  const athletes = getAthletes(language);
  // Get only current athletes
  const currentAthletes = athletes.filter((athlete) => !athlete.isFormer);

  // Sort athletes by first name
  const sortedCurrentAthletes = [...currentAthletes].sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8">
          {language === "de" ? "Aktuelle Athleten" : "Current Athletes"}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedCurrentAthletes.map((athlete, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg overflow-visible cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 h-[400px] relative"
              onClick={() => handleCardClick(athlete)}
            >
              <img
                src={athlete.portraitImageURL || placeholderPortrait}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="object-cover w-full h-[80%]"
              />
              <div className="p-4 relative z-10">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold flex-1">
                    {athlete.firstName} {athlete.lastName}
                  </h2>
                </div>
              </div>
              {athlete.firstName === "Cindy" && athlete.lastName === "Haasch" && (
                <img
                  src={sigCindyHaasch}
                  alt="Signature"
                  className="absolute bottom-0 right-0 h-16 w-auto object-contain transform rotate-[-8deg] z-20 drop-shadow-lg"
                />
              )}
              {athlete.firstName === "Alina" && athlete.lastName === "Nußbicker" && (
                <img
                  src={sigAlinaNussbicker}
                  alt="Signature"
                  className="absolute bottom-0 right-0 h-24 w-auto object-contain transform rotate-[-8deg] z-20 drop-shadow-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Athletes;
