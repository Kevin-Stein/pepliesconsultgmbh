import React, { memo } from "react";
import img from "../images/running-man.svg";
import img2 from "../images/business-team.svg";
import { useI18n } from "../i18n/I18nContext";

const ServiceCard = memo(({ title, description, image }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 sm:p-8 group hover:shadow-3xl relative min-h-[150px] sm:min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <img alt="card img" className="w-full h-full object-cover" src={image} loading="lazy" />
      </div>
      <div className="relative z-10 m-2 sm:m-6 text-center text-sm sm:text-xl text-gray-600 font-semibold flex flex-col items-center justify-center">
        <h2 className="font-semibold my-2 sm:my-8 text-lg sm:text-2xl md:text-3xl text-center text-blue-900">{title}</h2>
        <p className="text-sm sm:text-xl text-gray-900 font-semibold">{description}</p>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

const SectionHeader = memo(({ title, subtitle }) => (
  <div className="my-4 sm:my-8 py-4 sm:py-8">
    <h2 className="my-2 sm:my-4 text-center text-2xl sm:text-3xl md:text-4xl text-blue-900 uppercase font-bold">{title}</h2>
    <div className="flex justify-center">
      <div className="w-16 sm:w-32 border-b-4 border-blue-900"></div>
    </div>
    <h2 className="mt-4 sm:mt-8 mx-6 sm:mx-12 text-center text-lg sm:text-xl md:text-3xl font-semibold text-blue-900">{subtitle}</h2>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const Services = memo(() => {
  const { t } = useI18n();
  const services = [
    {
      title: t("servicesSection.athletesTitle"),
      description: t("servicesSection.athletesBody"),
      image: img,
    },
    {
      title: t("servicesSection.companiesTitle"),
      description: t("servicesSection.companiesBody"),
      image: img2,
    },
  ];

  return (
    <div id="services" className="bg-gray-100 pb-6 sm:pb-24 min-h-[400px] sm:min-h-[800px] flex items-center">
      <div className="container mx-auto px-2 sm:px-12">
        <section data-aos="zoom-in-down" style={{ opacity: 1 }}>
          <SectionHeader title={t("servicesSection.title")} subtitle={t("servicesSection.subtitle")} />

          <div data-aos="fade-down" data-aos-delay="600" style={{ opacity: 1 }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-12 lg:gap-16">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
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
