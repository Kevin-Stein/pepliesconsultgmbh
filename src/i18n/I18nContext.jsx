import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, HTML_LANG, STORAGE_KEY } from "./config";
import { localeMessages, supportedLocaleCodes } from "./locales";

const I18nContext = createContext(null);

function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && localeMessages[stored]) return stored;
    } catch {
      /* ignore */
    }
    return DEFAULT_LOCALE;
  });

  useEffect(() => {
    const tag = HTML_LANG[locale] || locale;
    document.documentElement.lang = tag;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!localeMessages[next]) return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (path) => {
      const dict = localeMessages[locale];
      let v = getByPath(dict, path);
      if (v !== undefined && v !== null && v !== "") return v;
      v = getByPath(localeMessages.en, path);
      if (v !== undefined && v !== null && v !== "") return v;
      v = getByPath(localeMessages.de, path);
      if (v !== undefined && v !== null && v !== "") return v;
      return path;
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      supportedLocales: supportedLocaleCodes,
    }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
