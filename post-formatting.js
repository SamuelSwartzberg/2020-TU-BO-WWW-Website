tocbot.init({
  // Where to render the table of contents.
  tocSelector: '#table-of-contents',
  // Where to grab the headings to build the table of contents.
  contentSelector: '#main-article',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3, h4, h5, h6',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});

/* from https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

var footnoteCounter = 0;
//Footnotes
document.querySelectorAll('p, ul, ol, table').forEach((item, i) => {
  console.log(item);
  item.innerHTML = item.innerHTML.replace(/fn:\{([^\}]+)\}/g, (match, $1) => {
    console.log(match);
    footnoteCounter++;
    let bottomFootnote = htmlToElement(`<li id="fn-${footnoteCounter}-content"><a class="footnote" href="#fn-${footnoteCounter}">${footnoteCounter}</a><span>${$1}</span></li>`);
    document.querySelector('#footnote-container ol').appendChild(bottomFootnote);
    return `<a class="footnote" id="fn-${footnoteCounter}" href="#fn-${footnoteCounter}-content">${footnoteCounter}</a>`
    });
});

document.querySelectorAll('p, ul, ol, table').forEach((item, i) => {
  console.log(item);
  let fileLocation = document.location.href.split('.html')[0];
  item.innerHTML = item.innerHTML.replace(
    /fig:\{([^:]+):([^:]+):([^:]+):([^:]+)([^\}]+)\}/g,
    (match, captionText, side, size, url, moreUrls) => {
      console.log(match);
      if(moreUrls){
        let urlArray = moreUrls.split(":");
        var urlString = "";
        for (let urlElement of urlArray) {
          urlString += `<img src="${fileLocation}/${urlElement}" alt="${captionText}">`
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
