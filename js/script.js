function validateQuiz() {
  const correctAnswers = {
    quiz1: "Napoleon Bonaparte",
    quiz2: "4 juillet 1776",
    quiz3: "476 av. JC",
    quiz4: "Ljubljana",
    quiz5: "4.9 Million",
  };

  let score = 0;
  let allAnswered = true;

  // Vérifier chaque question
  for (let i = 1; i <= 5; i++) {
    const selectedAnswer = document.querySelector(
      `input[name="quiz${i}"]:checked`
    );
    const questionContainer = document.querySelector(
      `.quiz-container:nth-of-type(${i})`
    );

    // Vérifier si une réponse a été sélectionnée
    if (!selectedAnswer) {
      allAnswered = false;
      questionContainer.classList.add("missing-answer");
    } else {
      // Ajouter la classe 'correct' ou 'incorrect' en fonction de la réponse
      if (selectedAnswer.value === correctAnswers[`quiz${i}`]) {
        score++;
        questionContainer.classList.add("correct");
      } else {
        questionContainer.classList.add("incorrect");
      }
    }
  }

  // Vérifier si toutes les questions ont été répondues
  if (!allAnswered) {
    alert("Veuillez répondre à toutes les questions avant de soumettre.");
    return; // Empêcher l'affichage du score si une question est sans réponse
  }

  // Afficher le score et le message approprié
  const resultMessage = document.querySelector(".result-message");
  resultMessage.textContent = `Votre score est : ${score} / 5`;

  // Appliquer la couleur et le message en fonction du score
  resultMessage.style.color =
    score === 5 ? "green" : score >= 3 ? "orange" : "red";
  resultMessage.textContent +=
    score === 5
      ? " 🎉 Félicitations, vous avez toutes les bonnes réponses !"
      : score >= 3
      ? " 👍 Bien joué !"
      : " 😞 Essayez encore !";
}
