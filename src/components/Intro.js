import React from "react";
import heroImg from "../images/athletes.svg";
import { Link } from "react-router-dom";

const Intro = ({ language }) => {
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
                {language === "de" ? "Über uns" : "About Us"}
              </h2>
              <div className="flex justify-center">
                <div className="w-8 sm:w-32 border-b-4 border-blue-900"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row py-4 sm:py-8 lg:text-left relative" data-aos="fade-up" style={{ opacity: 1 }}>
              <div
                className="flex-col my-2 sm:my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-2/3 lg:pr-40 px-2 sm:px-5 relative z-10 mx-auto"
                data-aos="zoom-in"
                data-aos-delay="500"
                style={{ opacity: 1 }}
              >
                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">
                    {language === "de"
                      ? 'Wir sind "Consultants of Choice" für nationale und internationale Athleten, Vereine, Verbände und Wirtschaftsunternehmen im Bereich des Sportmarketing und Sportsponsoring.'
                      : "We are the 'Consultants of Choice' for national and international athletes, clubs, associations, and businesses in the field of sports marketing and sports sponsorship."}
                  </p>
                </div>
                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">
                    {language === "de"
                      ? "Als Schwesterunternehmen der peplies consult - Marketing Consultants und der peplies consult - Executive Consultants sowie als Kooperationspartner weltweit führender sportökonomischer, sportrechtlicher und sportmedizinischer Universitätsfakultäten sind wir Praxis und Wissenschaft zugleich verpflichtet."
                      : "As a sister company of peplies consult - Marketing Consultants and peplies consult - Executive Consultants, and as a cooperation partner of leading global sports economics, sports law, and sports medicine university faculties, we are committed to both practice and science."}
                  </p>
                </div>

                <div>
                  <p className="my-2 sm:my-3 text-sm sm:text-xl text-gray-900 font-semibold">
                    {language === "de"
                      ? "Wir lassen uns messen an der Zufriedenheit unserer Mandanten und unserem Beitrag für Wirtschaft, Sport und Gesellschaft."
                      : "We measure ourselves by the satisfaction of our clients and our contribution to the economy, sports, and society."}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
                >
                  {language === "de" ? "Kontakt" : "Contact us"}
                  <svg
                    className="w-4 h-4 ml-1 group-hover: translate-x-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
