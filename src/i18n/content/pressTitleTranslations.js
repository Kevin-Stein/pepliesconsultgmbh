/**
 * Localized title overrides for /press article cards.
 * German keeps original source titles.
 */
const pressTitleTranslationsByLocale = {
  de: {},
  en: {
    "Berliner Tagesspiegel - Pyeong Chang 2018": "Berliner Tagesspiegel - Pyeong Chang 2018",
    "Socrates Fachmagazin Sponsoring": "Socrates Magazine Sponsoring",
    "Oberpfalzmedien Veröffentlichung": "Oberpfalzmedien Publication",
    "Fridericianerbote 2023": "Fridericianerbote 2023",
    "KON 37 2008 47 Highlights": "KON 37 2008 47 Highlights",
    "SKM C258 2009": "SKM C258 2009",
    "SKM C258 2009 (2)": "SKM C258 2009 (2)",
    "SKM C258 2009 (3)": "SKM C258 2009 (3)",
    "SKM C258 2009 (4)": "SKM C258 2009 (4)",
    "WESST 2022": "WESST 2022",
    "F2202102.031": "F2202102.031",
  },
  fr: {
    "Berliner Tagesspiegel - Pyeong Chang 2018": "Berliner Tagesspiegel - Pyeong Chang 2018",
    "Socrates Fachmagazin Sponsoring": "Magazine Socrates Sponsoring",
    "Oberpfalzmedien Veröffentlichung": "Publication Oberpfalzmedien",
    "Fridericianerbote 2023": "Fridericianerbote 2023",
    "KON 37 2008 47 Highlights": "KON 37 2008 47 Highlights",
    "SKM C258 2009": "SKM C258 2009",
    "SKM C258 2009 (2)": "SKM C258 2009 (2)",
    "SKM C258 2009 (3)": "SKM C258 2009 (3)",
    "SKM C258 2009 (4)": "SKM C258 2009 (4)",
    "WESST 2022": "WESST 2022",
    "F2202102.031": "F2202102.031",
  },
  es: {
    "Berliner Tagesspiegel - Pyeong Chang 2018": "Berliner Tagesspiegel - Pyeong Chang 2018",
    "Socrates Fachmagazin Sponsoring": "Revista Socrates Patrocinio",
    "Oberpfalzmedien Veröffentlichung": "Publicación de Oberpfalzmedien",
    "Fridericianerbote 2023": "Fridericianerbote 2023",
    "KON 37 2008 47 Highlights": "KON 37 2008 47 Highlights",
    "SKM C258 2009": "SKM C258 2009",
    "SKM C258 2009 (2)": "SKM C258 2009 (2)",
    "SKM C258 2009 (3)": "SKM C258 2009 (3)",
    "SKM C258 2009 (4)": "SKM C258 2009 (4)",
    "WESST 2022": "WESST 2022",
    "F2202102.031": "F2202102.031",
  },
}

export function getPressTitle(locale, title) {
  if (locale === "de") return title
  const map = pressTitleTranslationsByLocale[locale] || pressTitleTranslationsByLocale.en
  return map[title] || title
}
