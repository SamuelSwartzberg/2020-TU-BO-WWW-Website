## Paper

Gruppe \##2, David Samuel (Sam) Swartzberg

## Konzept

Eine vanilla HTML/CSS/JS Website ohne Ansprüche ans Backend, die als Showcase für akademische oder ähnliche Werke des Autors fungiert, unabhängig davon, ob diese publiziert wurden. Wird aus Markdown-dateien (.md) generiert. Kann auch dafür genutzt werden, Paper, Essays und ähnliches ohne Stylingschwierigkeiten und unnötiges Markup zu schreiben.

### Zielgruppe

Studenten und ehemalige Studenten, Professoren und Lehrangestellte sowie andere Leute, die Papers, Essays, Artikel oder ähnliches teilen wollen. Kann auch als persönliche Homepage oder Blog fungieren.

### Inhalte

S.o.

### Making the site

Da wir keinen Server haben, müssen wir vor deployment das Markdown zu HTML umwandeln und einige andere kleine Tasks machen. Dafür muss das script init.sh aus einer shell aufrufen `./init.sh`. Init.sh verlangt als dependency `markdown-to-html`, was man so erhalten kann: `npm install -g cwjohan/markdown-to-html`. Ggf. muss man davor noch `npm` installieren. Nach jeder Änderung einer .md Datei muss das Script erneut laufen, um die HTML Dateien zu generieren. Änderungen an den HTML-Dateien selbst werden ohne Warnung überschrieben!

### Use Case & Features

#### Einfacher Schreibprozess

Markdown allows for incredibly rapid writing without worrying about formatting, and is sublimely readable even when not rendered, given you are using a reasonable text editor (For example Atom, although many work).
Compared to the two main alternatives, Word and Latex:
Markdown obstructs the writing process less than Word, with endlessly-breaking formatting, or Latex, which is too verbose in its syntax, should you not be writing in the natural sciences.
See further: https://blog.kdheepak.com/writing-papers-with-markdown.html

#### Easy Printing

Via CSS print styling, easy printing or export to .pdf.

#### Archival function

Show off your past writing while making it incredibly easy to edit out small errors. Since the text is stored as markdown, don't be worried that the file format will ever become unsupported, or produce errors or weird formatting after a couple of years.

#### Unified style

Since one CSS stylesheet is being applied across all posts, all your papers will have the same styling, without you even having to worry about it.

#### Self-Hosting

You control your instance of paperify, host it yourself, and can modify it as you see fit. No need to deal with researchgate or academia.edu and their incessant spam mail.

 ### Implementation of prior considerations from web research

 #### Links

 Possible appearance of deeplinks: Links below header, as sources in papers. Wegen Problematizität des Contents einzeln überprüfen.

 #### Impressum

 Link im Footer.

 #### Datenschutzerklärung

Link im Footer.

 ####  Frames / Hotlinking

 Keine.

 #### Cookies

Von haus aus keine - allerdings könnte je nach webserver der welche setzen.

#### Urheberrecht

##### Texte

Angenommen wird, dass der Websitenbesitzer nur seine eigenen Texte hochlädt.

##### Zitate

Generell sollten Zitate in einem wissenschaftlichem Werk den Standards des Rechts bezüglich Länge entsprechen.

##### Bilder

Können ggf. in artikeln vorkommen. Wenn, dann ist urheberrecht individuell zu klären. Die Bilder, die in time-of-eve.md zu sehen sind, sind screenshots von einer Serie, ich dürfte sie daher nicht verwenden, sobald ich die

#### Barrierefreiheit

- Nutzung von semantischen HTML elementen wie `<q>`, `<article>` etc. wo immer möglich.
- Alt-text für Bilder.
- Browser-eigene cmd/ctrl + / - funktion für zoom.
- Sprachliches Niveau der Texte nicht Barrierefrei! (inhärent in den texten)

 ### Mockups

 Simple Header - Body - Footer design.
 $INSERT SCREENSHOTS

 ### Navigational Structure

 One index.html, which contains 0 - n post preview items that link to each article.
 The links and the articles are generated automatically from markdown files.
 Sub-pages for the legally required stuff in the footer.

 ### List of Functions

 #### Extension of Markup - Footnotes

 Markup does not support footnotes out of the box. Specify them like so: `fn:{some footnote content}`.

 #### Extension of Markup - Figures

 Markup does not support figures out of the box. Specify them like so: `fig:{somecaption:someplace:somesize:someurl1(:optionally more urls)}`, where someplace is left|right|center and somesize is a value from 0 - 100 (percent).

 ## Style Guide

 ### Colors

 ### Typography

 ### Inspiration

 https://www.gwern.net/

 ## Thanks

 This page uses [tocbot](https://tscanlin.github.io/tocbot/) to generate tables of contents.

 ## Other

 Regex for replacing footnotes `\\\[(\d+)\\\]([^$]*?\n\1. +)(.*)`
