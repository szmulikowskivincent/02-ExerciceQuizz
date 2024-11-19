function validateQuiz() {
  const correctAnswers = {
    quiz1: "Napoleon Bonaparte",
    quiz2: "4 juillet 1776",
    quiz3: "476 av. JC",
    quiz4: "Ljubljana",
    quiz5: "4.9 Million",
  };

  let score = 0;

  // Vérifier chaque question
  for (let i = 1; i <= 5; i++) {
    const selectedAnswer = document.querySelector(
      `input[name="quiz${i}"]:checked`
    );
    const questionContainer = document.querySelector(
      `.quiz-container:nth-of-type(${i})`
    );

    if (selectedAnswer) {
      // Comparer la réponse sélectionnée avec la bonne réponse
      if (selectedAnswer.value === correctAnswers[`quiz${i}`]) {
        score++;
        questionContainer.classList.add("correct"); // Ajouter la classe 'correct' en cas de bonne réponse
      } else {
        questionContainer.classList.add("incorrect"); // Ajouter la classe 'incorrect' en cas de mauvaise réponse
      }
    } else {
      questionContainer.classList.add("incorrect"); // Si aucune réponse n'est sélectionnée, considérer comme incorrect
    }
  }

  // Afficher un message avec le score dans l'élément avec la classe 'result-message'
  const resultMessage = document.querySelector(".result-message");
  resultMessage.textContent = `Votre score est : ${score} / 5`;

  // Ajouter des couleurs en fonction du score
  if (score === 5) {
    resultMessage.style.color = "green"; // Tout bon : vert
    resultMessage.textContent +=
      " 🎉 Félicitations, vous avez toutes les bonnes réponses !";
  } else if (score >= 3) {
    resultMessage.style.color = "orange"; // 3-4 bonnes réponses : orange
    resultMessage.textContent += " 👍 Bien joué !";
  } else {
    resultMessage.style.color = "red"; // Moins de 3 bonnes réponses : rouge
    resultMessage.textContent += " 😞 Essayez encore !";
  }
}
