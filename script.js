document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggle-sidebar");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    toggleButton.textContent = sidebar.classList.contains("hidden")
      ? "Pokaż menu"
      : "Ukryj menu";
  });
});
