let docLang = document.querySelector('html').lang;

function formatCSLLocale(twoLetterSpecifier) {
  let region = twoLetterSpecifier ==="en" ? "US" : twoLetterSpecifier.toUpperCase();
  return `${twoLetterSpecifier}-${region}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if(!document.querySelector('html.notoc')){
  tocbot.init({
    // Where to render the table of contents.
    tocSelector: '#table-of-contents',
    // Where to grab the headings to build the table of contents.
    contentSelector: '#main-article',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h2, h3, h4, h5, h6',
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: true,
    // How many heading levels should not be collapsed.
  // For example, number 6 will show everything since
  // there are only 6 heading levels and number 0 will collapse them all.
  // The sections that are hidden will open
  // and close as you scroll to headings within them.
    collapseDepth: 6,
    scrollSmooth: false
  });
}

// Citations

const Cite = require('citation-js');
let citedWorksSet = new Set();
let cslLocale = formatCSLLocale(docLang);
console.log(cslLocale);

function formatCustomCitationAPA(citationString) {
  console.log(citationString);
  let authorClassList ="";
  if(citationString.includes("“")) authorClassList += "actually-title";
  citationString= citationString.replace(/[“”]/g, "");
  citationString = citationString.slice(1,-1); //remove braces
  let citationStringArray = citationString.split(",");
  let authors = "".concat(...citationStringArray.slice(0,-1));
  let date = citationStringArray[citationStringArray.length-1].trim();
  return `<span class="citation"><span class="authors ${authorClassList}">${authors}</span><date class="publication-date">${date}</date></span>`;
}

/* from https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.querySelector('.site-name').innerHTML = `<span class='name first-name'>${firstName}</span><span class='name last-name'>${lastName}</span>`;
let noFootnotes = document.querySelector('html').classList.contains('nofootnotes');
let noFigures = document.querySelector('html').classList.contains('nofigures');

document.querySelectorAll('body').forEach((item, i) => {
  let htmlContent = item.innerHTML;
  if(htmlContent.includes("c::")){ // It's trying to cite via the global citation store
    let citations=htmlContent.split("c::"); //Maybe it wants to cite more than one thing
    htmlContent = citations[0];
    for (let citation of citations.slice(1)) {
      console.log(citation);
      if (!citation){continue;} // We don't care about values like empty strings or undefined;
      let citationString = citation.split(";;")[0]; //;; delimits the end of a citation, should the fn contain multiple or additional notes
      console.log(citationString);
      citedWorksSet.add(citationString);
      let citationObject = new Cite(citationMap.get(citationString));
      window.citationObject = citationObject;
      let formattedCitation = citationObject.format('citation', {format: 'html', template: 'apa', lang: cslLocale});
      formattedCitation = formatCustomCitationAPA(formattedCitation);
      htmlContent = htmlContent.concat(formattedCitation,...citation.split(";;").slice(1)); //rejoin everything we sliced off
    }
  }
  item.innerHTML = htmlContent;
});

var footnoteCounter = 0;
if (!noFootnotes){
  //Footnotes
  document.querySelectorAll('p, ul, ol, table').forEach((item, i) => {
    item.innerHTML = item.innerHTML.replace(/fn:\{([^\}]+)\}/g, (match, footnoteContent) => {
      footnoteCounter++;
      footnoteContent = capitalizeFirstLetter(footnoteContent);
      let bottomFootnote = htmlToElement(`<li id="fn-${footnoteCounter}-content"><a class="footnote" href="#fn-${footnoteCounter}">${footnoteCounter}</a><span>${footnoteContent}</span></li>`);
      document.querySelector('#footnote-container ol').appendChild(bottomFootnote);
      return `<a class="footnote" id="fn-${footnoteCounter}" href="#fn-${footnoteCounter}-content">${footnoteCounter}</a>`
      });
    document.querySelectorAll('blockquote p a.footnote').forEach((footnote, i) => {
      let parent = footnote.parentNode;
      while (parent.nodeName !== "BLOCKQUOTE"){
        parent = parent.parentNode;
      }
      let newFootnote = footnote.cloneNode(true);
      parent.appendChild(newFootnote);
      footnote.remove();
    });

  });
}
let previousCitation = "";
document.querySelectorAll('#footnote-container li > span').forEach((item, i) => {
    item.querySelectorAll('.citation').forEach((item, i) => {
      let currentCitation = item.innerHTML;
      if (previousCitation === currentCitation ){
        item.classList.add("ibid");
      }
      console.log(previousCitation===currentCitation);
      previousCitation = currentCitation;
    });
    console.log(item.querySelector('.citation'));
    if (!item.querySelector('.citation')) previousCitation = ""; //if there is a footnote with something else inbetween, don't use ibid

});


if(footnoteCounter===0){
  document.querySelector('#footnote-container').style.display = "none";
}

//Figures
console.log(noFigures);
if (!noFigures){
  document.querySelectorAll('p, ul, ol, table').forEach((item, i) => {
    console.log(item);
    let fileLocation = document.location.href.split('.html')[0];
    item.innerHTML = item.innerHTML.replace(
      /fig:\{([^:]+):([^:]+):([^:]+):([^:]+)([^\}\{]*)\}/g,
      (match, captionText, side, size, url, moreUrls) => {
        console.log(moreUrls);
        var urlString = "";
        if(moreUrls){
          let urlArray = moreUrls.split(":");
          for (let urlElement of urlArray) {
            if(urlElement){
              console.log(urlElement);
              urlString += `<img src="${fileLocation}/${urlElement}" alt="${captionText}">`;
            }

          }
        }
        let figureText =
        `<figure class="${side}" style="--size: ${size}%">
          <div class="image-container">
            <img src="${fileLocation}/${url}" alt="${captionText}">
            ${urlString}
          </div>
          <figcaption>${captionText}</figcaption>
        </figure>`
        return figureText;
      }
    );
  });
  document.querySelectorAll('figure').forEach((item, i) => {
    let newItem = item.cloneNode(true);
    if(!item.parentNode.matches("#main-article")){
      item.parentNode.before(newItem);
      item.remove()};

  });
}

// bibliography
let bibliographyContainerList = document.querySelector('#bibliography-container ol');
let sortedCitedWorksSet = Array.from(citedWorksSet).sort();
console.log(sortedCitedWorksSet);
for (let citedWork of sortedCitedWorksSet) {
  if (!citedWork){continue;} //we don't care about empty strings / undefined / whatever
  let citedWorkObject = new Cite(citationMap.get(citedWork));
  bibliographyContainerList.appendChild(
    htmlToElement(`<li> ${
      citedWorkObject.format(
        'bibliography',
        {format: 'html', template: 'apa', lang: cslLocale}
      )} </li>`
    )
  );
}

//Capitalize .ebd
document.querySelectorAll('#footnote-container li > span').forEach((item, i) => {
  if (item.children&&item.children[0]&&item.children[0].classList && item.children[0].classList.contains("ibid")){
    item.children[0].classList.add("capitalize");
  }
});
