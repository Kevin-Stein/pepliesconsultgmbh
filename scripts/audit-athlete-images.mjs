import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const athletesFile = path.join(root, "src/lib/athletes.js")
const imagesDir = path.join(root, "src/images/athletes/athlets images")

const normalizeToken = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")

const lastNameVariantsByAthlete = {
  felixhoffmann: ["hoffmann", "hoffman"],
  hektorkapustik: ["kapustik"],
  kirakapustikova: ["kapustikova"],
  laramalsiner: ["malsiner", "malisner"],
  jessicamalsiner: ["malsiner", "malisner"],
  janinahettichwalz: ["hettichwalz"],
  liabohme: ["bohme", "boehme"],
  luisagorlich: ["gorlich", "goerlich"],
  charlottegallbronner: ["gallbronner"],
}

const getLastNameVariants = (firstName, lastName) => {
  const fullNameNorm = `${normalizeToken(firstName)}${normalizeToken(lastName)}`
  const base = normalizeToken(lastName)
  const extra = lastNameVariantsByAthlete[fullNameNorm] || []
  return [...new Set([base, ...extra])]
}

const matchesAthleteName = (fileNameNorm, firstNameNorm, lastNameNorm) => {
  if (!fileNameNorm || !firstNameNorm || !lastNameNorm) return false
  if (fileNameNorm.includes(firstNameNorm) && fileNameNorm.includes(lastNameNorm)) return true
  const firstShort = firstNameNorm.slice(0, Math.max(3, Math.min(5, firstNameNorm.length)))
  const lastShort = lastNameNorm.slice(0, Math.max(3, Math.min(5, lastNameNorm.length)))
  return fileNameNorm.includes(firstShort) && fileNameNorm.includes(lastShort)
}

const preferredImageNeedlesByAthlete = {
  annatwardosz: { portrait: ["portrait02", "portrait2"] },
  janinahettichwalz: { portrait: ["halloffame", "janinahettichwalz"] },
  florianliegl: { portrait: ["halloffame", "florianliegl"] },
  susanneriesch: { portrait: ["halloffame", "susanneriesch"] },
  martinazellner: { portrait: ["halloffame", "martinazellner"] },
}

const walkImages = (dir, acc = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) walkImages(fullPath, acc)
    else if (/\.(png|jpe?g|webp|gif)$/i.test(entry.name)) acc.push(fullPath)
  }
  return acc
}

const athleteLocalImages = walkImages(imagesDir).map((fullPath) => {
  const fileName = path.basename(fullPath)
  const normalizedPath = normalizeToken(fullPath)
  const normalizedName = normalizeToken(fileName)
  const kind = normalizedName.includes("action")
    ? "action"
    : normalizedName.includes("portrait") || normalizedPath.includes("halloffame")
      ? "portrait"
      : ""
  return {
    kind,
    normalizedName,
    normalizedPath,
    src: `local://${fileName}`,
  }
}).filter((img) => img.kind)

const hasStrongNameMatch = (fileNameNorm, firstNameNorm, lastNameVariants) => {
  if (!fileNameNorm || !firstNameNorm || !lastNameVariants.length) return false
  const firstShort = firstNameNorm.slice(0, Math.max(3, Math.min(5, firstNameNorm.length)))
  const hasFirst = fileNameNorm.includes(firstNameNorm) || fileNameNorm.includes(firstShort)
  if (!hasFirst) return false
  return lastNameVariants.some((lastNameNorm) => {
    if (!fileNameNorm.includes(lastNameNorm)) return false
    const idx = fileNameNorm.indexOf(lastNameNorm)
    const after = fileNameNorm.slice(idx + lastNameNorm.length)
    if (!after) return true
    return /^(action|portrait|\d)/.test(after)
  })
}

const isReliableLocalActionFile = (normalizedName, firstNameNorm, lastNameVariants) =>
  normalizedName.includes("action") && hasStrongNameMatch(normalizedName, firstNameNorm, lastNameVariants)

