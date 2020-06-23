/*
Specify your data here!
*/

let firstName = "Sam";
let lastName = "Swartzberg";
let description =
`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
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
