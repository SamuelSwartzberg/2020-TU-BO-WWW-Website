
document.querySelector('.print-pager').onclick = () => {
  console.log("paging");
  window.PagedPolyfill.preview();
}
