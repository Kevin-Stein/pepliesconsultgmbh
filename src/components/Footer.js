import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../App";

const Footer = ({ language }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <footer className="mt-auto">
      <div className="footer relative max-w-full mx-auto px-2 sm:px-6 border-t border-b py-4 sm:py-8">
        <div className="absolute inset-0 bg-gray-100"></div>
        {/* Top area: Blocks */}
        <div className="relative z-10 grid sm:grid-cols-12 gap-3 sm:gap-5 py-4 sm:py-8 md:py-12  lg:ml-11">
          {/* 1st block */}
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-4 sm:p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4">peplies consult</h3>
              <div className="text-sm sm:text-md font-medium text-gray-600">
                <h5>Stephan Peplies</h5>
                <p>Höhenstraße 12</p>
                <p>65321</p>
                <p>Heidenrod</p>
              </div>
            </div>
          </div>

          {/* 2nd block */}
          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-4 sm:ml-7 mx-auto">
            <h6 className="text-blue-900 text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              {language === "de" ? "LINKS" : "LINKS"}
            </h6>
            <ul className="text-sm sm:text-md">
              <li className="mb-1 sm:mb-2">
                <HashLink
                  smooth
                  to="#about"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {language === "de" ? "Über uns" : "About"}
                </HashLink>
              </li>
              <li className="mb-1 sm:mb-2">
                <HashLink
                  smooth
                  to="#services"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {language === "de" ? "Leistungen" : "Services"}
                </HashLink>
              </li>
              <li className="mb-1 sm:mb-2">
                <HashLink
                  to="#"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {language === "de" ? "Kontakt" : "Contact"}
                </HashLink>
              </li>
              <li className="mb-1 sm:mb-2">
                <Link
                  to="/legal-notice"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {language === "de" ? "Impressum" : "Legal Notice"}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
            <h6 className="text-blue-900 text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              {language === "de" ? "LEISTUNGEN" : "SERVICES"}
            </h6>
            <ul className="text-sm sm:text-md">
              {isAuthenticated && (
                <li className="mb-1 sm:mb-2">
                  <Link
                    to="/services/athletes"
                    className="text-blue-900 hover:text-gray-900 hover:underline transition duration-250 ease-in-out"
                  >
                    {language === "de" ? "Leistungen für Athleten" : "Services for Athletes"}
                  </Link>
                </li>
              )}
              <li className="mb-1 sm:mb-2">
                <Link
                  to="/services/companies"
                  className="text-blue-900 hover:text-gray-900 hover:underline transition duration-250 ease-in-out"
                >
                  {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
            <div className="text-lg sm:text-xl mb-1">{language === "de" ? "Social Media" : "Social Media"}</div>
            <div className="text-sm sm:text-md font-medium mb-4 sm:mb-6">
              {language === "de" ? "Folge uns" : "Follow us"}
            </div>
            <div className="mx-auto text-center mt-2">
              <ul className="flex justify-center mb-2 sm:mb-4">
                <li>
                  <Link
                    to="#"
                    className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                  </Link>
                </li>
                <li className="ml-3 sm:ml-4">
                  <Link
                    to="#"
                    className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-2 sm:px-4">
          <div className="w-full md:w-4/12 px-2 sm:px-4 mx-auto text-center py-1 sm:py-2">
            <div className="text-xs sm:text-sm text-gray-700 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <HashLink to="#" className="hover:text-gray-900">
                peplies consult - Sports Marketing Consultants
              </HashLink>
              . {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
