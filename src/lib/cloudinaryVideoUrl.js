// Ensures Cloudinary delivers video as browser-friendly MP4 (H.264) via f_mp4.
// Use for <video src>; no-op for other URLs or if f_mp4 is already present.

const UPLOAD_MARKER = "/video/upload/";

function hasFmp4Token(segment) {
  return segment.split(",").some((t) => t.trim() === "f_mp4");
}

export function cloudinaryVideoUrlForHtml5(url) {
  if (!url || typeof url !== "string") return url;

  const lower = url.toLowerCase();
  const idx = lower.indexOf(UPLOAD_MARKER);
  if (idx === -1) return url;

  const prefix = url.slice(0, idx + UPLOAD_MARKER.length);
  const rest = url.slice(prefix.length);
  const slash = rest.indexOf("/");
  const first = slash === -1 ? rest : rest.slice(0, slash);
  const tail = slash === -1 ? "" : rest.slice(slash);

  if (hasFmp4Token(first)) return url;

  if (/^v\d+$/.test(first)) {
    return `${prefix}f_mp4/${rest}`;
  }

  if (slash === -1) {
    return `${prefix}f_mp4/${rest}`;
  }

  return `${prefix}${first},f_mp4${tail}`;
}
