import React from "react";
import img from "../images/running-man.svg";
import img2 from "../images/business-team.svg";
import { Link } from "react-router-dom";

const Services = ({ language }) => {
  return (
    <div id="services" className="bg-gray-100 py-12 ">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-2xl md:text-3xl text-blue-900 uppercase font-bold">
            {language === "de" ? "Leistungen" : "Services"}
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-lg md:text-2xl font-semibold text-blue-900">
            {language === "de" ? "Unsere Leistungen im Überblick." : "Our Services at a Glance."}
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
            <Link to="/services/athletes" className="cursor-pointer">
              <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group hover:shadow-3xl">
                <div className="m-2 text-justify text-sm justify-items-center">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img}
                  />
                  <h2 className="font-semibold my-4 text-xl md:text-2xl text-center">
                    {language === "de" ? "Leistungen für Athleten 🔒" : "Services for Athletes 🔒"}
                  </h2>
                  <p className="text-sm md:text-md font-medium">
                    {language === "de"
                      ? 'Für unsere Athletinnen und Athleten halten wir - auch unter Einbindung assoziierter Partner und Netzwerke - alle Maßnahmen einer ganzheitlichen Betreuung auf qualitativ höchstem Niveau vor ("18-Punkte-Programm"). Weitreichende internationale Referenzen bestehen vor allem in allen Bereichen des Wintersports (Ski Alpin, Biathlon, Skispringen, Nordische Kombination, Bob, Rodel) sowie innerhalb der Sportarten Tennis, Golf, Reiten und Leichtathletik.'
                      : 'For our athletes, we provide - also with the involvement of associated partners and networks - all measures of holistic care at the highest qualitative level ("18-point program"). Far-reaching international references exist especially in all areas of winter sports (Alpine skiing, biathlon, ski jumping, Nordic combined, bobsleigh, luge) as well as within the sports of tennis, golf, equestrian and athletics.'}
                  </p>
                </div>
              </div>
            </Link>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm justify-items-center">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-xl md:text-2xl text-center">
                  {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
                </h2>
                <p className="text-sm md:text-md font-medium">
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
