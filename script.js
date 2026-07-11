const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function startSlider() {
  if (!slides.length) return;

  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

if (slides.length) {
  showSlide(0);
  startSlider();

  nextBtn?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlider();
  });

  prevBtn?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlider();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
      startSlider();
    });
  });
}
