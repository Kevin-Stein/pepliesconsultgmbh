import React from "react";
import heroImg from "../images/athletes.svg";
import { useContactModal } from "./ContactModalContext";
import { useI18n } from "../i18n/I18nContext";

const Intro = () => {
  const { openContact } = useContactModal();
  const { t } = useI18n();
  return (
    <div id="about" className="bg-white pb-6 sm:pb-24 min-h-[100px] sm:min-h-[200px] flex items-center">
      <div className="container mx-auto px-2 sm:px-12">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center opacity-20">
            <img alt="card img" className="w-full h-auto" src={heroImg} />
          </div>
          <div className="relative z-10">
            <div className="my-2 sm:my-8 py-2 sm:py-8">
              <h2 className="my-1 sm:my-4 text-center text-xl sm:text-3xl md:text-4xl text-blue-900 uppercase font-bold">
                {t("intro.title")}
              </h2>
              <div className="flex justify-center">
                <div className="w-8 sm:w-32 border-b-4 border-blue-900"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row py-4 sm:py-8 lg:text-left relative">
              <div
                className="flex-col my-2 sm:my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-2/3 lg:pr-40 px-2 sm:px-5 relative z-10 mx-auto"
               
               
               
              >
                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">{t("intro.p1")}</p>
                </div>
                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">{t("intro.p2")}</p>
                </div>

                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">{t("intro.p3")}</p>
                </div>
                <button
                  type="button"
                  onClick={openContact}
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border-0 cursor-pointer"
                >
                  {t("intro.contactCta")}
                  <svg
                    className="w-4 h-4 ml-1 group-hover: translate-x-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
