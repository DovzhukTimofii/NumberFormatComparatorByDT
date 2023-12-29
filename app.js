"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterOfNumber = void 0;
var ConverterNumber = /** @class */ (function () {
    function ConverterNumber() {
        this.userInput = "";
        this.correctAnswerValue = "";
        this.correctAnswerFun = function () { };
        this.incorrectAnswerFun = function () { };
    }
    ConverterNumber.prototype.setUserInput = function (userInput) {
        this.userInput = userInput;
        return this;
    };
    ConverterNumber.prototype.setCorrectAnswer = function (correctAnswer) {
        this.correctAnswerValue = correctAnswer;
        return this;
    };
    ConverterNumber.prototype.setAnswers = function (correctAnswerFun, incorrectAnswerFun) {
        this.correctAnswerFun = correctAnswerFun;
        this.incorrectAnswerFun = incorrectAnswerFun;
        return this;
    };
    ConverterNumber.prototype.convertNumber = function (input) {
        return parseFloat(input.replace(",", "."));
    };
    ConverterNumber.prototype.checkAnswer = function () {
        var userNumber = this.convertNumber(this.userInput);
        if (!isNaN(userNumber)) {
            if (userNumber === this.convertNumber(this.correctAnswerValue)) {
                this.correctAnswerFun(this.userInput, this.correctAnswerValue);
            }
            else {
                this.incorrectAnswerFun(this.userInput, this.correctAnswerValue);
            }
        }
        else {
            this.incorrectAnswerFun(this.userInput, this.correctAnswerValue);
        }
        return this;
    };
    return ConverterNumber;
}());
exports.ConverterOfNumber = new ConverterNumber();
