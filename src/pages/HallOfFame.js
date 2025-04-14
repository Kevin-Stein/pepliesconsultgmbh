import React from "react";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../components/CustomHook";
import athletes from "../lib/athletes";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";

const HallOfFame = ({ language }) => {
  useDocTitle("peplies consult - Hall of Fame");
  const navigate = useNavigate();

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
  };

  // Get only former athletes
  const formerAthletes = athletes.filter((athlete) => athlete.isFormer);

  // Sort athletes by first name
  const sortedFormerAthletes = [...formerAthletes].sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8">{language === "de" ? "Hall of Fame" : "Hall of Fame"}</h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedFormerAthletes.map((athlete, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleCardClick(athlete)}
            >
              <img
                src={athlete.portraitImageURL || placeholderPortrait}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="object-fit w-full"
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
    </>
  );
};

export default HallOfFame;
