// import Jekono from "./module";
// import addTwo from './utils/add'
// import multiply from './utils/multiply'
// import average from './utils/average'
import methods from "./utils/index";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const res1 = methods.addTwo(4, 6);
const res2 = methods.multiply(4, 6);
const res3 = methods.average(4, 6);
