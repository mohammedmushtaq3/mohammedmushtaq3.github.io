//Page Printing correction for headers and footers
function printForm(formName) {
  let page_header = $(".page-header");

  let header = $(`iframe[name="${formName}"`)
    .contents()
    .find(".page-header")
    .height();
  let footer = $(`iframe[name="${formName}"`)
    .contents()
    .find(".page-footer")
    .height();
  if (typeof header == "undefined") {
    header = 0;
  }
  if (typeof footer == "undefined") {
    footer = 0;
  }

  header += 10;
  footer += 10;
  // console.log("set header  - ", header, footer);
  $(`iframe[name="${formName}"`)
    .contents()
    .find(".style")
    .text(
      `@media print {.page-header-space { height: ${header}px!important;} .page-footer-space {height: ${footer}px!important;}}`
    );
  window.frames[formName].print();
}

function resizeHeaderFooter() {
  let header = $("header").height();
  let footer = $("footer").height();
  if (typeof header == "undefined") {
    header = 0;
  }
  if (typeof footer == "undefined") {
    footer = 0;
  }
  header += 10;
  footer += 10;
  $(".style").text(
    `@media print {.page-header-space { height: ${header}px!important;} .page-footer-space {height: ${footer}px!important;}}`
  );
}
resizeHeaderFooter();
