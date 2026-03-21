import de from "./de";
import en from "./en";
import fr from "./fr";
import es from "./es";

/** Register new languages here after adding a locale file. */
export const localeMessages = { de, en, fr, es };

export const supportedLocaleCodes = Object.freeze(Object.keys(localeMessages));
