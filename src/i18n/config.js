/**
 * Central i18n configuration.
 *
 * To add a language:
 * 1. Create src/i18n/locales/<code>.js exporting the same nested object shape as de.js / en.js.
 * 2. Register it in src/i18n/locales/index.js (import + add to localeMessages).
 * 3. Add a label in LANGUAGE_OPTIONS in components/Navbar/LanguageSwitcher.js (optional: flag asset).
 * 4. For long copy (e.g. athlete/company services), extend src/i18n/content/* with the new locale keys.
 */

export const DEFAULT_LOCALE = "de";
export const STORAGE_KEY = "peplies.locale";

/** Browser / SEO: BCP 47 language tags */
export const HTML_LANG = {
  de: "de",
  en: "en",
  fr: "fr",
  es: "es",
};
