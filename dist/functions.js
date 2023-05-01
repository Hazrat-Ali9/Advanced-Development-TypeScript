"use strict";
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
//add(2,2);
// Array Function
const addArrow = (num1, num2) => num1 + num2;
//callback Function Typescript :
const arr = [1, 3, 5, 7];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Hazrat Ali",
    balance: 10,
    addBalance(money) {
        console.log(`My New balance is' ${this.balance + money}`);
    },
};
