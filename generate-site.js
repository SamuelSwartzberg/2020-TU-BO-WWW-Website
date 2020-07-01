/* insert info into document */
let nameHeader = document.querySelector(".name-header");
let contactLinkList = document.querySelector(".contact-link-list");
let personDescription = document.querySelector(".person-description");

nameHeader.innerHTML = `<span class='name first-name'>${firstName}</span><span class='name last-name'>${lastName}</span>`;
document.querySelector('title').innerHTML= `${firstName} ${lastName}'s Papers`;
document.querySelector('meta[name=description]').content= description;
document.querySelector('.profile-image').alt= `A picture of ${firstName} ${lastName}.`;
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
