document.addEventListener("DOMContentLoaded", () => {
  const scoreText = document.getElementById("scoreText");
  const button = document.getElementById("addPoint");

  let score = 0;
  const threshold = 100;

  button.addEventListener("click", () => {
    score++;
    scoreText.textContent = `Your Score: ${score}`;

    if (score > threshold) {
      scoreText.classList.add("rainbow-auto");
    } else {
      scoreText.classList.remove("rainbow-auto");
    }
  });
});
