import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import { supportedLocaleCodes } from "../../i18n/locales";

/**
 * Dropdown to switch UI language. Registered codes come from src/i18n/locales/index.js.
 */
const LanguageSwitcher = ({ className = "", id = "site-language" }) => {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className={`inline-flex items-center gap-2 ${className}`} htmlFor={id}>
      <span className="sr-only">{t("language.label")}</span>
      <select
        id={id}
        className="text-sm font-semibold text-gray-600 border border-gray-300 rounded-md px-2 py-1 bg-white hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 cursor-pointer max-w-[9rem]"
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        aria-label={t("language.label")}
      >
        {supportedLocaleCodes.map((code) => (
          <option key={code} value={code}>
            {t(`language.names.${code}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSwitcher;
