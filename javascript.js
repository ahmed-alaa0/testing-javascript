const container = document.querySelector(".container");

container.classList.add("animationTopDelay");
setTimeout(() => {
  container.classList.add("animationTop");
  container.classList.remove("animationTopDelay");
}, 1500);

const hamburger = document.getElementById("hamburger");
const servicesMenu = document.querySelector(".services");
const serviceLinks = document.querySelectorAll(".services a");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  servicesMenu.classList.toggle("active");

  serviceLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.toggle("in-view");
    }, index * 100);
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !servicesMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    servicesMenu.classList.remove("active");
  }
});

serviceLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    servicesMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const nav = document.querySelector(".nav");
  const buttons = document.querySelector(".buttons");

  const headerOffset = container.offsetTop;
  const headerHeight = container.offsetHeight;

  window.addEventListener("scroll", function () {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= headerOffset + headerHeight) {
        container.classList.add("is-sticky");
        nav.classList.add("is-sticky");
        buttons.classList.add("is-sticky");
      } else {
        container.classList.remove("is-sticky");
        nav.classList.remove("is-sticky");
        buttons.classList.remove("is-sticky");
      }
    });
  });
});
