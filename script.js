const funFacts = [
  "Once built an entire app in 48 hours for a hackathon 🏆",
  "Prefers dark mode, always.",
  "Can probably debug code faster than making coffee!",
  "Secretly loves CSS (don't tell anyone)."
];
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fun-fact").textContent =
    funFacts[Math.floor(Math.random() * funFacts.length)];
});

// Very basic “form handler” — does NOT really send anywhere
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = this.name.value.trim();
  document.getElementById("formStatus").textContent =
    name ? `Thanks, ${name}! I'll respond soon.` : "Thank you!";
  setTimeout(() => {
    document.getElementById("formStatus").textContent = "";
    this.reset();
  }, 3700);
});
