document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!dropdownButton || !dropdownMenu) return; // Ensure elements exist

  // Toggle dropdown menu visibility and button active state
  dropdownButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click event from propagating
    dropdownButton.classList.toggle("active"); // Add/remove active class
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
      dropdownButton.classList.remove("active"); // Remove active class when menu is closed
    }
  });

  // Prevent menu from closing when clicking inside it
  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Ensure dropdown menu closes on window resize for responsiveness
  window.addEventListener("resize", () => {
    dropdownMenu.style.display = "none";
    dropdownButton.classList.remove("active");
  });
});