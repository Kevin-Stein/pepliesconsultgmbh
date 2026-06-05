import { cloudinaryVideoUrlForHtml5 } from "./cloudinaryVideoUrl.js"

const isHttpUrl = (url) => /^https?:\/\//i.test(url)

export const isCloudinaryVideoUrl = (url) =>
  typeof url === "string" && url.toLowerCase().includes("cloudinary.com")

/** Third-party video hosts (Cloudinary etc.) — needs “accept all” cookie consent. */
export const requiresExternalMediaConsent = (url) => {
  if (!url || typeof url !== "string") return false
  if (url.startsWith("/") || url.startsWith("./")) return false
  return isHttpUrl(url)
}

/** Normalise video src for HTML5 `<video>` (Cloudinary → f_mp4; local paths unchanged). */
export const videoUrlForHtml5 = (url) => {
  if (!url || typeof url !== "string") return url
  if (isCloudinaryVideoUrl(url)) return cloudinaryVideoUrlForHtml5(url)
  return url
}
