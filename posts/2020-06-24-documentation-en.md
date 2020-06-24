title|Paperify
date|24.06.2020
abstract|Generate a personal website of papers, nicely and academically formatted, from Markdown files. This text is also available in <a href="2020-06-24-documentation-de-nopreview"> German</a>.
arguments|nofootnotes nofigures
By Group \##2, sole member David Samuel (Sam) Swartzberg

## Concept

A self-hosted vanilla HTML/CSS/JS site that acts as a storage for all your academic work, published or not, generated from Markdown files. Can also act as an easy way to write papers for people who don't know or don't want to deal with Latex, and then to print them.

### Target Audience

Unpublished/Little-published academics who want to share their work, perhaps on a personal home page.

### Content

Term papers, essays, and any other academic or academia-adjacent writing.

### Making the site

Since this site runs completely client-side and can't rely on a server to do the converting, whenever you change a markdown file, you must run the init.sh script.
For which you need to `npm install -g cwjohan/markdown-to-html`, for which you need to install `npm` if you haven't already.

### Use Case & Unique Features

#### Ease of Writing

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
