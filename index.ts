import { converterOfNumber } from "./app";
import { AnswerCallback } from "./app";

function goh(): void {
  const correctAnswer: AnswerCallback = (userInput, correctAnswer) => {
    console.log("Correct answer!");
  };

  const incorrectAnswer: AnswerCallback = (userInput, correctAnswer) => {
    console.log("Incorrect answer. Please try again.");
  };

  converterOfNumber
    .setAnswers(correctAnswer, incorrectAnswer)
    .setUserInput("1,3")
    .setCorrectAnswer("1.1")
    .checkAnswer();
}

goh();
