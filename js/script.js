//On lie un événement click au bouton avec l'ID submitQuiz, et que lorsque l'utilisateur clique sur ce bouton, la fonction validateQuiz est appelée.
document.getElementById("submitQuiz").addEventListener("click", validateQuiz);

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

  // Tableau des questions
  const questions = [1, 2, 3, 4, 5];

  // Vérifier chaque question avec forEach
  questions.forEach((i) => {
    const selectedAnswer = document.querySelector(
      `input[name="quiz${i}"]:checked`
    );
    const questionContainer = document.querySelector(
      `.quiz-container:nth-of-type(${i})`
    );

    if (!selectedAnswer) {
      allAnswered = false;
      questionContainer.classList.add("missing-answer");
    } else {
      const isCorrect = selectedAnswer.value === correctAnswers[`quiz${i}`];
      score += isCorrect ? 1 : 0;
      questionContainer.classList.add(isCorrect ? "correct" : "incorrect");
    }
  });

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

//1. Un objet correctAnswers est défini avec les bonnes réponses pour chaque question.
//Chaque clé correspond à une question

//2. Initialisation des variables:
//* score est une variable qui sera utilisée pour compter le nombre de bonnes réponses.
//* allAnswered est un indicateur qui vérifie si toutes les questions ont été répondues.

//3. Tableau des questions:
//* Le tableau questions contient les indices des questions (ici de 1 à 5), utilisé pour itérer sur chaque question et valider les réponses.

//4. Boucle forEach pour vérifier les réponses:
//* Pour chaque question (représentée par i), le code recherche la réponse sélectionnée par l'utilisateur à l'aide de document.querySelector().
//* Il utilise un sélecteur CSS pour cibler l'élément input sélectionné (case à cocher ou bouton radio) correspondant à la question quiz${i}.
//* questionContainer sélectionne le conteneur de la question pour lui appliquer des styles en fonction de la validité de la réponse.

//5. Vérification de la réponse et mise à jour du score:
//* Si aucune réponse n'est sélectionnée (!selectedAnswer), allAnswered devient false et la classe CSS missing-answer est ajoutée pour signaler une réponse manquante.
//* Si une réponse est sélectionnée, le code compare la valeur de la réponse sélectionnée avec la réponse correcte. Si elles correspondent (isCorrect),
//* le score est incrémenté de 1. Ensuite, une classe CSS (correct ou incorrect) est ajoutée au conteneur de la question en fonction de la réponse.

//6. Vérification des réponses manquantes:
//* Si une question n'a pas été répondue (allAnswered est false), une alerte est affichée pour demander à l'utilisateur de répondre à toutes les questions.
//* La fonction return arrête l'exécution pour éviter de calculer et afficher le score.

//7. Affichage du résultat et du score:
//Une fois toutes les questions validées, le message de résultat est récupéré et le score de l'utilisateur est affiché dans cet élément HTML.

//8. Modification du style en fonction du score:
//Le message est coloré en fonction du score =>>
//* Vert si l'utilisateur a toutes les bonnes réponses (score === 5),
//* Orange si le score est supérieur ou égal à 3 mais inférieur à 5 (score >= 3),
//* Rouge si le score est inférieur à 3.

//FIN =>>Le message final affiche également un texte motivant en fonction du score, comme "Félicitations" si le score est parfait, ou "Essayez encore" si le score est faible.
