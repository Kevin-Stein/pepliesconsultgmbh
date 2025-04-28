import React from "react";
import { useNavigate } from "react-router-dom";

import { useDocTitle } from "../components/CustomHook";
import athletes from "../lib/athletes";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";

const Athletes = ({ language }) => {
  useDocTitle("peplies consult - Athletes");
  const navigate = useNavigate();

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
  };

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
              className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 h-[400px]"
              onClick={() => handleCardClick(athlete)}
            >
              <img
                src={athlete.portraitImageURL || placeholderPortrait}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="object-cover w-full h-[80%]"
              />
              <div className="p-4 ">
                <h2 className="text-xl font-bold ">
                  {athlete.firstName} {athlete.lastName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Athletes;
