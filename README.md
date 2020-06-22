# Paperify.me

By Group \#2, sole member David Samuel (Sam) Swartzberg

# Concept

A self-hosted vanilla HTML/CSS/JS site that acts as a storage for all your academic work, published or not, generated from Markdown files. Can also act as an easy way to write papers for people who don't know or don't want to deal with Latex, and then to print them.

## Target Audience

Unpublished/Little-published academics who want to share their work, perhaps on a personal home page.

## Making the site

Since this site runs completely client-side and can't rely on a server to do the converting, whenever you change a markdown file, you must run the init.sh script.
For which you need to `npm install -g cwjohan/markdown-to-html`, for which you need to install `npm` if you haven't already.

## Use Case & Unique Features

### Ease of Writing

Markdown allows for incredibly rapid writing without worrying about formatting, and is sublimely readable even when not rendered, given you are using a reasonable text editor (For example Atom, although many work).
Compared to the two main alternatives, Word and Latex:
Markdown obstructs the writing process less than Word, with endlessly-breaking formatting, or Latex, which is too verbose in its syntax, should you not be writing in the natural sciences.
See further: https://blog.kdheepak.com/writing-papers-with-markdown.html

### Easy Printing

### Eternal Archive

### Extensibility

### Self-Hosting

 ## Implementation of prior considerations from web research

 ## Mockups

 ## Navigational Structure

 One index.html, which contains 0 - n cards that link to each article.
 The links and the articles are generated automatically from markdown files.
 Sub-pages for the legally required stuff.

 ## List of Functions

 ### Extension of Markup - Footnotes

 Markup does not support footnotes out of the box. Specify them like so: `fn:{some footnote content}`.

 # Style Guide

 ## Colors

 ## Typography

 ## Inspiration

 https://www.gwern.net/

 # Thanks

 This page uses [tocbot](https://tscanlin.github.io/tocbot/) to generate tables of contents.

 # Other

 Regex for replacing footnotes `\\\[(\d+)\\\]([^$]*?\n\1. +)(.*)`
