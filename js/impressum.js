massReplaceInnerHTMLWithArgument(
  [".legal-name", fullLegalName],
  [".legal-address-line-1", legalAdress.street],
  [".legal-address-line-2", `${legalAdress.postalCode} ${legalAdress.city}`],
  [".legal-email", legalEmail],
  [".legal-phone", legalPhone],
  [".legal-storage-duration", logfileStorageDurationDays],
)
document.querySelector('.site-name').innerHTML = `<span class='name first-name'>${firstName}</span><span class='name last-name'>${lastName}</span>`;
