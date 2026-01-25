import React from "react";
import { useDocTitle } from "../components/CustomHook";

const CompanyServices = ({ language }) => {
  useDocTitle("peplies consult - Services for Companies");

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-900">
          {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
        </h1>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-blue-900"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            {language === "de" ? (
              <>
                Für Wirtschaftsunternehmen, die bereits Sportsponsoring betreiben, bieten wir Maßnahmen zur Analyse,
                Kontrolle und Optimierung ihrer Sponsoringkonzepte und der korrespondierenden Projekte sowie
                projektflankierende Maßnahmen an; für Wirtschaftsunternehmen, die den Eintritt in den Bereich des
                Sportsponsorings planen, bieten wir Marktforschung und Konzeptentwicklung an.
              </>
            ) : (
              <>
                For companies already engaged in sports sponsorship, we offer measures for analyzing, controlling, and
                optimizing their sponsorship concepts and corresponding projects, as well as project-supporting
                measures; for companies planning to enter the field of sports sponsorship, we offer market research and
                concept development.
              </>
            )}
          </p>

          <div className="space-y-8">
            {/* Sportsponsoringkonzepte */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                {language === "de" ? "Sportsponsoringkonzepte" : "Sports Sponsorship Concepts"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {language === "de" ? (
                  <>
                    Entwicklung von Sportsponsoringkonzepten auf der Grundlage von Marktforschung und zur Ansprache von
                    Zielgruppen, Beratung beim Erwerb von Sportsponsoringrechten
                  </>
                ) : (
                  <>
                    Development of sports sponsorship concepts based on market research and targeting specific audiences,
                    consulting on the acquisition of sports sponsorship rights
                  </>
                )}
              </p>
            </div>

            {/* Marktforschung, Controlling, Audits und SWOT-Analysen */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                {language === "de"
                  ? "Marktforschung, Controlling, Audits und SWOT-Analysen bei Sportsponsoringprojekten"
                  : "Market Research, Controlling, Audits and SWOT Analyses for Sports Sponsorship Projects"}
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed space-y-2">
                {language === "de" ? (
                  <>
                    <li>TV-Quoten, TV-Seherstrukturanalysen, Medien- und Zuschaueranalysen</li>
                    <li>TKP- und Werbewert- und Werbeäquivalenzwertberechnungen</li>
                    <li>Overnight-Analysen, Pre-Event-Analysen, Zielgruppenanalysen</li>
                    <li>Printmedien- und Internetanalysen, TV-Programmüberwachungen</li>
                    <li>"label-on-screen-Messungen", Werbebotschaftsanalysen</li>
                    <li>Visibilitätsoptimierung bei Werbeflächen und Logos</li>
                    <li>PR-Clipping und Alerting, Imageanalysen</li>
                    <li>Optimierung von Sponsoringinstrumenten</li>
                    <li>Event-Impact-Analysen, Cross-Media-Research</li>
                    <li>Fan-Feedback, Brandtracking</li>
                  </>
                ) : (
                  <>
                    <li>TV ratings, TV viewer structure analyses, media and audience analyses</li>
                    <li>CPM and advertising value and advertising equivalence value calculations</li>
                    <li>Overnight analyses, pre-event analyses, target group analyses</li>
                    <li>Print media and internet analyses, TV program monitoring</li>
                    <li>"Label-on-screen measurements", advertising message analyses</li>
                    <li>Visibility optimization for advertising spaces and logos</li>
                    <li>PR clipping and alerting, image analyses</li>
                    <li>Optimization of sponsorship instruments</li>
                    <li>Event impact analyses, cross-media research</li>
                    <li>Fan feedback, brand tracking</li>
                  </>
                )}
              </ul>
            </div>

            {/* Sportsponsoringflankierende Maßnahmen */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                {language === "de"
                  ? "Sportsponsoringflankierende Maßnahmen"
                  : "Sports Sponsorship Supporting Measures"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                {language === "de" ? (
                  <>
                    Projektflankierende PR mit Generierung von Botschaften, zielgruppenspezifischer Mediensegmentierung,
                    Entwicklung von Formaten und Inhalten (Reportagen, Interviews, Kolumnen), Durchführung der
                    Redaktionsansprachen und Projekt-Controlling; Planung und Durchführung von projektflankierenden
                    Events und Incentives, Key-Speaker-Vermittlung bezogen auf Persönlichkeiten des Sports und der
                    Sportökonomie
                  </>
                ) : (
                  <>
                    Project-supporting PR with message generation, target group-specific media segmentation, development
                    of formats and content (reports, interviews, columns), conducting editorial approaches and project
                    controlling; planning and execution of project-supporting events and incentives, key speaker
                    mediation related to personalities in sports and sports economics
                  </>
                )}
              </p>
            </div>

            {/* Scouting und Akquisition */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                {language === "de"
                  ? "Scouting und Akquisition von nationalen/internationalen Sportlern für Sponsoringkonzepte"
                  : "Scouting and Acquisition of National/International Athletes for Sponsorship Concepts"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {language === "de" ? (
                  <>
                    Identifikation von Sportlern nach Profilanforderung, Anbahnungsgespräche, Vertragsverhandlungen,
                    Preisberatung, Betreuung
                  </>
                ) : (
                  <>
                    Identification of athletes according to profile requirements, initial discussions, contract
                    negotiations, price consulting, support
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyServices;
