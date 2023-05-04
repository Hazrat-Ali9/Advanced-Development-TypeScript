const arrayofNumbers = [1, 2, 3]; // ['1','2','3']
const arrayOfStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  height: string;
  width: string;
};

const rectangularArea: AreaNumber = {
  height: 10,
  width: 12,
};

type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber; // 'width' | 'height'

// const obj={
//   name:'Persian'
// }
// obj['name']
