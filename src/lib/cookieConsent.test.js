import { CONSENT_LEVELS, COOKIE_CONSENT_KEY, allowsExternalMedia, readConsentLevel, writeConsentLevel } from "./cookieConsent"

describe("cookie consent helpers", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("reads and writes valid consent levels", () => {
    expect(readConsentLevel()).toBeNull()
    expect(writeConsentLevel(CONSENT_LEVELS.necessary)).toBe(true)
    expect(readConsentLevel()).toBe(CONSENT_LEVELS.necessary)
  })

  it("rejects invalid consent values", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "unexpected")
    expect(readConsentLevel()).toBeNull()
    expect(writeConsentLevel("unexpected")).toBe(false)
  })

  it("allows external media only for all-consent", () => {
    expect(allowsExternalMedia(CONSENT_LEVELS.all)).toBe(true)
    expect(allowsExternalMedia(CONSENT_LEVELS.necessary)).toBe(false)
    expect(allowsExternalMedia(CONSENT_LEVELS.declined)).toBe(false)
  })
})
