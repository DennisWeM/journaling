# Journaling-Anwendung

Webbasierte Journaling-Anwendung, die im Rahmen einer Bachelorarbeit im Studiengang Medieninformatik entwickelt wurde.

Ziel der Anwendung ist der Vergleich von freiem und geführtem digitalem Journaling hinsichtlich der subjektiv wahrgenommenen Nutzererfahrung.

## Varianten

Die Anwendung besteht aus zwei getrennten Varianten:

### Freies Journaling

Beim freien Journaling können Gedanken und Erlebnisse ohne vorgegebene Struktur schriftlich festgehalten werden.

### Geführtes Journaling

Beim geführten Journaling werden nacheinander sieben Reflexionsfragen angezeigt. Die Fragen unterstützen die strukturierte Auseinandersetzung mit Erlebnissen, Gedanken und Gefühlen.

## Funktionen

- Erstellen von Journaling-Einträgen
- Freies und geführtes Journaling
- Lokale Speicherung der Einträge
- Übersicht bisheriger Einträge
- Gruppierung der Einträge nach Datum
- Aufklappbare Einträge
- Responsives Design

## Technologien

Die Anwendung wurde als reine clientseitige Webanwendung umgesetzt.

- HTML5
- CSS3
- JavaScript
- Material Design 3 / Material Web
- Local Storage

Es wird kein Backend und keine externe Datenbank verwendet.

## Datenspeicherung

Journaling-Einträge werden ausschließlich über den Local Storage des verwendeten Browsers gespeichert.

Die eingegebenen Inhalte werden nicht an einen Server übertragen. Dadurch sind gespeicherte Einträge nur im jeweiligen Browser und auf dem jeweiligen Gerät verfügbar.

Beim Löschen der Browserdaten können die gespeicherten Einträge verloren gehen.

## Projektstruktur

    journaling-app/
    ├── free/
    │   ├── index.html
    │   ├── new_entry.html
    │   ├── entries.html
    │   ├── finish.html
    │   └── js/
    │
    ├── guided/
    │   ├── index.html
    │   ├── new_entry.html
    │   ├── entries.html
    │   ├── finish.html
    │   └── js/
    │
    └── shared/
        ├── css/
        └── js/

Die beiden Varianten verwenden gemeinsame Styles und Funktionen. Variantenabhängige Funktionen sind in den jeweiligen Verzeichnissen getrennt implementiert.

## Nutzung

Die Anwendung kann direkt über einen Webbrowser verwendet werden.

### Freies Journaling

`/free/`

### Geführtes Journaling

`/guided/`

## Kontext

Das Projekt wurde als Untersuchungsinstrument für eine Bachelorarbeit entwickelt. Im Mittelpunkt steht nicht die Entwicklung einer vollumfänglichen Journaling-Plattform, sondern die Bereitstellung zweier möglichst vergleichbarer Varianten für die Evaluation von freiem und geführtem Journaling.

## Version

Version 1.0 – Evaluationsversion