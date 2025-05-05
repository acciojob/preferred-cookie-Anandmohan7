//your JS code here. If required.
// Helper functions to get and set cookies
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, val] = cookie.split('=');
    if (key === name) return val;
  }
  return null;
}

// Apply stored preferences on load
window.addEventListener("DOMContentLoaded", () => {
  const storedFontSize = getCookie("fontsize");
  const storedFontColor = getCookie("fontcolor");

  if (storedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${storedFontSize}px`);
    document.getElementById("fontsize").value = storedFontSize;
  }

  if (storedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", storedFontColor);
    document.getElementById("fontcolor").value = storedFontColor;
  }

  // Form submission behavior
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    // Set cookies
    setCookie("fontsize", fontSize);
    setCookie("fontcolor", fontColor);

    // Apply styles immediately
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  });
});
