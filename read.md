# Schrauben24 Verkaufs-API mit Express.js und MongoDB

Dieses Repository enthält den Code für eine Express.js-Anwendung, die eine RESTful API zum Verkauf von Schrauben bereitstellt. Die Anwendung verwendet eine MongoDB-Datenbank zum Speichern der Schraubeninformationen.

## Installation und Ausführung

1. Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist.
2. Klone das Repository mit dem Befehl: `git clone <Repository-URL>`
3. Navigiere in das Projektverzeichnis: `cd <Repository-Verzeichnis>`
4. Installiere die erforderlichen Abhängigkeiten mit dem Befehl: `npm install`
5. Starte die Anwendung mit dem Befehl: `npm start`

## Konfiguration

Die Anwendung verwendet eine MongoDB-Datenbank zum Speichern der Schraubeninformationen. Die Verbindung zur Datenbank wird in der `mongoose.connect()`-Funktion hergestellt. Passen Sie die Verbindungs-URL in der Datei `app.js` an, um sie an Ihre eigene MongoDB-Datenbank anzupassen.

Aktuelle Verbindungs-URL:

```bash
mongodb+srv://<dein-benutzername>:<dein-passwort>@cluster0.ysd3g8i.mongodb.net/schrauben24?retryWrites=true&w=majority
```

## Endpunkte

Die Anwendung stellt folgende Endpunkte zur Verfügung:

- **GET /:** Ein einfacher Endpunkt, der "Hello World!" zurückgibt. Kann verwendet werden, um die Verfügbarkeit der Anwendung zu überprüfen.

- **GET /sales/:schrauben_typ:** Dieser Endpunkt gibt alle Schrauben mit einem bestimmten Schrauben-Typ zurück. Der Schrauben-Typ wird als Pfadparameter angegeben. Beispiel: GET /sales/SchraubenTyp1

- **GET /sales:** Dieser Endpunkt gibt alle verfügbaren Schrauben zurück.

## Fehlerbehandlung

Bei Auftreten von Fehlern gibt die Anwendung eine Fehlermeldung mit dem HTTP-Statuscode 500 zurück.

## Server-Port

Die Anwendung wird standardmäßig auf Port 3000 gestartet. Wenn die Umgebungsvariable `process.env.PORT` gesetzt ist, wird der angegebene Port verwendet.

**Bitte stellen Sie sicher, dass die erforderlichen Umgebungsvariablen und Konfigurationen festgelegt sind, bevor Sie die Anwendung starten.**


