// Normal Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

//add(2,2);

// Array Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//callback Function Typescript :

const arr = [1, 3, 5, 7];
const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Hazrat Ali",
  balance: 10,
  addBalance(money: number) {
    console.log(`My New balance is' ${this.balance + money}`);
  },
};

console.log(newArray);