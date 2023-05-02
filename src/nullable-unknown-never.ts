// Nullable : 

const searchName=(value:string | null)=>{
    if (value===null){
        console.log("There Is Nothing To Search");
        
    }
    else{
        console.log("Searching");

        
    }
}
searchName("Hazrat Ali");
//searchName("Null");

// Unknown :
// kmh^-1 ------> ms^-1

const getMyCarSpeed=(speed:unknown)=>{
    if(typeof speed === "number"){
        const convertedSpeed =(speed * 1000)/3600;
        console.log(`My Speed is ${convertedSpeed}`);
        
    }

    if (typeof speed === 'string'){
        const [value,unit] = speed.split(" "); // ['10' , kmh^-1]

        const convertedSpeed =(parseFloat(value) * 1000)/3600;
        console.log(`My Speed is ${convertedSpeed}`);
    }
    else {
        console.log("There is Wrong type");
        
    }

}
getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1'); //10kmh-1
getMyCarSpeed(true);

// Never  Function :
function throwError(message:string): never{
    throw new Error ('message');
}

throwError("Error Khaise");

