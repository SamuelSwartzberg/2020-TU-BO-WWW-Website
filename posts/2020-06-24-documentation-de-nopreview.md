title|Paperify
date|24.06.2020
abstract|Aus Markdown-Dateien eine Sammlung von akademischen Papers, ansprechend formatiert, generieren. Dieser Text ist auch auf <a href="2020-06-24-documentation-en">Englisch</a> verfügbar. Von David Samuel (Sam) Swartzberg, Gruppe 2.
arguments|nofootnotes nofigures
## Konzept

Eine vanilla HTML/CSS/JS Website ohne Ansprüche ans Backend, die als Showcase für akademische oder ähnliche Werke des Autors fungiert, unabhängig davon, ob diese publiziert wurden. Wird aus Markdown-dateien (.md) generiert. Kann auch dafür genutzt werden, Paper, Essays und ähnliches ohne Stylingschwierigkeiten und unnötiges Markup zu schreiben.

### Zielgruppe

Studenten und ehemalige Studenten, Professoren und Lehrangestellte sowie andere Leute, die Papers, Essays, Artikel oder ähnliches teilen wollen. Kann auch als persönliche Homepage oder Blog fungieren.

### Inhalte

Papers, Essays, Artikel.

### Deployment

Da wir keinen Server haben, müssen wir vor deployment das Markdown zu HTML umwandeln und einige andere kleine Tasks machen. Dafür muss das script init.sh aus einer shell aufrufen `./init.sh`. Init.sh verlangt als dependency `markdown-to-html`, was man so erhalten kann: `npm install -g cwjohan/markdown-to-html`. Ggf. muss man davor noch `npm` installieren. Nach jeder Änderung einer .md Datei muss das Script erneut laufen, um die HTML Dateien zu generieren. Änderungen an den HTML-Dateien selbst werden ohne Warnung überschrieben!

### Use Case & Features

Einfacher Schreibprozess:

