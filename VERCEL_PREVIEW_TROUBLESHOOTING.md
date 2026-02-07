# Vercel Preview – Änderungen sichtbar machen

## 1. Änderungen gepusht?

- Vercel baut nur nach einem **Push** neu.
- In PowerShell: `git status` → wenn "Your branch is ahead of 'origin/main'" steht, fehlt ein Push.
- Dann: `git push origin main` (oder deinen Branch-Namen).

## 2. Richtige URL nutzen

- **Production:** Haupt-URL (z.B. `pepliesconsult.vercel.app`) = Deployment vom **main**-Branch.
- **Preview:** Jeder Push erzeugt eine eigene Preview-URL (z.B. in der Vercel-E-Mail oder unter Deployments → "Visit").
- Prüfen: Siehst du die neueste Preview-URL aus dem **letzten** Deployment?

## 3. Deployment abgeschlossen?

- Im Vercel-Dashboard unter **Deployments** prüfen: Ist der neueste Build **Ready** (grün)?
- Wenn **Building** oder **Error**: Warte oder prüfe die Build-Logs (klicken auf das Deployment).

## 4. Browser-Cache

- Seite mit **Hard Refresh** neu laden: `Strg + Shift + R` (Windows) oder `Cmd + Shift + R` (Mac).
- Oder: Inkognito/privates Fenster öffnen und die Preview-URL dort aufrufen.

## 5. Branch stimmt

- Production = in der Regel **main**.
- Wenn du auf einem anderen Branch arbeitest: Die Preview-URL gehört zu **diesem** Branch. Nach Merge in main erscheinen die Änderungen auf der Production-URL.

## Schnell-Check

1. `git push origin main` ausführen (falls nötig).
2. In Vercel unter **Deployments** warten, bis der neueste Build **Ready** ist.
3. Auf **Visit** (oder den Link aus der Deployment-E-Mail) klicken.
4. Seite mit `Strg + Shift + R` neu laden.
