const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

function checkAnswer() {
  const correctAnswer = "4 juillet 1776";
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  if (userAnswer) {
    const result = document.getElementById("result");
    if (userAnswer.value === correctAnswer) {
      result.textContent = "Bonne réponse ! 🎉";
      result.style.color = "green";
    } else {
      result.textContent = "Mauvaise réponse. 😞";
      result.style.color = "red";
    }
  } else {
    alert("Veuillez sélectionner une réponse.");
  }
}
