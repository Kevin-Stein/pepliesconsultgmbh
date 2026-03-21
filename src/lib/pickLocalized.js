/**
 * Resolve a per-locale record (e.g. { de, en, fr, es }) with sensible fallbacks.
 * @param {Record<string, string> | string | null | undefined} record
 * @param {string} locale
 * @param {string[]} [fallbackChain]
 */
export function pickLocalized(record, locale, fallbackChain = ["en", "de"]) {
  if (record == null) return "";
  if (typeof record === "string") return record;
  if (record[locale]) return record[locale];
  for (const f of fallbackChain) {
    if (record[f]) return record[f];
  }
  const first = Object.values(record).find((v) => typeof v === "string" && v.length > 0);
  return first || "";
}