const getLocalAthleteImage = (firstName, lastName, kind) => {
  const firstNameNorm = normalizeToken(firstName)
  const lastNameVariants = getLastNameVariants(firstName, lastName)
  const fullNameNorm = `${firstNameNorm}${normalizeToken(lastName)}`
  const preferredNeedles = preferredImageNeedlesByAthlete[fullNameNorm]?.[kind] || []
  const matches = athleteLocalImages.filter(
    (img) =>
      img.kind === kind &&
      lastNameVariants.some((lastNameNorm) => matchesAthleteName(img.normalizedName, firstNameNorm, lastNameNorm))
  )
  if (matches.length === 0) return { src: "", normalizedName: "" }

  const score = (img) => {
    let s = 0
    if (lastNameVariants.some((ln) => img.normalizedName.includes(firstNameNorm) && img.normalizedName.includes(ln))) {
      s += 20
    }
    const firstNameIndex = img.normalizedName.indexOf(firstNameNorm)
    const lastNameIndex = lastNameVariants.reduce((best, ln) => {
      const idx = img.normalizedName.indexOf(ln)
      return idx === -1 ? best : Math.min(best, idx)
    }, Number.POSITIVE_INFINITY)
    if (firstNameIndex >= 0 && lastNameIndex < Number.POSITIVE_INFINITY && firstNameIndex < lastNameIndex) {
      s += 15
    }
    if (preferredNeedles.some((needle) => img.normalizedName.includes(needle))) s += 100
    if (kind === "portrait" && img.normalizedName.includes("portrait")) s += 5
    if (kind === "action" && img.normalizedName.includes("action")) s += 5
    s += Math.min(img.normalizedName.length, 30) * 0.01
    return s
  }

  matches.sort((a, b) => score(b) - score(a))
  return { src: matches[0].src, normalizedName: matches[0].normalizedName }
}

const parseAthletes = () => {
  const source = fs.readFileSync(athletesFile, "utf8")
  const start = source.indexOf("const athletes = [")
  const end = source.indexOf("\nconst translations", start)
  const block = source.slice(start, end)
  const records = []
  const chunks = block.split(/\n  \{\n/).slice(1)
  for (const chunk of chunks) {
    const firstName = chunk.match(/firstName:\s*"([^"]+)"/)?.[1]
    const lastName = chunk.match(/lastName:\s*"([^"]+)"/)?.[1]
    if (!firstName || !lastName) continue
    const portraitMatch = chunk.match(/portraitImageURL:\s*(""|"[^"]+"|[^,\n]+)/)
    const actionMatch = chunk.match(/actionImageURL:\s*(""|"[^"]+"|[^,\n]+)/)
    const portraitRaw = portraitMatch?.[1]?.trim() || '""'
    const actionRaw = actionMatch?.[1]?.trim() || '""'
    const portraitImageURL = portraitRaw.startsWith('"') ? portraitRaw.replace(/^"|"$/g, "") : ""
    const actionImageURL = actionRaw.startsWith('"') ? actionRaw.replace(/^"|"$/g, "") : ""
    const isFormer = /isFormer:\s*true/.test(chunk)
    const borrowFirst = chunk.match(/borrowedActionImageFrom:\s*\{\s*firstName:\s*"([^"]+)"/)?.[1]
    const borrowLast = chunk.match(/borrowedActionImageFrom:[\s\S]*?lastName:\s*"([^"]+)"/)?.[1]
    records.push({
      firstName,
      lastName,
      portraitImageURL,
      actionImageURL,
      isFormer,
      borrowedActionImageFrom: borrowFirst ? { firstName: borrowFirst, lastName: borrowLast } : null,
    })
  }
  return records
}

const classify = (url) => {
  if (!url) return "— (Platzhalter/fehlend)"
  if (url.includes("res.cloudinary.com")) return "Cloudinary"
  if (url.startsWith("local://")) return "Lokal"
  return "Sonstiges"
}

