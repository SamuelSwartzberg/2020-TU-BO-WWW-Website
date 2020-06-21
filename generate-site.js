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
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
let links = /* [text, href] */[
  ["Home page", "samswartzberg.com"],
  ["Lorem ipsum", "https://www.rickrolled.com/"]]

/*
END
*/

/* insert info into document */
let nameHeader = document.querySelector(".name-header");
let contactLinkList = document.querySelector(".contact-link-list");
let personDescription = document.querySelector(".person-description");

nameHeader.innerHTML = `<span class='name first-name'>${firstName}</span><span class='name last-name'>${lastName}</span>`;
let linkListInnerHTML = "";
for (var [text, href] of links) {
  linkListInnerHTML += `<li><a href='${href}'>${text}</a></li>`
}
contactLinkList.innerHTML = linkListInnerHTML;
let descriptionLineArray = description.split('\n');
let descriptionInnerHTML = "";
for (var line of descriptionLineArray) {
  descriptionInnerHTML += `<p>${line}</p>`;
}
personDescription.innerHTML = descriptionInnerHTML;
