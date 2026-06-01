const normalizeSegment = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

export const getAthleteSlug = (athlete) => `${normalizeSegment(athlete.firstName)}-${normalizeSegment(athlete.lastName)}`

export const athleteMatchesSlug = (athlete, slug) => getAthleteSlug(athlete) === slug
