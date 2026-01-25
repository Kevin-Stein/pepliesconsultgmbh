# Vercel Umgebungsvariablen Setup

## Problem
Das Login-Passwort wird in Vercel nicht erkannt, weil die Umgebungsvariable `REACT_APP_LOGIN_PASSWORD` nicht konfiguriert ist.

## Lösung

### Schritt 1: Vercel Dashboard öffnen
1. Gehe zu https://vercel.com/dashboard
2. Wähle dein Projekt aus

### Schritt 2: Umgebungsvariable hinzufügen
1. Klicke auf **Settings** (Einstellungen)
2. Klicke auf **Environment Variables** (Umgebungsvariablen)
3. Klicke auf **Add New** (Neu hinzufügen)

### Schritt 3: Variable konfigurieren
- **Name:** `REACT_APP_LOGIN_PASSWORD`
- **Value:** `pepliesgmbh` (oder dein gewünschtes Passwort)
- **Environments:** Aktiviere alle (Production, Preview, Development)

### Schritt 4: Speichern und neu deployen
1. Klicke auf **Save**
2. Gehe zu **Deployments**
3. Klicke auf die drei Punkte (⋯) beim letzten Deployment
4. Wähle **Redeploy**

## Wichtig
- Nach dem Hinzufügen der Umgebungsvariable muss ein neuer Deployment erstellt werden
- Die Variable ist nur für Builds verfügbar, die nach dem Hinzufügen erstellt wurden
- Änderungen an Umgebungsvariablen erfordern einen neuen Build

## Alternative: Über Vercel CLI
```bash
vercel env add REACT_APP_LOGIN_PASSWORD
# Dann den Wert eingeben: pepliesgmbh
# Environments auswählen: Production, Preview, Development
```
