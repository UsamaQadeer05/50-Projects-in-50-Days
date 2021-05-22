// Get DOM Elements
const panels = document.querySelectorAll(".panel");

// Functions
// 1. Function for remove Active classes from all other clicked one
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}

// Event Listeners
// 1. Event Listener for Panel
panels.forEach(panel => {
  panel.addEventListener("click", e => {
    if (panel.className === "panel active") {
      removeActiveClasses();
    } else {
      removeActiveClasses();
      panel.classList.add("active");
    }
  });
});
