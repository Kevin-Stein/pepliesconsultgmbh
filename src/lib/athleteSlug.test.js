import { athleteMatchesSlug, getAthleteSlug } from "./athleteSlug"

describe("athlete slug helpers", () => {
  it("creates normalized slugs for names with accents", () => {
    const slug = getAthleteSlug({ firstName: "Anne", lastName: "Häckel" })
    expect(slug).toBe("anne-hackel")
  })

  it("matches athletes by normalized slug", () => {
    const athlete = { firstName: "Alina", lastName: "Nußbicker" }
    expect(athleteMatchesSlug(athlete, "alina-nussbicker")).toBe(true)
    expect(athleteMatchesSlug(athlete, "alina-nubicker")).toBe(false)
    expect(athleteMatchesSlug(athlete, "alina-nu-bicker")).toBe(false)
  })
})
