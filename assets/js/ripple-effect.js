document.addEventListener("DOMContentLoaded", function () {
  const rippleText = document.querySelector(".ripple-text");
  if (rippleText) {
    const text = rippleText.textContent;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += `<span>${text[i]}</span>`;
    }
    rippleText.innerHTML = newText;
  }
});
