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
