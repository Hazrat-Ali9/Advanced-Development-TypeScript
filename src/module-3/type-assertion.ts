// // let emni: any;

// // emni = "Next level web devlopment";

// // (emni as string).length;
// // <string>emni.length;

// // function kgToGram(param: string | number): string | number | undefined {
// //   if (typeof param === "string") {
// //     const value = parseFloat(param) * 1000;
// //     return `The Converted result is: ${value} gram`;
// //   }
// //   if (typeof param === "number") {
// //     const value = param * 1000;
// //     return value;
// //   }
// // }

// // const resultToBeNumber = <number>kgToGram(1000);
// // const resultToBeString = <string>kgToGram("1000");

// // type CustomErrorType = {
// //   message: string;
// // };

// // try {
// // } catch (err) {
// //   console.log((err as CustomErrorType).message);
// // }

// // const rollNumbers: number[] = [1, 4, 7];

// type ArrayType<X,Y> = [X,Y];

// interface Name{
//   name:string,
// }
// const generic1: ArrayType<string,st> = ["1", "4", "7"];
// const generic2: ArrayType<number> = [1, 2, 3];
// const generic3: ArrayType<Name>=[{name:'Persian'},{age:'i'}]

// interface CrushInterface<T>{
//   name:'Kate Winslet',
//   husband:T
// }

// const husband1 :CrushInterface<boolean> = {name:'Kate Winslet',husband:true}

// const rollNumbers1: Array<number> = [1, 4, 7];
// const rollNumbers2: Array<string> = ["1", "2"];

// const makeArray = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2];

// function makeArray2<X, Y>(param1: X, param2: Y): [X, Y] {
//   return [param1, param2];
// }

// const array1 = makeArray(1, 4);
// const array2 = makeArray("5", 6);

// const addMeToCrushMind = (param: object) => {
//   const crushName = "Kate Winslet";
//   const newMind = { ...param, crushName };
//   return newMind;
// };
const addMeToCrushMind = <T extends { name: string }>(param: T) => {
  const crushName = "Kate Winslet";
  const newMind = { ...param, crushName };
  return newMind;
};

const result = addMeToCrushMind({ name: "Farhan" });

// result.
