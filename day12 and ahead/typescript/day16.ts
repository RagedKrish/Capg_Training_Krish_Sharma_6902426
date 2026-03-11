const obj:{
    names:string;
    age:number
} = {
    names:"Krish",
    age:21
};

const arr=['nimish',23,true]

// for(const item of obj){
//     console.log(item);  --> gives error as for of gives error for object
    
// }

for (const item of arr){
    console.log(item);
    
}

for (const key in obj){
    console.log(key," : ",obj[key]);
    
}

for(const index in arr){
    console.log(index," : ",arr[index]);
    
}
