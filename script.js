document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleMenu = document.getElementById("toggle-menu");

  toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});
