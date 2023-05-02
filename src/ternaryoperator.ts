// Ternary Operator :

 const age : number =22;

// if(age>18){
//     console.log("YES");
// }
//    else {
// console.log("NO");
  
// }

const isAdult = age >= 18? "Yes" : "No";
console.log(isAdult);

//Nullish Coalescing Operator : 
//Null & Undefined :

const isAuthenticatedUser = null; // " ";
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest'
//console.log({userName} ,{userName2});

type Man ={
    name : String;
    age : number;
    address : {
        city : 'Dhaka';
        road : '1361';
        home : " ";

    };
};

// const Manus : Man ={
//     name : "Man",
//     age : 100
// }





