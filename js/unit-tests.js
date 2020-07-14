function testFootnoteCountMatch() {
  let bottomFootnoteAmount = document.querySelectorAll('.footnote-bottom').length;
  let inlineFootnoteAmount = document.querySelectorAll('.footnote-inline').length;
  if (bottomFootnoteAmount !== inlineFootnoteAmount){
    throw new Error(`There are ${bottomFootnoteAmount} bottom footnotes, but ${inlineFootnoteAmount} inline footnotes.`)
  }
}
