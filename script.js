const btn1 = document.getElementById("monthlyBtn");
const btn2 = document.getElementById("yearlyBtn");

let basicPrice = document.getElementById("b-price-value");
let basicTenure = document.getElementById("b-price-tenure");
let enterprisePrice = document.getElementById("e-price-value");
let enterpriseTenure = document.getElementById("e-price-tenure");
let premiumPrice = document.getElementById("p-price-value");
let premiumTenure = document.getElementById("p-price-tenure");

btn1.addEventListener("click", function () {
  setPricing("monthly");
});

btn2.addEventListener("click", function () {
  setPricing("yearly");
});

window.addEventListener("DOMContentLoaded", function () {
  fadePrices();
});

function setPricing(type) {
  btn1.classList.toggle("pricing-button-m");
  btn1.classList.toggle("pricing-button-y");
  btn2.classList.toggle("pricing-button-y");
  btn2.classList.toggle("pricing-button-m");

  if (type === "monthly") {
    basicPrice.textContent = "59.00";
    basicTenure.textContent = "Monthly";
    enterprisePrice.textContent = "69.00";
    enterpriseTenure.textContent = "Monthly";
    premiumPrice.textContent = "99.00";
    premiumTenure.textContent = "Monthly";
  } else {
    basicPrice.textContent = "650.00";
    basicTenure.textContent = "Yearly";
    enterprisePrice.textContent = "780.00";
    enterpriseTenure.textContent = "Yearly";
    premiumPrice.textContent = "1100.00";
    premiumTenure.textContent = "Yearly";
  }
  fadeTenurePrices();
}

function fadePrices() {
  basicPrice.classList.remove("show");
  basicTenure.classList.remove("show");
  enterprisePrice.classList.remove("show");
  enterpriseTenure.classList.remove("show");
  premiumPrice.classList.remove("show");
  premiumTenure.classList.remove("show");

  setTimeout(() => {
    basicPrice.classList.add("show");
    basicTenure.classList.add("show");
    enterprisePrice.classList.add("show");
    enterpriseTenure.classList.add("show");
    premiumPrice.classList.add("show");
    premiumTenure.classList.add("show");
  }, 50);
}

function fadeTenurePrices() {
  basicPrice.classList.remove("show");
  basicTenure.classList.remove("show");
  enterprisePrice.classList.remove("show");
  enterpriseTenure.classList.remove("show");
  premiumPrice.classList.remove("show");
  premiumTenure.classList.remove("show");
  setTimeout(() => {
    basicPrice.classList.add("show");
    basicTenure.classList.add("show");
    enterprisePrice.classList.add("show");
    enterpriseTenure.classList.add("show");
    premiumPrice.classList.add("show");
    premiumTenure.classList.add("show");
  }, 650);
}

const hamburger = document.getElementById("hamburger");
const menuItems = document.getElementById("menu-items");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!isOpen));
  hamburger.textContent = isOpen ? "☰" : "✕";
  menuItems.classList.toggle("show");
});

const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function setError(element, message) {
  const input = element.parentElement;
  const displayError = input.querySelector(".error");

  displayError.innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
}

function setSuccess(element) {
  const input = element.parentElement;
  const displayError = input.querySelector(".success");

  displayError.innerText = "";
  input.classList.add("success");
  input.classList.remove("error");
}
function validateInputs() {
  nameValue = username.value.trim();
  emailValue = email.value.trim();
  messageValue = message.value.trim();

  if (nameValue === "") {
    setError(username, "Username is required");
  } else if (nameValue.length >= 15) {
    setError(username, "Incorrect username");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "email is required");
  } else if (!validateEmail(email)) {
    setError(email, "Wrong email format");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    setError(message, "Message is required");
  } else if (messageValue.length > 100) {
    setError(message, "Message is too long");
  } else {
    setSuccess(message);
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

$(".my-rating").starRating({
  initialRating: 5,
  starSize: 25,
});
