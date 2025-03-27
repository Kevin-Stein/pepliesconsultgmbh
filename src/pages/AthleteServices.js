import React, { useState } from "react";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";

const AthleteServices = ({ language }) => {
  useDocTitle("peplies consult - Services for Athletes");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "pepliesgmbh") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError(language === "de" ? "Falsches Passwort" : "Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
              {language === "de" ? "Leistungen für Athleten" : "Services for Athletes"}
            </h2>
            <p className="text-gray-600 text-center mb-6">
              {language === "de" ? "Dieser Bereich ist Passwort geschützt" : "This area is password protected"}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {language === "de" ? "Passwort" : "Password"}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {language === "de" ? "Einloggen" : "Login"}
              </button>
            </form>
          </div>
        </div>
        <Footer language={language} />
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 my-20 lg:my-40">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          {language === "de" ? "Leistungen für Athleten" : "Services for Athletes"}
        </h1>
        <p className="text-lg text-center mb-12">
          {language === "de"
            ? 'Für unsere Athletinnen und Athleten halten wir - auch unter Einbindung assoziierter Partner und Netzwerke - alle Maßnahmen einer ganzheitlichen Betreuung auf qualitativ höchstem Niveau vor ("18-Punkte-Programm"). Weitreichende internationale Referenzen bestehen vor allem in allen Bereichen des Wintersports (Ski Alpin, Biathlon, Skispringen, Nordische Kombination, Bob, Rodel) sowie innerhalb der Sportarten Tennis, Golf, Reiten und Leichtathletik.'
            : 'For our athletes, we provide all measures of holistic care at the highest quality level ("18-point program") - also in cooperation with associated partners and networks. Extensive international references exist primarily in all areas of winter sports (Alpine skiing, biathlon, ski jumping, Nordic combined, bobsleigh, luge) as well as in tennis, golf, equestrian sports, and athletics.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Rechtliche Beratung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "1. Rechtliche Beratung" : "1. Legal Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Mit assoziierten internationalen und nationalen Kanzleien in den für die Athletenbetreuung und die Sportökonomie bedeutsamen Feldern Vertragsrecht, Versicherungsrecht, Medienrecht, Markenrecht/Markenanmeldung, Gesellschafts- und Gewerberecht, Lizenzrecht"
                : "With associated international and national law firms in the fields relevant for athlete care and sports economics: contract law, insurance law, media law, trademark law/trademark registration, corporate and commercial law, license law"}
            </p>
          </div>

          {/* 2. Steuerrechtliche Beratung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "2. Steuerrechtliche Beratung" : "2. Tax Law Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Mit assoziierten und auf Athletenbetreuung spezialisierten Steuerberatern, Fachanwälten für Steuerrecht und Wirtschaftsprüfern"
                : "With associated tax consultants, specialized lawyers for tax law, and auditors specialized in athlete care"}
            </p>
          </div>

          {/* 3. Versicherungsrechtliche Beratung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "3. Versicherungsrechtliche Beratung" : "3. Insurance Law Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Mit Fachanwälten für Versicherungsrecht und unabhängigen Versicherungsmaklern"
                : "With specialized lawyers for insurance law and independent insurance brokers"}
            </p>
          </div>

          {/* 4. Vermarktung/Akquisition */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "4. Vermarktung/Akquisition" : "4. Marketing/Acquisition"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Aller vermarktungsfähigen Rechte der Athletinnen und Athleten (Werbeflächensponsoring, TV-Spots, Print- und Plakatkampagnen, Internet, PR, Social Media, Ausrüsterverträge, Beraterverträge) einschließlich Vertragsverhandlungen und Vertragsabschlüssen"
                : "All marketable rights of athletes (advertising space sponsorship, TV spots, print and poster campaigns, internet, PR, social media, equipment contracts, consultant contracts) including contract negotiations and conclusions"}
            </p>
          </div>

          {/* 5. Vermarktungsunterstützende Marktforschung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de"
                ? "5. Vermarktungsunterstützende Marktforschung"
                : "5. Marketing-Supporting Market Research"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "TV-Spot-Monitoring und TV-Spot-Screening, Kampagnen-Audits bei Unternehmen, Affinitäts-Analysen Sportart/Sportler-Unternehmen/Produkt"
                : "TV spot monitoring and screening, campaign audits at companies, affinity analyses sport/athlete-company/product"}
            </p>
          </div>

          {/* 6. Sportökonomische Marktforschung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "6. Sportökonomische Marktforschung" : "6. Sports Economic Market Research"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Quantitative und qualitative Marktforschung für Athletinnen und Athleten, Bekanntheitsgrad und Beliebtheitswerte, Label-on-screen-Messungen, Werbeäquivalenzwerte, Sponsoringcontrolling, Balance-Scorecard für Sponsoringprojekte"
                : "Quantitative and qualitative market research for athletes, awareness and popularity values, label-on-screen measurements, advertising equivalence values, sponsorship controlling, balance scorecard for sponsorship projects"}
            </p>
          </div>

          {/* 7. Sportwissenschaftliches Netzwerk */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "7. Sportwissenschaftliches Netzwerk" : "7. Sports Science Network"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Mit Stützpunkten (universitäre Lehrstühle, Kliniken, Ärzte) in den Bereichen Innere Medizin, Chirurgie, Augenheilkunde, Ernährungswissenschaften, Sportpsychologie, Orthopädie, komplementäre Sportmedizin wie z.B. Kineosologie, Manualtherapie und mit Maßnahmen komplexer Regeneration"
                : "With support points (university chairs, clinics, doctors) in internal medicine, surgery, ophthalmology, nutrition science, sports psychology, orthopedics, complementary sports medicine such as kinesiology, manual therapy and with complex regeneration measures"}
            </p>
          </div>

          {/* 8. Strategische Presse- und Öffentlichkeitsarbeit */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de"
                ? "8. Strategische Presse- und Öffentlichkeitsarbeit"
                : "8. Strategic Press and Public Relations"}
            </h3>
            <p className="text-gray-600">
              {language === "de" ? "Positionierung, Imageaufbau" : "Positioning, image building"}
            </p>
          </div>

          {/* 9. Operative Presse- und Öffentlichkeitsarbeit */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de"
                ? "9. Operative Presse- und Öffentlichkeitsarbeit"
                : "9. Operational Press and Public Relations"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Für Athletinnen und Athleten (Reportagen/Interviews/Kolumnen/Medienprojekte, Pressebetreuung, Pressedienste) sowie für deren Sponsoren und Sponsorenprojekte mit einem aus rund 700 Print- und online Redaktionen bestehenden nationalen und internationalen PR-Netzwerk"
                : "For athletes (reports/interviews/columns/media projects, press support, press services) as well as for their sponsors and sponsor projects with a national and international PR network consisting of around 700 print and online editorial offices"}
            </p>
          </div>

          {/* 10. Medienberatung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "10. Medienberatung" : "10. Media Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Interviewtraining, Webdesign, Social Media-Beratung"
                : "Interview training, web design, social media consulting"}
            </p>
          </div>

          {/* 11. Publikation von Sportbiografien */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "11. Publikation von Sportbiografien" : "11. Publication of Sports Biographies"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Autorenschaft, Lektorat Verlag, Druck, Vertrieb"
                : "Authorship, publishing editing, printing, distribution"}
            </p>
          </div>

          {/* 12. Merchandising */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "12. Merchandising" : "12. Merchandising"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Entwicklung von Merchandisingkonzepten (Produkt, Preis, Vertrieb, Kommunikation) für Athleten, Implementierung von online-shops bei Athletenhomepages"
                : "Development of merchandising concepts (product, price, distribution, communication) for athletes, implementation of online shops on athlete homepages"}
            </p>
          </div>

          {/* 13. Finanzlogistik */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "13. Finanzlogistik" : "13. Financial Logistics"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Gewerbeanmeldung- und beratung, Rechnungswesen und Fakturierungen, Fälligkeiten- und Fristenkontrollen, Buchhaltung"
                : "Business registration and consulting, accounting and invoicing, due date and deadline controls, bookkeeping"}
            </p>
          </div>

          {/* 14. Autogrammkartenservice */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "14. Autogrammkartenservice" : "14. Autograph Card Service"}
            </h3>
            <p className="text-gray-600">
              {language === "de" ? "Design, Druck, Versendung/Fanservice" : "Design, printing, shipping/fan service"}
            </p>
          </div>

          {/* 15. Schulische und Studentenbetreuung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "15. Schulische und Studentenbetreuung" : "15. School and Student Support"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "In den Fächern BWL, VWL, Rechtswissenschaften, Sportökonomie (fachspezifische Unterstützung, Abiturvorbereitungen, Beratung zu Bachelor- und Masterarbeiten)"
                : "In the subjects of business administration, economics, law, sports economics (subject-specific support, Abitur preparation, consultation for bachelor and master theses)"}
            </p>
          </div>

          {/* 16. Persönlichkeitsentwicklung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "16. Persönlichkeitsentwicklung" : "16. Personality Development"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? 'Potenzialanalysen, wissenschaftliche Tests zu Persönlichkeitsmerkmalen, "Life Culture"'
                : 'Potential analyses, scientific tests for personality traits, "Life Culture"'}
            </p>
          </div>

          {/* 17. Allgemeine Organisation/Beratung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "17. Allgemeine Organisation/Beratung" : "17. General Organization/Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Übernahme allgemeiner Planungen und Maßnahmen zu wirtschaftlichen/beruflichen Fragestellungen"
                : "Taking over general planning and measures for economic/professional issues"}
            </p>
          </div>

          {/* 18. Nachkarriereberatung */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              {language === "de" ? "18. Nachkarriereberatung" : "18. Post-Career Consulting"}
            </h3>
            <p className="text-gray-600">
              {language === "de"
                ? "Berufs- und Studienberatung, Personalberatung, Stellenvermittlung"
                : "Career and study counseling, personnel consulting, job placement"}
            </p>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default AthleteServices;
