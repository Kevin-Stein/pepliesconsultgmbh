import React, { useEffect, useState } from "react";
import { useDocTitle } from "../components/CustomHook";
import { getAthletes } from "../lib/athletes";
import placeholderPortrait from "../images/athletes/portrait_placeholder.jpg";
import { useI18n } from "../i18n/I18nContext";

const getLastAchievements = (athlete, limit = 5) => {
  const list = athlete.achievements || [];
  return list.slice(-limit);
};

const AchievementsPanel = ({ athlete, t }) => {
  const items = getLastAchievements(athlete, 5);
  return (
    <>
      <h3 className="text-sm font-bold text-blue-900 mb-2 border-b border-blue-900/25 pb-2 shrink-0">{t("hallOfFame.achievementsHeading")}</h3>
      {items.length === 0 ? (
        <p className="text-sm text-gray-600">{t("hallOfFame.noAchievements")}</p>
      ) : (
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside leading-snug">
          {items.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      )}
    </>
  );
};

function usePrefersHover() {
  const [prefersHover, setPrefersHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const update = () => setPrefersHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return prefersHover;
}

const HallOfFameFlipCard = ({ athlete, t }) => {
  const prefersHover = usePrefersHover();
  const [touchFlipped, setTouchFlipped] = useState(false);
  const isStefanEdbergCard = athlete.firstName === "Tennis Academy" && athlete.lastName === "Stefan Edberg";

  const flipTransform = [
    "relative w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d]",
    prefersHover ? "group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]" : "",
    !prefersHover && touchFlipped ? "[transform:rotateY(180deg)]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="group w-full [perspective:1400px] outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 rounded-lg"
      tabIndex={0}
      aria-label={`${athlete.firstName} ${athlete.lastName}. ${t("hallOfFame.flipHint")}`}
      onClick={() => {
        if (!prefersHover) setTouchFlipped((f) => !f);
      }}
      onKeyDown={(e) => {
        if (!prefersHover && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setTouchFlipped((f) => !f);
        }
      }}
      {...(!prefersHover ? { role: "button", "aria-pressed": touchFlipped } : {})}
    >
      <div
        className={`card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 ease-out group-hover:shadow-lg ${
          prefersHover ? "" : "touch-manipulation"
        }`}
      >
        <div className={flipTransform}>
          {/* Front: same layout as Athletes.js (flow height defines flip area) */}
          <div className="relative w-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-white">
            <img
              src={athlete.portraitImageURL || placeholderPortrait}
              alt={`${athlete.firstName} ${athlete.lastName}`}
              className="aspect-[3/4] w-full object-cover"
              style={isStefanEdbergCard ? { objectPosition: "25% center" } : undefined}
            />
            <div className="p-4 mt-3">
              <h2 className="text-xl font-bold">
                {athlete.firstName} {athlete.lastName}
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-1 text-center">{t("hallOfFame.flipHint")}</p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex flex-col overflow-hidden p-3 sm:p-4">
            <div className="mb-2 shrink-0 text-center border-b border-gray-100 pb-2">
              <p className="text-sm sm:text-base font-bold text-blue-900">
                {athlete.firstName} {athlete.lastName}
              </p>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5">
              <AchievementsPanel athlete={athlete} t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HallOfFame = () => {
  const { locale, t } = useI18n();
  useDocTitle(t("hallOfFame.docTitle"));

  const athletes = getAthletes(locale);
  const formerAthletes = athletes.filter((athlete) => athlete.isFormer);
  const sortedFormerAthletes = [...formerAthletes].sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <div className="bg-white py-12 sm:py-24 mt-20 lg:mt-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{t("hallOfFame.title")}</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sortedFormerAthletes.map((athlete) => (
            <HallOfFameFlipCard key={`${athlete.firstName}-${athlete.lastName}`} athlete={athlete} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