const resolveAthletes = () => {
  const mapped = parseAthletes().map((athlete) => {
    const localPortrait = getLocalAthleteImage(athlete.firstName, athlete.lastName, "portrait")
    const localAction = getLocalAthleteImage(athlete.firstName, athlete.lastName, "action")
    const lastNameVariants = getLastNameVariants(athlete.firstName, athlete.lastName)
    const firstNameNorm = normalizeToken(athlete.firstName)
    const reliableLocalAction =
      localAction.src &&
      isReliableLocalActionFile(localAction.normalizedName, firstNameNorm, lastNameVariants)
    const actionImageURL =
      athlete.actionImageURL && localAction.src && !reliableLocalAction
        ? athlete.actionImageURL
        : localAction.src || athlete.actionImageURL || ""

    return {
      ...athlete,
      portraitImageURL: localPortrait.src || athlete.portraitImageURL,
      actionImageURL,
    }
  })

  return mapped.map((athlete) => {
    if (!athlete.borrowedActionImageFrom) return athlete
    const source = mapped.find(
      (c) =>
        c.firstName === athlete.borrowedActionImageFrom.firstName &&
        c.lastName === athlete.borrowedActionImageFrom.lastName
    )
    return { ...athlete, actionImageURL: source?.actionImageURL || athlete.actionImageURL }
  })
}

const athletes = resolveAthletes()
const current = athletes.filter((a) => !a.isFormer)
const cloudinaryOnly = []
const cloudinaryPortrait = []
const cloudinaryAction = []
const cloudinaryBoth = []

for (const a of current) {
  const p = classify(a.portraitImageURL)
  const act = classify(a.actionImageURL)
  const entry = {
    name: `${a.firstName} ${a.lastName}`,
    portrait: p,
    action: act,
    portraitUrl: a.portraitImageURL?.includes("cloudinary") ? a.portraitImageURL : null,
    actionUrl: a.actionImageURL?.includes("cloudinary") ? a.actionImageURL : null,
    borrow: a.borrowedActionImageFrom
      ? `Action von ${a.borrowedActionImageFrom.firstName} ${a.borrowedActionImageFrom.lastName}`
      : null,
  }
  if (p === "Cloudinary" || act === "Cloudinary") {
    if (p === "Cloudinary" && act === "Cloudinary") cloudinaryBoth.push(entry)
    else if (p === "Cloudinary") cloudinaryPortrait.push(entry)
    else if (act === "Cloudinary") cloudinaryAction.push(entry)
  }
  if (p === "Cloudinary" || act === "Cloudinary") cloudinaryOnly.push(entry)
}

console.log("=== Aktuelle Athleten: Cloudinary (Portrait und/oder Action) ===\n")
for (const e of cloudinaryOnly.sort((a, b) => a.name.localeCompare(b.name))) {
  console.log(`${e.name}`)
  if (e.portrait === "Cloudinary") console.log(`  Portrait: Cloudinary`)
  else console.log(`  Portrait: ${e.portrait}`)
  if (e.action === "Cloudinary") {
    console.log(`  Action: Cloudinary${e.borrow ? ` (${e.borrow})` : ""}`)
  } else {
    console.log(`  Action: ${e.action}${e.borrow ? ` (${e.borrow})` : ""}`)
  }
  console.log("")
}

const localOnly = current.filter(
  (a) =>
    !a.portraitImageURL?.includes("cloudinary") &&
    !a.actionImageURL?.includes("cloudinary") &&
    (a.portraitImageURL || a.actionImageURL)
)
console.log(`\n=== Nur lokal / ohne Cloudinary: ${localOnly.length} Athleten ===`)
console.log(localOnly.map((a) => `${a.firstName} ${a.lastName}`).join(", "))

const placeholder = current.filter((a) => !a.portraitImageURL && !a.actionImageURL)
console.log(`\n=== Weder lokal noch Cloudinary (Platzhalter möglich): ${placeholder.length} ===`)
console.log(placeholder.map((a) => `${a.firstName} ${a.lastName}`).join(", ") || "—")
