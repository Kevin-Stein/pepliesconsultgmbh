import React from "react";
import { useDocTitle } from "../components/CustomHook";
import { useI18n } from "../i18n/I18nContext";

const NAME_SEPARATORS = [
  " University ",
  " Universität ",
  " Université ",
  " Universidad ",
  " Macromedia ",
  " European Business School ",
  " Viadrina ",
  " Bad ",
];

const splitMemberText = (member = "") => {
  const splitIndex = NAME_SEPARATORS.reduce((bestIndex, separator) => {
    const index = member.indexOf(separator);
    if (index === -1) return bestIndex;
    if (bestIndex === -1) return index;
    return Math.min(bestIndex, index);
  }, -1);

  if (splitIndex === -1) {
    return { name: member, details: "" };
  }

  return {
    name: member.slice(0, splitIndex).trim(),
    details: member.slice(splitIndex).trim(),
  };
};

const MemberGrid = ({ members }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
    {(Array.isArray(members) ? members : []).map((member) => {
      const { name, details } = splitMemberText(member);
      return (
        <li
          key={member}
          className="rounded-lg bg-gray-50 p-5 sm:p-6 text-base sm:text-lg text-gray-700 leading-relaxed shadow-sm"
        >
          <strong className="block text-blue-900 mb-2">{name}</strong>
          {details ? <span>{details}</span> : null}
        </li>
      );
    })}
  </ul>
);

const ScientificAdvisoryBoard = () => {
  const { t } = useI18n();
  useDocTitle(t("scientificAdvisoryBoard.docTitle"));
  const economicsMembers = t("scientificAdvisoryBoard.sections.sportsEconomics.members");
  const medicineMembers = t("scientificAdvisoryBoard.sections.sportsMedicine.members");

  return (
    <div className="bg-white py-12 sm:py-24 mt-40">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("scientificAdvisoryBoard.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-10">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">{t("scientificAdvisoryBoard.sections.sportsEconomics.title")}</h2>
            <MemberGrid members={economicsMembers} />
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">{t("scientificAdvisoryBoard.sections.sportsMedicine.title")}</h2>
            <MemberGrid members={medicineMembers} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScientificAdvisoryBoard;
