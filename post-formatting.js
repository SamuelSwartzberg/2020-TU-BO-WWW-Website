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
  collapseDepth: 6
});

/* from https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.querySelector('.site-name').innerHTML = `<span class='name first-name'>${firstName}</span><span class='name last-name'>${lastName}</span>`;

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
if(footnoteCounter===0){
  document.querySelector('#footnote-container').style.display = "none";
}

//Figures
document.querySelectorAll('p, ul, ol, table').forEach((item, i) => {
  console.log(item);
  let fileLocation = document.location.href.split('.html')[0];
  item.innerHTML = item.innerHTML.replace(
    /fig:\{([^:]+):([^:]+):([^:]+):([^:]+)([^\}]*)\}/g,
    (match, captionText, side, size, url, moreUrls) => {
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
