// Union-Intersection : 

type NoobDeveloper ={
    name:string
}

// type JuniorDeveloper ={

//     name : string ;
//     expertise : string ;
//     experience : number;

// };

type JuniorDeveloper = NoobDeveloper & {
    expertise : string ;
     experience : number;
}

enum Level {
    Junior ='Junior',
    Mid ='Mid',
    Senior ='Senior',
}

type Nextleveleveloper= JuniorDeveloper &{
   leadershipExperience:number;
//    level : "Junior" | "Mid"| "Senior";
 level: Level;

}; 



const newDeveloper : NoobDeveloper| JuniorDeveloper={
    name : 'Hazrat Ali',
    expertise : 'JavaScript',
    experience : 1,

};

const developer : Nextleveleveloper={
    name : 'Hazrat Ali',
    expertise : 'TypeScript',
    experience : 2,
    leadershipExperience: 1,
    level: Level.Mid,
};