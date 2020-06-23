/*
Specify your data here!
*/

let firstName = "Sam";
let lastName = "Swartzberg";
let description =
`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
let links = /* [text, href] */[
  ["Home page", "samswartzberg.com"],
  ["me@samswartzberg.com", "mailto:samswartzberg.com"]];
let fullLegalName = "David Samuel Swartzberg";
let legalEmail = "me@samswartzberg.com";
let legalPhone = "+49 173 35 72";
let legalAdress = {
  street: "Bogenstraße 10",
  postalCode: "14169",
  city: "Berlin"
}
let logfileStorageDurationDays = 7;

/*
END
*/

/* Global Helpers /*/

function massReplaceInnerHTMLWithArgument(...args) {
  // requires arguments [selector, replacement]
  for (let [selector, replacement] of args) {
    document.querySelector(selector).innerHTML = replacement;
  }
}
