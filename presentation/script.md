cd to dir
run python -m SimpleHTTPServer 8000
navigate to localhost:8000

Konzept

Eine vanilla HTML/CSS/JS Website ohne Ansprüche ans Backend, die als Showcase für akademische oder ähnliche Werke des Autors fungiert - unabhängig davon, ob diese publiziert wurden.
Zielgruppe: Student\*innen und ehemalige Student\*innen, Professor*innen und Lehrangestellte sowie andere, die Papers, Essays, Artikel oder Ähnliches teilen wollen. Kann auch als Blog o. Ä. fungieren.
Inhalte: Papers, Essays, Artikel.

Aufbau

Eine index.html-Seite, die 0 - n Snippets enthält, die jeweils auf die Paper-Seiten verlinken.

Grundlayout

Einfaches Header - Body - Footer Design:
> Open index.html
Oben beim bild ist der header
Hier im index.html sind diese posts der content
und hier unten ist der Footer
> click on a post
Im eigentlichen sinne ist nur der link hier oben der Header
Aber relativ zum post gesehen ist die h1 plus abstract, name und datum teil des headers, das TOC ist ambig
der footer ist gleich
Es resized angenehm auf mobile, aber das layout ändert sich nicht
-> Probiert es auf mobile aus, wenn ihr wollt

Umsetzung

Das waren die basics
jetzt wird es ein bisschen kompliziert
(Wenn ihr wollt, könnt ihr das alles in der Dokumentation nachlesen)

Because: What's the point?

Wenn ich einen blog will, kann ich auch WP/Squarespace/Tumblr/whatever nehmen
So why use this?
Basically, weil es super einfach ist, hiermit schöne papers zu schreiben.

Basically schreibt man die dokumente in markdown, und dann werden sie zu HTML konvertiert.
Was ist markdown?
Eine sprache, in der man text formattieren kann.
Wird z.b. in Github readmes oder reddit posts genutzt.
Basically Latex, nur leichter zu lesen
> Latex examples
> .md example

Und im gegensatz zu word können wir viele sachen leichter machen:

- *Einheitliche Formatierung*: Da alle Dateien von einem Set CSS-Dateien formatiert werden, werden alle Paper automatisch dieselbe Formatierung haben. Jede Änderung am CSS wird sofort auf alle Paper angewandt!
- fußnoten
- Automatisch nummerierte und verlinkte Fußnoten. Diese sind nicht Teil der Markdown-Syntax, sondern sind in JS realisiert. Syntax: `fn:{Inhalt der Fußnote}`.
> Show some paper, click around with footnotes
- Abbildungen
Bilder mit Bildunterschrift, an denen der Text vorbeifließt. Diese sind nicht Teil der Markdown-Syntax, sondern sind in JS realisiert. Syntax: `fig: <wbr> {Bildunterschrift:Platzierung:Größe:Bildurl(:Beliebig viele weitere URLs)}`
Resizen auch intelligent, wenn der nutzer auf mobile ist
> Show time of eve, scroll and resize a little
- Auto-citationsmanagement
automatische referenzen/citationen einfügen, ohne sich darüber gedanken zu machen, ob man sich nicht verschrieben/Im jahr geirrt hat etc.
Wenn in fußnoten, dann automatisches Ersetzen von aufeinanderfolgenden titeln mit ebd.
> show joseigo.html, show those features
Das funktioniert so, dass ihr in einer JavaScript datei ein metadaten-objekt definiert, und dieses dann im text einfach referenziert. details gibt's in der dokumentation, formatiert wird momentan nach APA
