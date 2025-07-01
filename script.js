document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with rainbow animation
  const rainbowElements = document.querySelectorAll(".rainbow-text, .rainbow-bg");

  rainbowElements.forEach((el) => {
    el.style.animationPlayState = "running"; // default running

    el.addEventListener("click", () => {
      el.style.animationPlayState =
        el.style.animationPlayState === "paused" ? "running" : "paused";
    });
  });
});