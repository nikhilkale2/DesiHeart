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
function smallScreenAnimation() {
  mm.add("(max-width:1024px)", () => {});
}
smallScreenAnimation();

function bigScreenAnimation() {
  mm.add("(min-width:1400px)", () => {
    // For Hero section
    let hero = gsap.timeline();
    hero.from(
      "#Hero-box",
      {
        x: -100,
        opacity: 0,
        duration: 0.8,
      },
      "hero",
    );
    hero.from(
      "#Hero-img",
      {
        x: 100,
        opacity: 0,
        duration: 0.8,
      },
      "hero",
    );

    // For About
    let about = gsap.timeline({
      scrollTrigger: {
        trigger: "#About",
        scroller: "body",
        start: "top 55%",
        end: "top 20%",
        scrub: true,
      },
    });
    about.from(
      ".about-page",
      {
        x: -80,
        opacity: 0,
        duration: 0.8,
      },
      "about",
    );
    about.from(
      ".about-img",
      {
        x: 80,
        opacity: 0,
        duration: 0.7,
      },
      "about",
    );

    // For Menu
    let menu = gsap.timeline();
    menu.from("#menu-item", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#Menu",
        scroller: "body",
        start: "top 55%",
        end: "top 25%",
        scrub: true,
      },
    });

    // For menu Dishes
  });
}
bigScreenAnimation();

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
