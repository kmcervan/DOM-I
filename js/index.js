const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Header
const nav = document.querySelectorAll("a");
const navArray = Array.from(nav);
navArray[0].textContent = "Services";
navArray[1].textContent = "Product";
navArray[2].textContent = "Vision";
navArray[3].textContent = "Features";
navArray[4].textContent = "About";
navArray[5].textContent = "Contact";

// Section CTA
const hOne = document.querySelector("h1");
hOne.textContent = siteContent["cta"]['h1'];
hOne.innerHTML = "DOM <br> IS <br> AWESOME";

// Section CTA Image
const ctaImage = document.querySelector("#cta-img");
ctaImage.src = "img/header-img.png";

// Section CTA Button
const button = document.querySelector("button");
button.textContent = "Get Started";

// Main-content
const hFour = document.querySelectorAll(".text-content h4");
const fourArray = Array.from(hFour);
hFour[0].textContent = "Features";
hFour[1].textContent = "About";
hFour[2].textContent = "Services";
hFour[3].textContent = "Product";
hFour[4].textContent = "Vision";
const pText = document.querySelectorAll(".text-content p");
const pArray = Array.from(pText);
pText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pText[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const midImg = document.querySelector(".middle-img");
midImg.src = "img/mid-page-accent.jpg";

// Section Contact
const hFourBot = document.querySelector(".contact h4");
hFourBot.textContent = "Contact";
const pBot = document.querySelectorAll(".contact p");
const pBotArr = Array.from(pBot);
pBot[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
pBot[1].textContent = "1 (888) 888-8888";
pBot[2].textContent = "sales@greatidea.io";

// Footer
const footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";
