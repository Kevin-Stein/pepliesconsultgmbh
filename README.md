## This is the website of peplies consult gmbh.

## Vercel Deployment

### Umgebungsvariablen in Vercel einrichten

1. Gehen Sie zu Ihrem Vercel-Projekt
2. Navigieren Sie zu **Settings** → **Environment Variables**
3. Fügen Sie folgende Umgebungsvariable hinzu:
   - **Name:** `REACT_APP_LOGIN_PASSWORD`
   - **Value:** Ihr Passwort (z.B. `pepliesgmbh`)
   - **Environment:** Production, Preview, Development (alle auswählen)

### Build-Einstellungen

Die `vercel.json` Datei ist bereits konfiguriert mit:
- Framework: Create React App
- Output Directory: `build`
- Rewrites für React Router (SPA-Routing)
- Cache-Header für statische Assets

### Deployment

Das Projekt wird automatisch deployed, wenn Sie zu GitHub pushen (wenn Vercel mit GitHub verbunden ist).

Manuelles Deployment:
```bash
vercel --prod
```
