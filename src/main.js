const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // Toggle menu visibility
  const isHidden = navMenu.classList.contains("hidden");
  if (isHidden) {
    navMenu.classList.remove("hidden");
    setTimeout(() => {
      navMenu.classList.add("opacity-100", "translate-y-0");
      navMenu.classList.remove("opacity-0", "translate-y-[-20px]");
    }, 10);
    // Change hamburger icon to close
    hamburger.setAttribute("name", "close");
  } else {
    navMenu.classList.add("opacity-0", "translate-y-[-20px]");
    navMenu.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      navMenu.classList.add("hidden");
    }, 300);
    // Change close icon back to hamburger
    hamburger.setAttribute("name", "menu");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".group");
  let currentIndex = 0;

  function updateActiveCard() {
    // Remove active classes from all cards
    cards.forEach((card) => {
      card.classList.remove("scale-105", "shadow-xl");
    });

    // Add active classes to current card
    cards[currentIndex].classList.add("scale-105", "shadow-xl");

    // Update index
    currentIndex = (currentIndex + 1) % cards.length;
  }

  // Initial state
  updateActiveCard();

  // Start auto rotation
  setInterval(updateActiveCard, 3000);

  // Add hover functionality
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("scale-105", "shadow-xl");
    });

    card.addEventListener("mouseleave", function () {
      if (Array.from(cards).indexOf(this) !== currentIndex - 1) {
        this.classList.remove("scale-105", "shadow-xl");
      }
    });
  });
});
