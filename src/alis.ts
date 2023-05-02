// Alis TypeScript : 
type CrushType = {
    name: string;
    age: Number;
    profession:string;
    address: string;
    

}

const crush1: CrushType = {
 
    name :"jan Pakhi",      // I Love You MITU
    age : 22,
    profession: "CSE Engineer",
    address : "Dhaka",


};

const crush2: CrushType ={

    
       name :'Mon Pakhi',
       age : 22,
       profession: "Doctor",
       address : 'Dhaka',
    
    
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType  = false;

type CourseNameType = string

const courseName: CourseNameType="Sofaware & MERN Engineer";

type operationType = (x: number, y: number) => number;



    

const calculate = (
number1: number, // 10
number2: number, //20 

operation:  operationType //(x,y) => x+y; (10,20)=>10+20=30
) =>{

    return operation(number1, number2);
};


   

calculate(10,20,(x,y)=> x+y);
calculate(10,20,(x,y)=> x-y);
calculate(10,20,(x,y)=> x/y);
calculate(10,20,(x,y)=> x*y);