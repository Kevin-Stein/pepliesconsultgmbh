import { useDocTitle } from "../components/CustomHook";

const Contact = ({ language }) => {
  useDocTitle("peplies consult - Send us a message");
  return (
    <div id="contact" className="h-[50vh] flex items-center justify-center bg-white mt-20">
      <div className="w-full max-w-2xl px-4 sm:px-8 py-6 sm:py-12 mx-6 bg-blue-900 rounded-2xl">
        <div className="flex flex-col items-center text-white">
          <div className="flex flex-col items-center my-2 sm:my-4 w-full">
            <div className="flex items-center justify-center mb-2 sm:mb-4">
              <i className="fas fa-map-marker-alt text-xl sm:text-2xl mr-3 sm:mr-4" />
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  {language === "de" ? "Büro Adresse" : "Office Address"}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">Höhenstraße 12</p>
                <p className="text-sm sm:text-base text-gray-300">65321 Heidenrod</p>
                <p className="text-sm sm:text-base text-gray-300">Germany</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-2 sm:my-4 w-full">
            <div className="flex items-center justify-center mb-2 sm:mb-4">
              <i className="fas fa-phone-alt text-xl sm:text-2xl mr-3 sm:mr-4" />
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  {language === "de" ? "Rufen Sie uns an" : "Call Us"}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">Tel: +49 (0) </p>
              </div>
            </div>

            <div className="flex items-center justify-center mt-2 sm:mt-4">
              <i className="fas fa-envelope text-xl sm:text-2xl mr-3 sm:mr-4" />
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  {language === "de" ? "Senden Sie eine E-Mail" : "Send an E-mail"}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">peplies@pepliesconsult.de</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 sm:space-x-4 mt-2 sm:mt-4">
            <a
              href="https://www.facebook.com/ENLIGHTENEERING/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full flex items-center justify-center pb-1 bg-white h-8 w-8 sm:h-10 sm:w-10 text-blue-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" className="fill-current">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/enlighteneering-inc-"
              target="_blank"
              rel="noreferrer"
              className="rounded-full flex items-center justify-center pb-1 bg-white h-8 w-8 sm:h-10 sm:w-10 text-blue-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" className="fill-current">
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
