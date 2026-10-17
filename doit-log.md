# 🎯 PROJEKT-COCKPIT – DoIT Monitoring-Portal

**Stand:** nach Woche 2 (64 von 160 h) | **Owner:** Jonathan Schramm | **Betreuer:** J. Heitz (fachlich), A. Roy Nalpathamkalam (orga)
**Rahmen:** DoIT SRH, 160 h (Mo–Do 7 h, Fr 4 h), 5 Wochen + Prüfungswoche | **Verbleibend:** 96 h = Woche 3–5 (KW 43–45)
**Note:** Doku 30 % | Präsentation 20 % | Fachgespräch 50 % | IHK-Schlüssel (100–92 = 1,0 … <50 = mangelhaft)
**Punkteskala je Kriterium:** 10 / 9 / 7 / 5 / 3 / 0
**Formal:** Wochenplan-Excel nur zum Wochenstart Pflicht (eine Datei, kumuliert); kein Wochenbericht; **Tagebuch = einzige Zeit-Quelle für Soll-Ist** → lückenlos führen, auch freitags!

---

## 1. Zielvereinbarung: Bewertungskriterien

### 1.1 Dokumentation (30 %) – interne Gewichtung

| # | Kriterium | Gewicht |
|---|---|---|
| 1 | Ausgangssituation (Ziele, Kundenwünsche, Teilaufgaben, Umfeld, Schnittstellen) | 20 % |
| 2 | Ressourcen & Ablaufplanung (Personal, Sachmittel, Termin, Kosten, Ablaufplan) | 20 % |
| 3 | Durchführung & Auftragsbearbeitung (Schritte, Vorgehen, QS, Abweichungen, Entscheidungen) | 20 % |
| 4 | Auftragsergebnisse (Soll-Ist-Vergleich, Qualitätskontrolle, Anpassungen) | 20 % |
| 5 | Gestaltung des Portfolios (Form, Struktur, Tabellen/Grafiken, Verzeichnisse) | 10 % |
| 6 | Kundendokumentation (kundengerecht im Anhang) | 10 % |

### 1.2 Präsentation (20 %, 15 min)

Aufbau & inhaltliche Struktur 30 % | Problemerfassung & Lösungsansätze 30 % | Sprachliche Gestaltung 20 % | Zielgruppengerechte Darstellung (Medien, Visualisierung, Körpersprache) 20 %

### 1.3 Fachgespräch (50 %, 15 min)

Fachbegriffe 10 % | Relevanter Fachhintergrund 30 % | Problemerfassung/-darstellung/-lösung 30 % | Argumentation & Begründung 30 %

---

## 2. Regeln der Zusammenarbeit

### 2.1 Dieser Chat = Projektleitung (PM)

- **Keine konkreten Lösungen** – Umsetzung passiert in Spezial-Chats; PM liefert Entscheidungen, Prioritäten, Pläne, Analysen.
- **Lese-Check-Regel:** Unlesbare/korrupte Quellen werden sofort gemeldet; nie raten, nie halluzinieren.
- **Glossar-Regel:** Fachbegriffe in genau einem Satz, übernehmbar.

### 2.2 Deine Projekt-Regeln (nicht verhandelbar, aus der Sammlung)

1. **Schaufenster-Regel:** Keine Begründung in der Doku, die du nicht selbst in zwei Sätzen vertreten kannst. Sonst bleibt sie im Labor (Notizen) oder wird gestrichen.
2. **Grün-Regel:** Fachbehauptungen (auch KI-Aussagen) gelten erst als grün, wenn am laufenden System beobachtet oder in verstandener Primärquelle geprüft.
3. **Park-Regel:** Annahmen ohne Prüfobjekt werden als „zu verifizieren" markiert und geparkt.
4. **Überlast-Regel:** Wenn es zu viel wird: Reduktion auf einen Gedanken, dann warten.

