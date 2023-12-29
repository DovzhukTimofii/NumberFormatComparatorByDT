export type AnswerCallback = (userInput: string, correctAnswer: string) => void;

class ConverterNumber {
  userInput: string = "";
  correctAnswerValue: string = "";
  correctAnswerFun: AnswerCallback = () => {};
  incorrectAnswerFun: AnswerCallback = () => {};

  setUserInput(userInput: string): this {
    this.userInput = userInput;
    return this;
  }

  setCorrectAnswer(correctAnswer: string): this {
    this.correctAnswerValue = correctAnswer;
    return this;
  }

  setAnswers(
    correctAnswerFun: AnswerCallback,
    incorrectAnswerFun: AnswerCallback
  ): this {
    this.correctAnswerFun = correctAnswerFun;
    this.incorrectAnswerFun = incorrectAnswerFun;
    return this;
  }

  convertNumber(input: string): number {
    return parseFloat(input.replace(",", "."));
  }

  checkAnswer(): this {
    const userNumber: number = this.convertNumber(this.userInput);

    if (!isNaN(userNumber)) {
      if (userNumber === this.convertNumber(this.correctAnswerValue)) {
        this.correctAnswerFun(this.userInput, this.correctAnswerValue);
      } else {
        this.incorrectAnswerFun(this.userInput, this.correctAnswerValue);
      }
    } else {
      this.incorrectAnswerFun(this.userInput, this.correctAnswerValue);
    }

    return this;
  }
}

export const ConverterOfNumber: ConverterNumber = new ConverterNumber();
