function testFootnoteCountMatch() {
  let bottomFootnoteAmount = document.querySelectorAll('.footnote-bottom').length;
  let inlineFootnoteAmount = document.querySelectorAll('.footnote-inline').length;
  if (bottomFootnoteAmount !== inlineFootnoteAmount){
    throw new Error(`There are ${bottomFootnoteAmount} bottom footnotes, but ${inlineFootnoteAmount} inline footnotes.`)
  }
}

function testDoubleSpace(item){
  if (item.innerText.includes("  ")){
    console.log(`Found double whitespace in`);
    console.log(item);
    doubleSpaceCounter++;
  }
}

function findUnparsedRemnants(item){
  let unparsedRegex = /fnv?:\{/g;
  if (item.innerText.match(unparsedRegex)){
    console.log(item);
    throw new Error("There are unparsed remains of footnotes in the above item.")
  }
}

let doubleSpaceCounter = 0;
document.querySelectorAll('p, ul, ol, figcaption, h1, h2, h3, h4, h5, h6, blockquote').forEach((item, i) => {
  testDoubleSpace(item);
  findUnparsedRemnants(item);
});
console.log("Found " + doubleSpaceCounter + " double spaces.");

function findLostFootnotes(){
  document.querySelectorAll(".footnote-inline").forEach(item=>{
    let bottomFootnote = document.querySelector(item.href);
    if (!bottomFootnote){
      throw new Error(`The footnote ${item.id} has lost it's bottom counterpart.`)
    }
    let bottomFootnoteContent = bottomFootnote.querySelector(".footnote-content");
    if (!bottomFootnoteContent){
      throw new Error(`The footnote ${item.id} has lost it's bottom content.`)
    } else if (bottomFootnoteContent.innerText.length === 0){
      throw new Error(`The footnote ${item.id} has lost it's bottom contents text content.`)
    }
  })
}

testFootnoteCountMatch();
findLostFootnotes();
