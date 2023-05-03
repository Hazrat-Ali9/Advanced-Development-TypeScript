// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];

// // type RelationWithSalaryType = { name: string; salary: number };

// interface RelationWithSalaryInterface {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//   {
//     name: "Persian",
//     salary: 1000000000,
//   },
//   "Kate Winslet",
// ];

// const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
//   {
//     name: "Persian",
//     salary: 1000000000,
//   },
//   "Kate Winslet",
// ];

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
// const rolllNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string; roll: number };

// const userNameAndRollNumbers: GenericArray<NameRollType> = [
//   {
//     name: "Mr. X",
//     roll: 1,
//   },
//   {
//     name: "Mr. Y",
//     roll: 2,
//   },
// ];

// add(x, y, z);
// add(3, 4, 5);
