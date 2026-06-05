# Videos (self-hosted)

Place MP4 files here. They are copied unchanged into `build/videos/` on `npm run build` and served from your domain (e.g. IONOS), not from Cloudinary.

## Folders

| Folder | Used for |
|--------|----------|
| `hero/` | Homepage background loop (`src/lib/heroVideos.js`) |
| `tv/` | TV commercials (`src/lib/tvCommercialsData.js`) |

## Example

1. Copy `RTL_Martina_Ertl.mp4` to `public/videos/tv/RTL_Martina_Ertl.mp4`
2. In `tvCommercialsData.js`, set:
   ```js
   videoUrl: "/videos/tv/RTL_Martina_Ertl.mp4",
   ```
3. Run `npm run build` and upload the `build/` folder.

Self-hosted videos do **not** require the “accept all cookies” consent (only third-party CDN media does).

## Notes

- Prefer **H.264 MP4** for broad browser support.
- Large files are not committed to Git (see `.gitignore`). Upload them via FTP together with the rest of `build/`.
- After migrating away from Cloudinary, update the privacy policy in `src/i18n/content/privacyCopy.js`.
