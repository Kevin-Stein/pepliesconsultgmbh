# Deployment auf IONOS Webhosting

Diese React-App wird lokal gebaut und als **statische Website** auf IONOS hochgeladen (kein Node.js auf dem Server nötig).

## Voraussetzungen

- Node.js 18+ lokal
- IONOS Webhosting mit FTP/SFTP oder Dateimanager
- Domain zeigt auf den Webspace

## 1. Build erstellen

```bash
npm install
```

Passwort für das Frontend-Login (optional) in `.env` setzen — wird **beim Build** eingebettet:

```bash
cp .env.example .env
# REACT_APP_LOGIN_PASSWORD=dein-passwort
```

```bash
npm run build
```

Ergebnis: Ordner `build/` mit `index.html`, JS, CSS, Bilder, PDFs und `videos/`.

## 2. Auf IONOS hochladen

**Nur den Inhalt von `build/`** ins Webverzeichnis laden (z. B. `/`, `htdocs/` oder `public_html/`), **nicht** den gesamten Projektordner.

Wichtige Dateien:

| Datei/Ordner | Zweck |
|--------------|--------|
| `index.html` | Einstieg |
| `static/` | JS, CSS, gebündelte Assets |
| `.htaccess` | SPA-Routing + Cache (liegt in `public/`, wird mitkopiert) |
| `videos/` | Self-hosted Videos (später statt Cloudinary) |

Upload per FTP/SFTP (FileZilla, WinSCP) oder IONOS Dateimanager.

## 3. SPA-Routing testen

Nach dem Upload diese URLs direkt aufrufen (nicht nur die Startseite):

- `/publications`
- `/press`
- `/tv-commercials`

Ohne `.htaccess` liefern diese Pfade einen 404.

## 4. HTTPS

SSL-Zertifikat in IONOS aktivieren (Let’s Encrypt). Empfohlen wegen Cookie-Banner und Login.

## 5. Videos lokal statt Cloudinary

1. MP4-Dateien nach `public/videos/hero/` bzw. `public/videos/tv/` legen
2. URLs in `src/lib/heroVideos.js` und `src/lib/tvCommercialsData.js` auf `/videos/...` umstellen
3. Neu bauen und `build/` erneut hochladen (Video-Dateien können groß sein — Upload kann dauern)

Details: `public/videos/README.md`

Nach vollständiger Migration Cloudinary-Abschnitt in `src/i18n/content/privacyCopy.js` anpassen.

## 6. Updates deployen

Bei jeder Änderung:

```bash
npm run build
```

Dann geänderte/neue Dateien aus `build/` erneut hochladen (oder alles ersetzen).

Passwort-Änderung erfordert **neuen Build** — es gibt keine Laufzeit-Umgebungsvariablen auf statischem Hosting.

## Unterschied zu Vercel

| | Vercel | IONOS |
|---|--------|--------|
| Build | Automatisch bei Git-Push | Lokal `npm run build` |
| Env-Variablen | Im Dashboard | In `.env` vor dem Build |
| Routing | `vercel.json` | `.htaccess` |
| Große Videos | Extern (Cloudinary) | `public/videos/` → `/videos/` |

`vercel.json` kann für IONOS ignoriert werden; relevant ist nur der `build/`-Ordner.