### 2.3 Quellen-Lesestatus (Parser-Protokoll)

- ✅ sauber lesbar: Konzept 01, Notenschlüssel 04, Kühnel-Beispiel 10, Feldhaus 09 (Kern), Antrag, Doku-Entwurf, Sammlung, Tagebuch, Code-Dateien
- ✅ per Screenshot ersetzt: Bewertungsmatrizen 05/06/07 + Fachgespräch 08
- ❌ unlesbar (bewusst ignoriert): Grothe 2019 (Parser leer)
- ⚠️ nur Fragmente: Kollenberg 2017 (Anhang), Vierschilling 2017 (Proxy-Teile)
- ℹ️ `services.json`-„Leerzeichen" = Parser-Artefakt; Datei ist korrekt (`"name":`)

---

## 3. Chat-Architektur & Workflow

| Chat | Rolle | Zuständig | Wann |
|---|---|---|---|
| **A – dieser** | Projektleitung | Strategie, Zeit, Blocker, Entscheidungen, Soll-Ist, Prioritäten | Morning-Standup + Evening-Review + bei Blockern |
| **B – Doku-Werkstatt** | Textproduktion | Kapitel bauen, IHK-Sprache, Tabellen | Woche 4 (und Fr Woche 3 für Kap. 5) |
| **C – Code-Werkstatt** | Implementierung | Configs, Skripte, Debugging, Syntax | Woche 3 (Phase 1) |
| **D – Prüfungs-Coach** | Prüfungssimulation | Folien-Feedback, Mock-Fachgespräch | Woche 5 |

