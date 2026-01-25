import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../components/CustomHook";
import { getAthletes } from "../lib/athletes";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import { AuthContext } from "../App";

const HallOfFame = ({ language = "de" }) => {
  useDocTitle("peplies consult - Hall of Fame");
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    // Redirect to home if not authenticated
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Don't render content if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-4 my-20 lg:my-40 text-center">
        <p className="text-xl text-gray-700">
          {language === "de" ? "Bitte melden Sie sich an, um diese Seite zu sehen." : "Please log in to view this page."}
        </p>
      </div>
    );
  }

  const handleCardClick = (athlete) => {
    navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
  };

  // Get athletes in the specified language
  const athletes = getAthletes(language);
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