In Markdown zu schreiben erlaubt einem, sich auf dem Inhalt zu konzentrieren, ohne sich um die Formatierung Gedanken zu machen. Markdown ist ein Plaintext-Format, also eines, das mit jedem gängigen Text-Editor bearbeitet werden kann - allerdings ist ein Code-Editor wie Atom zu empfehlen. Dinge wie Überschriften, Links, Zitate werden mittels einer sehr einfachen Syntax markiert. [Hier gibt es einen Guide.](https://guides.github.com/features/mastering-markdown/)
Verglichen mit Word und Latex:
Erlaubt schnelleres schreiben als Word, weil man sich nicht sorgen machen muss, dass eine Handlung wie copy/paste Einfluss auf die Formatierung irgendwo anders hat, und weil man sich sicher sein kann, dass Dinge wie Zitate automatisch richtig formatiert werden. Selbst die Anführungszeichen werden automatisch eingefügt!
Leichter zu lesen als Latex, weil die Datei nicht so aussieht:

```
\\section{Section Name}
This is text in the section
\\subsection{Sub Section Name}
The following is a list in this subsection
\\begin{enumerate}
\\item The first \\textbf{bold} item
\\begin{enumerate}
  \\item Nested item 1
  \\item Nested item 2
\\end{enumerate}
\\item The second \\textit{italicized} item
\\item The third etc \\ldots
\\end{enumerate}
```

Andere Features:

- *Drucken*: Via der Browser-Druckfunktion, dort ebenfalls Export zu .pdf.
- *Archivieren*: Da die Dateien Plain-Text sind, gibt es keinen Grund, warum sie je nicht mehr funktionieren oder inkompatibel werden sollten. Kleine Fehler sind leicht zu entfernen.
- *Einheitliche Formatierung*: Da alle Dateien von einem Set CSS-Dateien formatiert werden, werden alle Paper automatisch dieselbe Formatierung haben. Jede Änderung am CSS wird sofort auf alle Paper angewandt!
- *Self-Hosting*: Du kannst deine Paperify-Instanz modifizieren, wie du willst, und dort hosten, wo du willst.

### Umsetzung der Ergebnisse der Web-Recherche

- *Links*: Der Besizter der Paperify-Instanz kann selber Content verlinken. Wegen Problematizität des Contents einzeln überprüfen.
- *Impressum*: Link im Footer.
- *Datenschutzerklärung*: Link im Footer.
- *Frames / Hotlinking*: Keine.
- *Cookies*: Von haus aus keine - allerdings könnte je nach Webserver dieser welche setzen.

Urheberrecht:

- *Texte*: Angenommen wird, dass der Websitenbesitzer nur seine eigenen Texte hochlädt.
- *Zitate*: Generell sollten Zitate in einem wissenschaftlichem Werk den Standards des Rechts bezüglich Länge entsprechen.
- *Bilder*: Können ggf. in Papers vorkommen. Wenn, dann ist Urheberrecht individuell zu klären.

Barrierefreiheit:

- Nutzung von semantischen HTML elementen wie `<q>`, `<article>` etc. wo immer möglich.
- Alt-text für Bilder.
- Browser-eigene cmd/ctrl + / - funktion für Zoom.
- Sprachliches Niveau der Texte nicht Barrierefrei! (inhärent in den Texten)

### Mockups

Einfaches Header - Body - Footer Design.
$INSERT SCREENSHOTS

### Struktur

Eine index.html seite, die 0 - n Snippets enthält, die jeweils auf die Paper-Seiten verlinken.
Die Links und die Paper-Seiten werden automatisch aus den Markdown-Dateien generiert.

### Unique Features

#### Fußnoten

 Automatisch nummerierte und verlinkte Fußnoten. Diese sind nicht Teil der Markdown-Syntax, sondern sind in JS realisiert. Syntax: `fn:{Inhalt der Fußnote}`.

#### Extension of Markup - Figures

Bilder mit Bildunterschrift, an denen der Text vorbeifließt. Diese sind nicht Teil der Markdown-Syntax, sondern sind in JS realisiert. Syntax: `fig:{Bildunterschrift:Platzierung:Größe:Bildurl(:Beliebig viele weitere URLs)}`
Platzierung erlaubt als Werte `left` `right` `center` und Größe Werte von 0 - 100.

## Style-Guide

### Farben

- *Text*: Schwarz
- *Links* & *Schwächerer Text*: rgba(0,0,0,0.6), also Schwarz mit 40% Transparenz -> Mittelgrau
- *Code*, *Tabellen*, *Inhaltsverzeichnis*: Verschiedene rgba(0,0,0,?)-Werte von 0.02 - 0.3 -> Hellgrau

Ziel hinter der Farbgebung war ein seriöses, akademisch-anmutendes, einfach zu lesendes Design.

### Typographie

#### Schriftarten

Alle Schriftarten sind von Google Fonts, deren Fonts beliebig im Web nutzbar sind.

- *Haupt-Schriftart*: Source Serif Pro
- *Header-Schriftart*: Libre Baskerville
- *Code-Schriftart*: Inconsolata

Source Serif Pro empfahl sich, weil sie eine Serifen-Schrift ist, (subjektiv gesehen) schön ist, und nicht so oft genutzt wird wie bspw. die Latex-Schriftart, der Website also einen eigenen Charakter verleiht.

#### Größe, Gewicht, Abstand

Die Idee hier war, die Schrift möglichst unauffällig zu gestalten, um nicht abzulenken, aber trotzdem den Überschriften etc. genug Fokus zu verleihen, um das Scannen des Texts zu ermöglichen. Daher haben die Überschriften, mit Ausnahme der Seitenüberschrift und den Top-Level Unterüberschriften die selbe Schriftgröße wie der Text, und arbeiten mehr mit margin-top und margin-bottom.
Die restlichen Merkmale versuchen sowohl elegant zu sein, als auch sich nicht zu weit von den Konventionen von akdemischen Design zu entfernen.

### Inspiration

https://www.gwern.net/

## Danksagung

Paperify nutzt [tocbot](https://tscanlin.github.io/tocbot/), um das Inhaltsverzeichnis zu generieren.

## Finale Worte

Diese Dokumentation wurde in Markdown geschrieben und mittels Paperify formattiert!
