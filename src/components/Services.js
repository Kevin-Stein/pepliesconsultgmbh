import React from "react";
import img from "../images/running-man.svg";
import img2 from "../images/business-team.svg";
import { Link } from "react-router-dom";

const Services = ({ language }) => {
  return (
    <div id="services" className="bg-gray-100 py-12 sm:py-24">
      <section data-aos="zoom-in-down">
        <div className="my-4 sm:my-8 py-4 sm:py-8">
          <h2 className="my-2 sm:my-4 text-center text-2xl sm:text-3xl md:text-4xl text-blue-900 uppercase font-bold">
            {language === "de" ? "Leistungen" : "Services"}
          </h2>

          <div className="flex justify-center">
            <div className="w-16 sm:w-32 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 sm:mt-8 mx-6 sm:mx-12 text-center text-lg sm:text-xl md:text-3xl font-semibold text-blue-900">
            {language === "de" ? "Unsere Leistungen im Überblick." : "Our Services at a Glance."}
          </h2>
        </div>

        <div className="px-2 sm:px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">
            <Link to="/services/athletes" className="cursor-pointer">
              <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 sm:p-6 group hover:shadow-3xl relative min-h-[300px] sm:min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <img alt="card img" className="w-full h-full object-cover" src={img} />
                </div>
                <div className="relative z-10 m-2 sm:m-4 text-center text-base md:text-xl text-gray-600 font-semibold flex flex-col items-center justify-center">
                  <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl md:text-3xl text-center">
                    {language === "de" ? "Leistungen für Athleten 🔒" : "Services for Athletes 🔒"}
                  </h2>
                  <p className="text-base md:text-xl text-gray-600 font-semibold">
                    {language === "de"
                      ? 'Für unsere Athletinnen und Athleten halten wir - auch unter Einbindung assoziierter Partner und Netzwerke - alle Maßnahmen einer ganzheitlichen Betreuung auf qualitativ höchstem Niveau vor ("18-Punkte-Programm"). Weitreichende internationale Referenzen bestehen vor allem in allen Bereichen des Wintersports (Ski Alpin, Biathlon, Skispringen, Nordische Kombination, Bob, Rodel) sowie innerhalb der Sportarten Tennis, Golf, Reiten und Leichtathletik.'
                      : 'For our athletes, we provide - also with the involvement of associated partners and networks - all measures of holistic care at the highest qualitative level ("18-point program"). Far-reaching international references exist especially in all areas of winter sports (Alpine skiing, biathlon, ski jumping, Nordic combined, bobsleigh, luge) as well as within the sports of tennis, golf, equestrian and athletics.'}
                  </p>
                </div>
              </div>
            </Link>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 sm:p-6 group relative min-h-[300px] sm:min-h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <img alt="card img" className="w-full h-full object-cover" src={img2} />
              </div>
              <div className="relative z-10 m-2 sm:m-4 text-center text-base md:text-xl text-gray-600 font-semibold flex flex-col items-center justify-center">
                <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl md:text-3xl text-center">
                  {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
                </h2>
                <p className="text-base md:text-xl text-gray-600 font-semibold">
                  {language === "de"
                    ? "Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum ist seit den 1500er Jahren der Standard-Dummy-Text der Branche."
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
