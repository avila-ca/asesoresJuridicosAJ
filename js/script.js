const year = new Date().getFullYear();
const corporationName = "Asesores Jurídicos A.J.";
const phone = "617134246";
const email = "yastin25@gmail.com";

document.querySelector("#currentYear").innerHTML = `© ${year} ${corporationName}`;
document.querySelector("#phone").innerHTML = `${phone}`
document.querySelector("#email").innerHTML = `${email}`
