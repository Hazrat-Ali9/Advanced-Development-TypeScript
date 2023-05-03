// //normal function
// //default parameter
// function add(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }

// add(30, 50);

// //spread opearator

// const myFriends = ["chandler", "joey", "ross"];
// const newFriends = ["monica", "rachel", "pheobe"];
// const myBestFriend = {
//   fullName: "Abul Bashar",
//   age: 24,
// };

// const [besfriend] = myFriends;
// const { fullName: string } = myBestFriend;

// console.log({ string });

// myFriends.push(...newFriends);
// // console.log(myFriends);

// //rest paaremeter

// const greetFriends = (...friends: string[]): void =>
//   friends.forEach((friend) => console.log(`Hi ${friend}`));

// greetFriends(
//   "kashem",
//   "hashem",
//   "gashem",
//   "lashem",
//   "bangla bhai",
//   "english bhai"
// );

// //array and object destructuring

// const addArrow = (num1: number, num2: number): number => num1 + num2;

// const arr = [1, 4, 5, 7];

// const newArray = arr.map((elem: number) => elem * elem);

// const person: {
//   name: string;
//   balance: number;
//   addBalance(money: number): void;
// } = {
//   name: "Mezba",
//   balance: 5,
//   addBalance(money: number) {
//     console.log(`My New Balance is ${this.balance + money}`);
//   },
// };

// // person.addBalance(555);