**Workflow in Werkstätten:** Briefing (nur relevanter Kontext!) → Salami-Taktik (Abschnitt für Abschnitt, nie „ganzes Kapitel") → Review (Schaufenster-Regel!) → Integration (Commit / Word = Single Source of Truth).

**Tages-Routine (PDCA):**  Standup im PM-Chat (Ziel + Risiko des Tages) → 🛠️ Deep Work in Werkstatt (Timebox 45 min pro Problem, dann Eskalation) → 🌇 Review im PM-Chat (erreicht? Zeit? Fails? Morgen-Ziel?).

**3 Goldene Regeln:**
1. Die KI ist der Maurer, du bist der Architekt.
2. KI-Fails sind PM-Leistung → Material für Kap. 7 („geplant 2 h, tatsächlich 4 h, Grund: …").
3. Glossar-Veto: Begriff nicht in einem eigenen Satz definierbar → Begriff fliegt aus der Doku.

---

## 4. Status nach 64 h

### 4.1 🟢 Bewiesen (läuft / Screenshots in Sammlung)

- VM-Härtung: SSH key-only (Passwort-Login blockt, cloud-init-Falle gelöst), UFW 22+443
- Docker + Compose: 2 Netze (`proxy-net`, `monitoring-internal` mit `internal: true`), php-fpm multi-homed, Volume `monitoring-data`, Code ro gemountet
- 5 Test-Container: 4× `nc`-Listener (80/1433/22/587) = up-Fälle, 1× `sleep infinity` = refused-Fall
- PHP-Prüflogik: Format-Check, Semantik-Check, Zustände up / refused (errno 111) / down, Latenz in ms
- Manuelle Connect-Tests: DNS, Multi-Homing, Routing, down-Fall verifiziert
- Konzept & Entscheidungen: ICMP→TCP, RZ→Verlag (Produkt-Market-Fit), JSON-Config, pinned tags, Cron-Platzierung, Segmentierung (2 Netze), Restrisiken benannt
- Doku: Kap. 1 weitgehend, Lastenheft-Anhang A1, Glossar (30 Einträge), Abb. 1 (draw.io) + PAP vorhanden

### 4.2 🔧 Offen Technik (Bauliste Phase 1)

Nginx-Config (Self-signed-Cert, HTTP→HTTPS, `fastcgi_pass :9000`) + Mount + `curl -k`-Beweis · atomares Schreiben (`temp` → `rename()`) + `fclose()` · Host-Crons (Prüf-Takt + Backup) · Backup-Skript (3-2-1 im Lab-Maßstab, Vereinfachung dokumentieren) · Dashboard minimal (`fetch('/api/status')`, Karten grün/rot) · QS-Testprotokoll als Dokument · Ist-Werte (`docker stats`, `df -h`, `free -h`)

### 4.3 📄 Offen Doku (Phase 2, via Doku-Chat)

Tabellen (Grobe Zeitplanung leer!, Ressourcen/Kosten), Kap. 2–7 ausformulieren, Testprotokoll einbetten, Soll-Ist, Kundendoku (Kap. 8), Formalia (Verzeichnisse, Glossar-Pflege, Querverweise)

### 4.4 🎤 Offen Präsentation (Phase 3)

Komplett: Folien, Demo-Skript, Generalprobe

### 4.5 Erledigte Flaggen

- ~~Code-Diskrepanz~~ → aufgelöst: Nginx/Atomic/Cron waren schlicht noch nicht gebaut, nichts verloren
- ~~Excel-Ist-Spalte~~ → nur Wochenplan-Start Pflicht; Tagebuch ist Zeit-Quelle
- ~~services.json-Leerzeichen~~ → Parser-Fehler meinerseits

---

## 5. Zeitanalyse Woche 1–2 & Erkenntnisse

**Woche 1 (~32 h, Konzept/Doku):** Doku-Gerüst ~12 h · Architektur + Sicherheitskonzept ~6,5 h · ICMP/TCP-Vertiefung ~4,5 h · Make-or-Buy 1,5 h · Lastenheft 1 h · UR/SR 1,5 h · Wochenplan 2,5 h · **2× Nervenzusammenbruch ~2 h**
**Woche 2 (~32 h, Implementierung):** Repo 1 h · VM+SSH 6 h (davon 1,5 h Troubleshooting) · UFW+Test 2 h · Docker 1 h · **Compose 7,5 h** · Connect-Tests 2 h · PAP 1,5 h · PHP-Skript ~5 h · Wochenplan/Entscheidungen ~3 h

**Erkenntnisse:**

1. Mit klarem Tages-Milestone (vertikaler Schnitt) = stabil ~7 h/Tag, keine Breakdowns (Woche 2). Ohne laufendes System = Struktur-Suche + Stress (Woche 1). → **Weiter in vertikalen Schnitten.**
2. Tempo-Benchmarks: Compose (Neuland+Debug) 7,5 h · PHP-Kern 5 h · Doku ~12 h für ~8 Seiten (Woche 1).
3. Troubleshooting-Zeiten (SSH/cloud-init, UFW/Docker-Forward) sind „gute Fails" → Doku-Material.

---

## 6. Aufwands-Schätzung Rest (Basis: dein Tempo)

| Paket | Schätzung | Begründung |
|---|---|---|
| Technik-Rest (Bauliste 4.2) | 20–25 h | Compose-Benchmark 7,5 h; Dashboard = Neuland (JS/fetch) 6–8 h |
| QS/Testprotokoll + Ist-Werte | 4 h | Matrix existiert bereits |
| Doku komplett (Kap. 2–8 + Formalia) | 20–22 h | Woche-1-Benchmark ~12 h/8 Seiten |
| Präsentation (Folien + Demo + Üben) | 8–10 h | Kühnel-Benchmark 8+2 h |
| Fachgespräch-Vorbereitung | 6 h | Material (Sammlung/Glossar) vorhanden |
| Orga (Wochenpläne, Uploads) | 5 h | Pflicht |
| **Summe** | **~63–72 h** | → **Buffer 24–33 h** in 96 h; Realprognose 70–78 h |

---

## 7. ⚔️ 96-h-Schlachtplan (3 Phasen)

### Phase 1 – Woche 3 (KW 43): Technik-MVP + Beweise *(Exit: End-to-End läuft, Testprotokoll bebildert)*

| Tag | Aufgabe | Ziel/Deliverable | h |
|---|---|---|---|
| Mo | Code-Sync VM↔Laptop-Repo · atomares Schreiben · `fclose()` | Repo = Single Source of Truth; `status.json` sicher geschrieben | 7 |
| Di | Nginx-Config (Cert, Redirect, fastcgi_pass) + Mount | `curl -k https://localhost` liefert API/Dashboard | 7 |
| Mi | Host-Crons (Prüf-Takt + Backup) + Backup-Skript | Cron löst PHP aus; Backup packt Repo+Volumes; 3-2-1-Vereinfachung dokumentiert | 7 |
| Do | Dashboard minimal (HTML/CSS/JS, `fetch('/api/status')`) | Karten grün/rot pro Dienst | 7 |
| Fr | Doku Kap. 5 aus Sammlung destillieren (im Doku-Chat) | Erste fertige Kapitel-Seiten | 4 |

### Phase 2 – Woche 4 (KW 44): Doku & QS *(Exit: Doku abgabereif)*
| Tag | Aufgabe | Ziel/Deliverable | h |
|---|---|---|---|
| Mo | QS-Tag: Testprotokoll ausführen (up/refused/down/invalid, TLS, atomic write) + Ist-Werte | Beweise: Screenshots, `docker stats`, `df -h`, `free -h` | 7 |
| Di | Doku Kap. 2 (Tabellen! Kosten nach Kühnel-Formel) + Kap. 3 | Planungs-Kapitel steht | 7 |
| Mi | Doku Kap. 4 (Architektur, Abb. 1 + Legende) + Kap. 6 (QS) | Entwurf + Testprotokoll eingebettet | 7 |
| Do | Doku Kap. 7 (Soll-Ist, Fazit, Ausblick) + Kap. 8 Kundendoku | Abschluss + Admin-Handbuch | 7 |
| Fr | Formalia (Verzeichnisse, Glossar, Tippfehler, Querverweise) | Abgabereif | 4 |

### Phase 3 – Woche 5 (KW 45): Prüfung *(Exit: Generalprobe < 15 min, Mock bestanden)*

| Tag | Aufgabe | Ziel/Deliverable | h |
|---|---|---|---|
| Mo | Folien (10–12 Slides): Problem → Entscheidung → Architektur → Demo | Struktur steht | 7 |
| Di | Demo-Skript + trocken üben (3-Klick-Story: Dienst stoppen → rot → starten → grün) | Demo < 3 min stabil | 7 |
| Mi | Generalprobe (Stoppuhr, 13–14 min) + Mock-Fachgespräch (Sprechstunde Heitz!) | Zeit sicher, Wissenslücken bekannt | 7 |
| Do | Feinschliff, Glossar-Karten, Abgabe-Checkliste, Upload | Alles draußen | 7 |
| Fr | **Harter Puffer** | Versicherung | 4 |

---

## 8. ✅ Meilenstein-Checkliste (Lernziele – ohne Lösungen!)

### Phase A (Woche 3)

- [ ] A1 Repo ist Single Source of Truth (VM-Stand gespiegelt)
- [ ] A2 Socket-Leck geschlossen (jede Verbindung explizit freigegeben)
- [ ] A3 Atomares Schreiben: Leser sehen nie halbe JSON
- [ ] A4 TLS-Offloading erklärt: warum nginx das Cert terminiert, php-fpm nie 443 sieht
- [ ] A5 FastCGI-Weg eines Requests auf Port 9000 skizzierbar
- [ ] A6 Cron-Platzierung begründet (Aufgabe definiert Platzierung)
- [ ] A7 Backup: 3-2-1 auf Lab-Maßstab heruntergebrochen + Vereinfachung dokumentiert
- [ ] A8 Dashboard: Fetch auf API-Endpunkt, dynamische CSS-Klassen je Status
- [ ] A9 End-to-End-Beweis: Cron → PHP → JSON → Dashboard

### Phase B (Woche 4)

- [ ] B1 Tabelle 1 (Grobe Zeitplanung) gefüllt
- [ ] B2 Kostenplanung nach Kühnel-Formel
- [ ] B3 Make-or-Buy schriftlich (Argumente aus Sammlung)
- [ ] B4 Architektur-Kapitel mit Abb. 1 + Legende + Textverweis
- [ ] B5 Testprotokoll tabellarisch + Screenshot-Anhang
- [ ] B6 Soll-Ist-Vergleich aus Tagebuch (mit Differenzspalte)
- [ ] B7 Drei Abweichungen dokumentiert (ICMP→TCP, RZ→Verlag, fetch-Pfad)
- [ ] B8 Admin-Handbuch (Dienst ergänzen / Dashboard lesen / Restore)
- [ ] B9 Glossar mit eigenen Ankern
- [ ] B10 Formalia vollständig

### Phase C (Woche 5)

- [ ] C1 10–12 Folien, roter Faden
- [ ] C2 Demo-Skript (3-Klick-Story)
- [ ] C3 Generalprobe 13–14 min
- [ ] C4 Mock-Fachgespräch: 5 Kernfragen sicher beantwortet:
      1. Warum TCP statt ICMP? 2. Warum zwei Netze statt einem? 3. Warum Cron auf dem Host?
      4. Schutz vor Command-Injection im PHP-Skript? 5. Größtes dokumentiertes Restrisiko?
- [ ] C5 ≥ 20 Glossar-Karten aktiv
- [ ] C6 Abgabe-Checkliste abgearbeitet

---

## 9. 🚨 Risikomanagement / Kürzungsreihenfolge

Wenn Zeit not wird, in dieser Reihenfolge streichen:

1. Erweiterungsstufen (Ansible, Vagrant, SQLite, CI/CD) → nur Ausblick
2. Dashboard-Design → rein funktional
3. Backup-Skript → nur Volume-Sicherung, 3-2-1 als „geplant für Produktion"
4. ICMP-Erweiterung → bleibt raus (ist schon dokumentierte Scope-Entscheidung)

**Niemals kürzen:** Kern-Entscheidungen (TCP statt ICMP, Segmentierung, Make-or-Buy) = Fachgesprächs-Futter.
**Fail-Politik:** Failen ist erlaubt, wenn begründet + dokumentiert (Kap. 7 / Soll-Ist).

---

## 10. 📄 Doku-Masterplan

### 10.1 Struktur-Vorschlag (nur zwei Drehungen nötig)

- Bestehendes Gerüst Kap. 1–7 + Anhang bleibt.
- **NEU: Kap. 8 „Kundendokumentation"** (eigenes Bewertungskriterium!).
- **Kap. 6 konsequent als QS-Kapitel** führen (Testprotokoll + Beweise).

### 10.2 Kriterien-Mapping: Wo jede Entscheidung hinfließt

1. Kap. 1.5 Abgrenzung: ICMP raus aus MVP + tolerierte Restrisiken
2. Kap. 4.1/3.3 Architektur: beschreibende Absätze 1–7 (Stadtplan, Datenweg 443→TLS→FastCGI 9000, Prüfweg+Volume, zwei Netze+Multi-Homing, Abb.-Verweis+Legende)
3. Kap. 4.1/5.2 Härtung: Segmentierung (UFW=Perimeter blind für lateral; `internal: true`; Default-Bridge bewusst leer; Least Privilege; kein SUID-ping im MVP)
4. Kap. 5.x Monitoring-Logik: Prüf-Cron Host (Taktgeber vs. Worker)
5. Kap. 5.x Backup: Backup-Cron Host (Reichweite über Container-Grenzen)
6. Kap. 6 QS: Verifikationstests (`id`, `ls -l $(which ping)`, Ping als www-data, Connect-Tests)
7. Kap. 6/7: dokumentiertes Restrisiko + Erweiterungs-Cluster (Automatisierung / tiefere Messung / Segmentierung)

### 10.3 Benchmarks für Kap. 2/7

- **Kostenformel (Kühnel):** Azubi ≈ 8,65 €/h (1.151 €×12 ÷ (228 Tage×7 h)); Dozent 45 €/h; Gemeinkosten-Pauschale 15 €/h
- **Soll-Ist-Tabelle:** Phasen × (Soll | Ist | Differenz), Summe 160 = 160 wie Kühnel/Grothe
- **Detaillierte Phasen-Tabelle** in Anhang A1 (wie Kühnel Tabelle 4)

### 10.4 Doku-Chat-Erstprompt-Vorlage

> „Rolle: Doku-Werkstatt. Kontext: [Notizen-Auszug + Bewertungskriterium]. Aufgabe: Entwirf Abschnitt X in IHK-sachlichem Stil. Meine Kernaussagen: [Stichpunkte]. Regel: Kein Satz, den ich nicht in zwei Sätzen vertreten kann."

---

## 11. 🔓 Offene Entscheidungen (nur du!)

1. **Container 3** (ICMP-Referenz): umbauen zu „geschlossener Port = RST-Beweis" ODER als ICMP-Referenz in Erweiterung? (Nicht konsistent: lassen + behaupten, MVP prüfe alle Ziele)
2. **Abb. 1:** ICMP-Kasten gestrichelt im Hauptbild ODER separates Ausbau-Skizzenblatt? (Kriterium: in 10 s lesbar)
3. **Erweiterungs-Cluster:** „tiefere Messung" (ICMP+SNMP) zusammenfassen ODER Einzelliste?
4. **Dashboard-Scope:** minimal (Karten + Latenz) als MVP-Grenze bestätigen?
5. **Host-Ebene Erweiterung:** Weg A (echtes ICMP via `ping_group_range`) ODER Weg B (TCP-Simulation)?

---

## 12. 📖 Glossar-Depot (je 1 Satz, übernehmbar)

- **fsockopen:** PHP-Funktion, die eine Socket-Verbindung zu Host und Port öffnet und Fehler über Error-Code und -Message zurückgibt.
- **ECONNREFUSED (Error 111):** OS-Fehlercode: Zielrechner erreichbar, aber kein Prozess lauscht auf dem Port.
- **Internal Network (Docker):** Vom Host/Internet isoliertes Container-Netz, das nur Kommunikation innerhalb desselben Netzes erlaubt.
- **Read-only-Mount (ro):** Einbinden eines Verzeichnisses in einen Container mit reinem Leserecht.
- **Single Source of Truth:** Prinzip, dass es nur einen autoritativen Ort für Code/Daten (hier: Git-Repo) gibt.
- **Proof of Concept:** Funktionsfähiger Prototyp, der beweist, dass die technische Kernidee in der Praxis trägt.
- **Scope Creep:** Schleichendes, ungesteuertes Wachsen des Projektumfangs, das Zeitpläne zerstört.
- *Pflege:* Eigenes Glossar-Artefakt (Sammlung: SUID, CAP_NET_RAW, ping_group_range, RST, Timeout, Multi-Homing, …) + Doku-Anhang A1 laufend führen; Anker = deine Analogie.

---

## 13. Nächste Schritte (sofort)

1. Wochenplan Woche 3 (KW 43) in Excel eintragen + Montag uploaden
2. Offene Entscheidungen 1–5 fällen (PM-Chat)
3. Montag: Standup → Phase 1, Tag 1 (Code-Sync + atomic write) im Code-Chat
4. Tagebuch & Repo-Commits ab jetzt lückenlos
