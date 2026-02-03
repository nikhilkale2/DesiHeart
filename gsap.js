mm = gsap.matchMedia();
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
