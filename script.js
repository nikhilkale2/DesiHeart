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

// Theme Functionality

let themeBtn = document.querySelector("#themeBtn");
let isblack = true;

themeBtn.addEventListener("click", (e) => {
  if (isblack) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  isblack = !isblack;
});

let userProfile = document.querySelector("#userProfile");
let SignUp = document.querySelector("#SignUp");
let SignupForm = document.querySelector("#SignupForm");
let MainForm = document.querySelector("#MainForm");
let loginBtn = document.querySelector("#loginBtn");
userProfile.addEventListener("click", () => {
  MainForm.classList.toggle("hidden");
});
SignUp.addEventListener("click", () => {
  //MainForm.style.display = "none";
  MainForm.classList.toggle("hidden");
  SignupForm.classList.toggle("hidden");
});
loginBtn.addEventListener("click", () => {
  MainForm.classList.toggle("hidden");
  SignupForm.classList.toggle("hidden");
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
orderBtns.forEach((orderBtn) => {
  orderBtn.addEventListener("click", function () {
    selecteditem = this.closest(".food-items");

    let name = selecteditem.dataset.name;
    let price = Number(selecteditem.dataset.price);
    let image = selecteditem.dataset.image;

    addToCartfunction(
      selecteditem.dataset.name,
      Number(selecteditem.dataset.price),
      selecteditem.dataset.image,
    );
  });
});

function addToCartfunction(name, price, image) {
  let foodcart = getfromLocalStorage();

  let existingfood = foodcart.find((item) => item.name === name);

  if (existingfood) {
    existingfood.quantity += 1;
  } else {
    foodcart.push({ name, image, price, quantity: 1 });
  }
  saveToLocalStorage(foodcart);
}

function displayCartItems() {
  let foodcart = getfromLocalStorage();
  console.log(foodcart);
  let Container = document.querySelector("#FoodContainer");
  console.log(Container);

  Container.innerHTML = "";

  foodcart.forEach((food) => {
    let parentdiv = document.createElement("div");

    let namep = document.createElement("p");
    namep.textContent = `${food.name}`;

    let img = document.createElement("img");
    img.src = `${food.image}`;

    let price = document.createElement("p");
    price.textContent = `₹${food.price}`;

    let quantity = document.createElement("div");
    quantity.textContent = `${food.quantity}`;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Cancel";

    parentdiv.appendChild(namep);
    parentdiv.appendChild(img);
    parentdiv.appendChild(price);
    parentdiv.appendChild(removeBtn);
    Container.appendChild(parentdiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
});
// Display items functionality working start
