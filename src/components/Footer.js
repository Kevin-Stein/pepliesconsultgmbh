import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../App";
import { useContactModal } from "./ContactModalContext";
import { useI18n } from "../i18n/I18nContext";

const scrollAboutIntoView = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: "smooth",
  });
};

const Footer = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { openContact } = useContactModal();
  const { t } = useI18n();

  return (
    <footer className="mt-auto">
      <div className="footer relative max-w-full mx-auto px-2 sm:px-6 border-t border-b py-4 sm:py-8">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative z-10 grid sm:grid-cols-12 gap-3 sm:gap-5 py-4 sm:py-8 md:py-12  lg:ml-11">
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-4 sm:p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4">{t("footer.companyName")}</h3>
              <div className="text-sm sm:text-md font-medium text-gray-600">
                <p>{t("footer.companyStreet")}</p>
                <p>{t("footer.companyPostalCode")}</p>
                <p>{t("footer.companyCity")}</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-4 sm:ml-7 mx-auto">
            <h6 className="text-blue-900 text-lg sm:text-xl font-bold mb-2 sm:mb-4">{t("footer.linksHeading")}</h6>
            <ul className="text-sm sm:text-md">
              <li className="mb-1 sm:mb-2">
                <HashLink
                  to="/#about"
                  scroll={scrollAboutIntoView}
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {t("footer.about")}
                </HashLink>
              </li>
              {isAuthenticated && (
                <>
                  <li className="mb-1 sm:mb-2">
                    <HashLink
                      to="/#services"
                      scroll={scrollAboutIntoView}
                      className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      {t("footer.services")}
                    </HashLink>
                  </li>
                  <li className="mb-1 sm:mb-2">
                    <button
                      type="button"
                      onClick={openContact}
                      className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out bg-transparent border-0 p-0 cursor-pointer font-inherit text-left w-full sm:w-auto"
                    >
                      {t("footer.contact")}
                    </button>
                  </li>
                </>
              )}
              <li className="mb-1 sm:mb-2">
                <Link
                  to="/legal-notice"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {t("footer.legal")}
                </Link>
              </li>
              <li className="mb-1 sm:mb-2">
                <Link
                  to="/privacy"
                  className="text-blue-900 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {isAuthenticated && (
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-blue-900 text-lg sm:text-xl font-bold mb-2 sm:mb-4">{t("footer.servicesBlockHeading")}</h6>
              <ul className="text-sm sm:text-md">
                <li className="mb-1 sm:mb-2">
                  <Link
                    to="/services/athletes"
                    className="text-blue-900 hover:text-gray-900 hover:underline transition duration-250 ease-in-out"
                  >
                    {t("footer.servicesAthletes")}
                  </Link>
                </li>
                <li className="mb-1 sm:mb-2">
                  <Link
                    to="/services/companies"
                    className="text-blue-900 hover:text-gray-900 hover:underline transition duration-250 ease-in-out"
                  >
                    {t("footer.servicesCompanies")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-2 sm:px-4">
          <div className="w-full md:w-4/12 px-2 sm:px-4 mx-auto text-center py-1 sm:py-2">
            <div className="text-xs sm:text-sm text-gray-700 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <HashLink to="#" className="hover:text-gray-900">
                {t("footer.copyrightBrand")}
              </HashLink>
              . {t("footer.rights")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
