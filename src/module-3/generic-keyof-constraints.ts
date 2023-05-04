// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };

// type newType = "name" | "age" | "address"; // manully korsi

// type newTypeUsingKeyOf = keyof PersonType;

// // const a: newType= 'age'
// // const b: newTypeUsingKeyOf='hh'

// // Y = 'name' |'age'

// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//   obj[key];
// }

// const property = getProperty({ name: "Mr.X", age: 100 }, "jjj");

// // ({name: 'Mr.X' ,age:100} , 'age')  //100
// // const a={
// //   name: 'Mr.X' ,age:100
// // }
// // a['age']
