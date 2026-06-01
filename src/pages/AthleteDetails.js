import React from "react";
import { useParams } from "react-router-dom";

import { getAthletes } from "../lib/athletes";
import { useDocTitle } from "../components/CustomHook";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import placeholderAction from "../images/athletes/portrait_placeholder.jpg";
import { useI18n } from "../i18n/I18nContext";

const AthleteDetails = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("athleteDetail.docTitle"));
  const { athleteName } = useParams();
  const athletes = getAthletes(locale);
  const athlete = athletes.find((a) => `${a.firstName}-${a.lastName}` === athleteName);

  if (!athlete) {
    return <div>{t("athleteDetail.notFound")}</div>;
  }

  return (
    <>
      <div className="container max-w-4xl mx-auto my-40">
        <div className="card bg-white overflow-visible flex flex-col md:flex-row relative">
          <div className="w-full lg:w-1/2 relative">
            <img
              src={athlete.portraitImageURL || placeholderPortrait}
              alt={`${athlete.firstName} ${athlete.lastName}`}
              className="w-full h-100 object-cover"
              style={{ height: "400px" }}
            />
            {athlete.photoCredits?.portrait && (
              <p className="text-xs text-gray-500 mt-2 px-1">
                {t("athleteDetail.photoCredit")} {athlete.photoCredits.portrait}
              </p>
            )}
          </div>
          <div className="p-4 md:w-1/2 flex flex-col justify-center text-right gap-3 relative z-10">
            <h2 className="text-xl font-bold text-blue-900">
              {athlete.firstName} {athlete.lastName}
            </h2>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.birthday")}</strong> {athlete.birthday}
            </p>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.discipline")}</strong> {athlete.sportDiscipline}
            </p>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.club")}</strong> {athlete.club}
            </p>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.interests")}</strong> {athlete.interests.join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.profession")}</strong> {athlete.profession}
            </p>
            <p className="text-gray-700">
              <strong>{t("athleteDetail.hobby")}</strong> {athlete.hobby}
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-xl overflow-hidden flex flex-col justify-between md:flex-row rounded-b-xl">
          <div className="p-4 w-full md:w-1/2 flex flex-col">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-900">{t("athleteDetail.achievements")}</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {athlete.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={athlete.actionImageURL || placeholderAction}
              alt={`${athlete.firstName} ${athlete.lastName} action`}
              className="w-full h-100 object-cover"
              style={{ height: "400px" }}
            />
            {athlete.photoCredits?.action && (
              <p className="text-xs text-gray-500 mt-2 px-1 text-right">
                {t("athleteDetail.photoCredit")} {athlete.photoCredits.action}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AthleteDetails;
