
// ─────────────────────────────────────────────
// Typing Effect
// ─────────────────────────────────────────────

const line1 = "Graduate QEA Engineer";
const line2 = "@ Cognizant";

const line1Element = document.getElementById("typed-line-1");
const line2Element = document.getElementById("typed-line-2");

let line1Index = 0;
let line2Index = 0;

function typeLine1() {
  if (line1Index < line1.length) {
    line1Element.textContent += line1.charAt(line1Index);
    line1Index++;

    setTimeout(typeLine1, 80);
  } else {
    setTimeout(typeLine2, 300);
  }
}

function typeLine2() {
  if (line2Index < line2.length) {
    line2Element.textContent += line2.charAt(line2Index);
    line2Index++;

    setTimeout(typeLine2, 80);
  }
}

// Start typing when page loads
window.addEventListener("load", () => {

  line1Element.textContent = "";
  line2Element.textContent = "";

  typeLine1();

});


// ─────────────────────────────────────────────
// Scroll Fade-In Animation
// ─────────────────────────────────────────────

const fadeElements = document.querySelectorAll(`
  section,
  .project,
  .skill-group,
  .about-grid article,
  .contact-info,
  .form-group,
  #sidebar > div
`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("fade-in-show");

        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.12
  }
);


// Add stagger delays
fadeElements.forEach((element, index) => {

  element.classList.add("fade-in-hidden");

  const staggerDelay = (index % 6) * 120;

  element.style.transitionDelay = `${staggerDelay}ms`;

  observer.observe(element);

});