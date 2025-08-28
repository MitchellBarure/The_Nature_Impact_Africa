// About section slanted reveal with typing effect
const slantedRect = document.querySelector('.slanted-rectangle');
const aboutHeading = document.querySelector('.about-heading'); 
const aboutContent = document.querySelector('.about-content');

// Typing effect function
function typeText(element, text, speed = 100, callback) {
  let i = 0;
  element.textContent = '';
  const typingInterval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, speed);
}

// Handle reveal on scroll
function handleAboutReveal() {
  const rectTop = slantedRect.getBoundingClientRect().top;

  if (rectTop < window.innerHeight - 100) {
    // Step 1: Animate typing for heading
    typeText(aboutHeading, 'About Us', 100, () => {
      // Step 2: Expand rectangle
      slantedRect.classList.add('in');

      // Step 3: Fade in paragraph slightly later
      setTimeout(() => {
        aboutContent.classList.add('visible');
      }, 1000); // waits 1s so rectangle is animating
    });

    window.removeEventListener('scroll', handleAboutReveal); // only trigger once
  }
}

window.addEventListener('scroll', handleAboutReveal);
handleAboutReveal(); // check on load


document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const fadeIns = document.querySelectorAll(".reveal-on-scroll");

  function handleScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("in");
    });

    fadeIns.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

// Hamburger toggle functionality
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once at start
});

