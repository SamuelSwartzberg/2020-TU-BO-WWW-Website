window.PagedConfig = {
	auto: false
	after: (flow) => { console.log("after", flow) },
};
document.querySelector('.print-pager').onclick = () => {
  window.PagedPolyfill.preview();
}
