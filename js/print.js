
document.querySelector('.print-pager').onclick = () => {
  console.log("paging");
  document.querySelectorAll('.footnote-inline').forEach((item, i) => {
    let bottomFootnote = document.querySelector("#"+item.href.split("#")[1]);
    item.outerHTML += `<span id="${bottomFootnote.id}" class="${bottomFootnote.classList.value}">${bottomFootnote.innerHTML}</span>`;
  });
  document.querySelector('.footnote-container').outerHTML = "";
  window.PagedPolyfill.preview();
  Paged.registerHandlers(class extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);

    }

    afterRendered(pages) {
      for (var page of pages) {
        var footnotes = page.element.querySelectorAll('.footnote-bottom');
        console.log(page);
        if (footnotes.length === 0) {
          continue;
        }

        var pageContent = page.element.querySelector('.pagedjs_page_content');
        var hr = document.createElement('hr');
        var footnoteArea = document.createElement('div');

        pageContent.style.display = 'flex';
        pageContent.style.flexDirection = 'column';

        hr.className = 'footnote-break';
        hr.style.marginTop = 'auto';
        hr.style.paddingTop = "0.5em";
        hr.style.marginBottom = "1em";
        hr.style.marginLeft = 0;
        hr.style.marginRight = 'auto';
        hr.style.width = "20%";
        pageContent.appendChild(hr);

        footnoteArea.className = 'footnote-area';
        pageContent.appendChild(footnoteArea);

        for (var footnote of footnotes) {

          footnoteArea.appendChild(footnote);

        }
      }
    }
  });
}
