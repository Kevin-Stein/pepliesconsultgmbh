import React, { memo } from "react";
import img from "../images/running-man.svg";
import img2 from "../images/business-team.svg";

// Simple card component without any interactivity
const ServiceCard = memo(({ title, description, image, language }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 sm:p-8 group hover:shadow-3xl relative min-h-[150px] sm:min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <img alt="card img" className="w-full h-full object-cover" src={image} loading="lazy" />
      </div>
      <div className="relative z-10 m-2 sm:m-6 text-center text-sm sm:text-xl text-gray-600 font-semibold flex flex-col items-center justify-center">
        <h2 className="font-semibold my-2 sm:my-8 text-lg sm:text-2xl md:text-3xl text-center text-blue-900">
          {title}
        </h2>
        <p className="text-sm sm:text-xl text-gray-900 font-semibold">{description}</p>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

// Section header component
const SectionHeader = memo(({ title, subtitle, language }) => (
  <div className="my-4 sm:my-8 py-4 sm:py-8">
    <h2 className="my-2 sm:my-4 text-center text-2xl sm:text-3xl md:text-4xl text-blue-900 uppercase font-bold">
      {title}
    </h2>
    <div className="flex justify-center">
      <div className="w-16 sm:w-32 border-b-4 border-blue-900"></div>
    </div>
    <h2 className="mt-4 sm:mt-8 mx-6 sm:mx-12 text-center text-lg sm:text-xl md:text-3xl font-semibold text-blue-900">
      {subtitle}
    </h2>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const Services = memo(({ language }) => {
  const services = [
    {
      title: language === "de" ? "Leistungen für Athleten" : "Services for Athletes",
      description:
        language === "de"
          ? 'Für unsere Athletinnen und Athleten halten wir - auch unter Einbindung assoziierter Partner und Netzwerke - alle Maßnahmen einer ganzheitlichen Betreuung auf qualitativ höchstem Niveau vor ("18-Punkte-Programm"). Weitreichende internationale Referenzen bestehen vor allem in allen Bereichen des Wintersports (Ski Alpin, Biathlon, Skispringen, Nordische Kombination, Bob, Rodel) sowie innerhalb der Sportarten Tennis, Golf, Reiten und Leichtathletik.'
          : 'For our athletes, we provide - also with the involvement of associated partners and networks - all measures of holistic care at the highest qualitative level ("18-point program"). Far-reaching international references exist especially in all areas of winter sports (Alpine skiing, biathlon, ski jumping, Nordic combined, bobsleigh, luge) as well as within the sports of tennis, golf, equestrian and athletics.',
      image: img,
    },
    {
      title: language === "de" ? "Leistungen für Unternehmen" : "Services for Companies",
      description:
        language === "de"
          ? "Für Wirtschaftsunternehmen, die bereits Sportsponsoring betreiben, bieten wir Maßnahmen zur Analyse, Kontrolle und Optimierung ihrer Sponsoringkonzepte und der korrespondierenden Projekte sowie projektflankierende Maßnahmen an; für Wirtschaftsunternehmen, die den Eintritt in den Bereich des Sportsponsorings planen, bieten wir Marktforschung und Konzeptentwicklung an. Unsere Leistungen umfassen: Sportsponsoringkonzepte, Marktforschung & Controlling, projektflankierende Maßnahmen sowie Scouting und Akquisition von Sportlern."
          : "For companies already engaged in sports sponsorship, we offer measures for analyzing, controlling, and optimizing their sponsorship concepts and corresponding projects, as well as project-supporting measures; for companies planning to enter the field of sports sponsorship, we offer market research and concept development. Our services include: sports sponsorship concepts, market research & controlling, project-supporting measures, and scouting and acquisition of athletes.",
      image: img2,
    },
  ];

  return (
    <div id="services" className="bg-gray-100 pb-6 sm:pb-24 min-h-[400px] sm:min-h-[800px] flex items-center">
      <div className="container mx-auto px-2 sm:px-12">
        <section data-aos="zoom-in-down" style={{ opacity: 1 }}>
          <SectionHeader
            title={language === "de" ? "Leistungen" : "Services"}
            subtitle={language === "de" ? "Unsere Leistungen im Überblick." : "Our Services at a Glance."}
            language={language}
          />

          <div data-aos="fade-down" data-aos-delay="600" style={{ opacity: 1 }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-12 lg:gap-16">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} language={language} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

Services.displayName = "Services";

export default Services;
