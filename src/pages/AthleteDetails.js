import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import athletes from "../lib/athletes";
import { useDocTitle } from "../components/CustomHook";
import placeholderPortrait from "../images/athletes/athlet_portrait.jpg";
import placeholderAction from "../images/athletes/athlet_action.jpg";

const AthleteDetails = ({ language }) => {
  useDocTitle("peplies consult - Sports Marketing Consultants");
  const { athleteName } = useParams();
  const athlete = athletes.find((a) => `${a.firstName}-${a.lastName}` === athleteName);

  if (!athlete) {
    return <div>{language === "de" ? "Athlet nicht gefunden" : "Athlete not found"}</div>;
  }

  return (
    <>
      <div className="container mx-auto px-20 m-40">
        <div className="card bg-white overflow-hidden flex flex-col md:flex-row">
          <img
            src={athlete.portraitImageURL || placeholderPortrait}
            alt={`${athlete.firstName} ${athlete.lastName}`}
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-4 md:w-2/3 flex flex-col justify-center text-right gap-4">
            <h2 className="text-xl font-bold">
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
        <div className="card bg-white shadow-md overflow-hidden flex flex-col md:flex-row mt-8">
          <div className="p-4 md:w-2/3 flex flex-col justify-center">
            <p className="text-gray-700">
              <strong>{language === "de" ? "Erfolge:" : "Achievements:"}</strong>
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
            className="w-full md:w-1/3 object-cover"
          />
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default AthleteDetails;
