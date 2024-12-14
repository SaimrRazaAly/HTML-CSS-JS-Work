document.addEventListener("DOMContentLoaded", () => {
    // Create the custom cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
  
    // Load saved position or set default
    const savedPosition = JSON.parse(localStorage.getItem("cursorPosition")) || { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursor.style.left = `${savedPosition.x}px`;
    cursor.style.top = `${savedPosition.y}px`;
    cursor.classList.add("visible");
  
    // Update cursor position on mouse move
    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      localStorage.setItem("cursorPosition", JSON.stringify({ x, y }));
    });
  
    // Cursor hover effects
    const hoverElements = document.querySelectorAll(".nav-item, button, h1, p");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      element.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.classList.add("nav-hover"));
      link.addEventListener("mouseleave", () => cursor.classList.remove("nav-hover"));
    });
  });
  


  // Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference exists in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save the theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
