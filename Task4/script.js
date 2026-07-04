const cards = document.querySelectorAll(".card");
const architectureBlocks = document.querySelectorAll(".architecture div");
const stateBlocks = document.querySelectorAll(".state-box div");
const faultCards = document.querySelectorAll(".fault-card");
const lcdBoxes = document.querySelectorAll(".lcd-box");

function addHoverEffect(elements, hoverColor, normalColor) {
  elements.forEach(element => {
    element.addEventListener("mouseenter", () => {
      element.style.background = hoverColor;
    });

    element.addEventListener("mouseleave", () => {
      element.style.background = normalColor;
    });
  });
}

addHoverEffect(cards, "#334155", "#1e293b");
addHoverEffect(architectureBlocks, "#334155", "#1e293b");
addHoverEffect(stateBlocks, "#334155", "#1e293b");
addHoverEffect(faultCards, "#334155", "#1e293b");

lcdBoxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-5px)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translateY(0)";
  });
});

console.log("Event-Driven Safety Protection Kernel Website Loaded Successfully");
