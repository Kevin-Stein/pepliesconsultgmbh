export const COOKIE_CONSENT_KEY = "cookieConsentLevel"

export const CONSENT_LEVELS = {
  all: "all",
  necessary: "necessary",
  declined: "declined",
}

const VALID_LEVELS = new Set(Object.values(CONSENT_LEVELS))

export const readConsentLevel = () => {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY)
    return VALID_LEVELS.has(value) ? value : null
  } catch {
    return null
  }
}

export const writeConsentLevel = (level) => {
  if (!VALID_LEVELS.has(level)) return false
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, level)
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: level }))
    return true
  } catch {
    return false
  }
}

/** External CDN media (Cloudinary) only after explicit “accept all”. */
export const allowsExternalMedia = (level) => level === CONSENT_LEVELS.all

export const clearConsentLevel = () => {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: null }))
    return true
  } catch {
    return false
  }
}
