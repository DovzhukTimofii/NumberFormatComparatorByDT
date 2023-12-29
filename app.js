"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterOfNumber = void 0;
var ConverterOfNumber = /** @class */ (function () {
    function ConverterOfNumber() {
        this.userInput = "";
        this.correctAnswerValue = "";
        this.correctAnswerFun = function () { };
        this.incorrectAnswerFun = function () { };
    }
    ConverterOfNumber.prototype.setUserInput = function (userInput) {
        this.userInput = userInput;
        return this;
    };
    ConverterOfNumber.prototype.setCorrectAnswer = function (correctAnswer) {
        this.correctAnswerValue = correctAnswer;
        return this;
    };
    ConverterOfNumber.prototype.setAnswers = function (correctAnswerFun, incorrectAnswerFun) {
        this.correctAnswerFun = correctAnswerFun;
        this.incorrectAnswerFun = incorrectAnswerFun;
        return this;
    };
    ConverterOfNumber.prototype.convertNumber = function (input) {
        return parseFloat(input.replace(",", "."));
    };
    ConverterOfNumber.prototype.checkAnswer = function () {
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
    return ConverterOfNumber;
}());
exports.converterOfNumber = new ConverterOfNumber();
