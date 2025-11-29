// ================================
// LOADER SCREEN
// ================================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// ================================
// THEME TOGGLE (Dark / Light Mode)
// ================================
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // switch button icon
    if (document.body.classList.contains("light-theme")) {
      themeToggleBtn.textContent = "🌙";  // moon means go back to dark
    } else {
      themeToggleBtn.textContent = "☀️";  // sun means go to light mode
    }
  });
}
