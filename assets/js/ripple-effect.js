document.addEventListener("DOMContentLoaded", function () {
  const rippleText = document.querySelector(".ripple-text");
  if (rippleText) {
    const text = rippleText.textContent.trim(); // Remove leading/trailing whitespace
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") { // Skip whitespace characters
        newText += `<span>${text[i]}</span>`;
      }
    }
    rippleText.innerHTML = newText;
  }
});

