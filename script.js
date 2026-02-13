let mm = gsap.matchMedia();

// Initialize Lenis
const lenis = new Lenis();
function lenisScrolling() {
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenisScrolling();

// GSAP Animation

gsap.from("#website-logo", {
  y: -60,
  duration: 0.8,
  opacity: 0,
});

let NavMenu = document.querySelector("#NavMenu");
let NavLink = document.querySelector("#nav-dialogue");

NavMenu.addEventListener("click", () => {
  NavLink.classList.toggle("hidden");
});

const NavLinks = document.querySelectorAll(".Links");

NavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const id = link.dataset.target;
    lenis.scrollTo(`#${id}`);
  });
});

// Scroll Button function to top
function ScrollBtn() {
  let scrollBox = document.querySelector("#scrollBox");
  let scrollBtn = document.querySelector("#scrollBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollBox.classList.remove("hidden");
    } else {
      scrollBox.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    lenis.scrollTo(0);
  });
}
ScrollBtn();

// Theme functionality

function themefunctionality() {
  let themeBtn = document.querySelector("#themeBtn");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

themefunctionality();

// Login and sign up form functionality

let userProfile = document.querySelector("#userProfile");
let SignUp = document.querySelector("#SignUp");
let SignupForm = document.querySelector("#SignupForm");
let MainForm = document.querySelector("#MainForm");
let loginBtn = document.querySelector("#loginBtn");
let closeForm = document.querySelector("#closeForm");
let closeForm2 = document.querySelector("#closeForm2");

userProfile.addEventListener("click", () => {
  MainForm.classList.toggle("hidden");
});

closeForm.addEventListener("click", () => {
  MainForm.classList.add("hidden");
});

closeForm2.addEventListener("click", () => {
  SignupForm.classList.add("hidden");
});

SignUp.addEventListener("click", () => {
  //MainForm.style.display = "none";
  MainForm.classList.toggle("hidden");
  SignupForm.classList.remove("hidden");
});

loginBtn.addEventListener("click", () => {
  MainForm.classList.toggle("hidden");
  SignupForm.classList.add("hidden");
});

// LocalStorage setItem method

function getfromLocalStorage() {
  return JSON.parse(localStorage.getItem("fooditems")) || [];
}

function saveToLocalStorage(fooditems) {
  return localStorage.setItem("fooditems", JSON.stringify(fooditems));
}

// Order buttons functionality
let selecteditem = null;
let orderBtns = document.querySelectorAll(".orderBtn");
let ClosePopup = document.querySelector("#ClosePopup");
let foodQtyInput = document.querySelector("#foodQtyInput");
let ConfirmOrder = document.querySelector("#ConfirmOrder");

orderBtns.forEach((orderBtn) => {
  orderBtn.addEventListener("click", function () {
    selecteditem = this.closest(".food-items");

    let name = selecteditem.dataset.name;
    let price = Number(selecteditem.dataset.price);
    let image = selecteditem.dataset.image;

    orderPopup();
  });
});

// Confirm order button functionality
ConfirmOrder.addEventListener("click", () => {
  let Qty = Number(foodQtyInput.value);
  if (!Qty) return;

  popupModal.classList.add("hidden");

  addToCartfunction(
    selecteditem.dataset.name,
    Number(selecteditem.dataset.price),
    selecteditem.dataset.image,
    Qty,
  );
});

function closePopup() {
  ClosePopup.addEventListener("click", () => {
    popupModal.classList.add("hidden");
  });
}

closePopup();

// Add to cart functionality

function addToCartfunction(name, price, image, Qty) {
  let foodcart = getfromLocalStorage();

  let existingfood = foodcart.find((item) => item.name === name);

  if (existingfood) {
    existingfood.quantity += Qty;
  } else {
    foodcart.push({ name, image, price, quantity: Qty });
  }
  saveToLocalStorage(foodcart);
  FoodCount();
}

// Food count item functionality in cart

function FoodCount() {
  let itemqty = document.querySelector("#foodqty");
  let foodcart = getfromLocalStorage();

  let itemcount = foodcart.reduce((prev, curr) => prev + curr.quantity, 0);

  itemqty.innerText = `${itemcount}`;
}

FoodCount();

//Show order popup modal

function orderPopup() {
  let popupModal = document.querySelector("#popupModal");
  let OrderFoodImg = document.querySelector("#OrderFoodImg");
  let OrderFoodName = document.querySelector("#OrderFoodName");
  let OrderFoodPrice = document.querySelector("#OrderFoodPrice");
  popupModal.classList.remove("hidden");

  OrderFoodImg.src = selecteditem.dataset.image;
  OrderFoodName.textContent = selecteditem.dataset.name;
  OrderFoodPrice.textContent = `Price: ₹${selecteditem.dataset.price}`;
}
