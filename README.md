Purpose:

Designed to convert numbers from string format to numerical format, handling both decimal commas and dots.
Validates user input against a correct answer.
Executes user-defined functions for correct and incorrect answers.

Properties:

userInput: Stores the user's input as a string.
correctAnswerValue: Stores the correct answer as a string.
correctAnswerFun: Stores a function to be executed when the answer is correct.
incorrectAnswerFun: Stores a function to be executed when the answer is incorrect.

Methods:

setUserInput(userInput): Sets the user's input.
setCorrectAnswer(correctAnswer): Sets the correct answer.
setAnswers(correctAnswerFun, incorrectAnswerFun): Sets the functions to be executed for correct and incorrect answers.
convertNumber(input): Converts a string to a number, handling decimal commas and dots.
checkAnswer(): Checks the user's input against the correct answer and calls the appropriate functions based on the result.

Create an instance of the class: const converter = new ConverterOfNumber();
Set the user's input, correct answer, and answer handling functions:

    converter.setUserInput("1,5").setCorrectAnswer("1.5").setAnswers(
       () => console.log("Correct!"),
       () => console.log("Incorrect.")
    );
Check the answer: converter.checkAnswer();

Example:

converter.setUserInput("2").setCorrectAnswer("2").checkAnswer(); // Output: Correct!
converter.setUserInput("1,3").setCorrectAnswer("1.3").checkAnswer(); // Output: Correct!
converter.setUserInput("abc").setCorrectAnswer("1.3").checkAnswer(); // Output: Incorrect.
