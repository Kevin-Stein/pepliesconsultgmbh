import { requiresExternalMediaConsent, videoUrlForHtml5 } from "./videoUrl"

describe("videoUrl", () => {
  it("treats site-relative paths as self-hosted", () => {
    expect(requiresExternalMediaConsent("/videos/tv/spot.mp4")).toBe(false)
  })

  it("requires consent for Cloudinary URLs", () => {
    expect(
      requiresExternalMediaConsent("https://res.cloudinary.com/dbpoconup/video/upload/v1/foo.mp4")
    ).toBe(true)
  })

  it("passes local URLs through unchanged", () => {
    expect(videoUrlForHtml5("/videos/hero/tennis.mp4")).toBe("/videos/hero/tennis.mp4")
  })

  it("adds f_mp4 to Cloudinary URLs", () => {
    const url = "https://res.cloudinary.com/dbpoconup/video/upload/v123/foo.mp4"
    expect(videoUrlForHtml5(url)).toContain("f_mp4")
  })
})
