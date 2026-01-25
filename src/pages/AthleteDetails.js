import React from "react";
import { useParams } from "react-router-dom";

import { getAthletes } from "../lib/athletes";
import { useDocTitle } from "../components/CustomHook";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import placeholderAction from "../images/athletes/portrait_placeholder.jpg";

const AthleteDetails = ({ language }) => {
  useDocTitle("peplies consult - Sports Marketing Consultants");
  const { athleteName } = useParams();
  const athletes = getAthletes(language);
  const athlete = athletes.find((a) => `${a.firstName}-${a.lastName}` === athleteName);

  if (!athlete) {
    return <div>{language === "de" ? "Athlet nicht gefunden" : "Athlete not found"}</div>;
  }

  return (
    <>
      <div className="container max-w-4xl mx-auto my-40">
        <div className="card bg-white overflow-hidden flex flex-col md:flex-row">
          <img
            src={athlete.portraitImageURL || placeholderPortrait}
            alt={`${athlete.firstName} ${athlete.lastName}`}
            className="w-full lg:w-1/2 h-100 object-cover"
            style={{ height: "400px" }}
          />
          <div className="p-4 md:w-1/2 flex flex-col justify-center text-right gap-3">
            <h2 className="text-xl font-bold text-blue-900">
              {athlete.firstName} {athlete.lastName}
            </h2>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Geburtstag:" : "Birthday:"}</strong> {athlete.birthday}
            </p>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Sportdisziplin:" : "Sport Discipline:"}</strong> {athlete.sportDiscipline}
            </p>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Verein:" : "Club:"}</strong> {athlete.club}
            </p>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Interessen:" : "Interests:"}</strong> {athlete.interests.join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Beruf:" : "Profession:"}</strong> {athlete.profession}
            </p>
            <p className="text-gray-700">
              <strong>{language === "de" ? "Hobby:" : "Hobby:"}</strong> {athlete.hobby}
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-xl overflow-hidden flex flex-col justify-between md:flex-row rounded-b-xl">
          <div className="p-4 w-full md:w-1/2 flex flex-col">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-900">{language === "de" ? "Erfolge:" : "Achievements:"}</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {athlete.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <img
            src={athlete.actionImageURL || placeholderAction}
            alt={`${athlete.firstName} ${athlete.lastName} action`}
            className="w-full lg:w-1/2 h-100 object-cover"
            style={{ height: "400px" }}
          />
        </div>
      </div>
    </>
  );
};

export default AthleteDetails;
