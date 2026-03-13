//tupe inference
let naam1="Krish"

//type annotation
let naam:undefined=undefined;
console.log(`${naam}`)
let g:any=20

let arr:number[]=[1,2,3,4]

let tup:[string,number,boolean]=["efwv",23,false]
tup.push(true)

let student:{
    name:string,
    num?:number
}={
    name:"Nimish",
}

function greet(name,age?){
    console.log(`my name is ${name} and age ${age}`);
}

greet("Krish",100)

let a:Function=():number=>{
    console.log("Nimish");
    return 10
}

console.log(a());
let arr3:readonly(number|string|boolean)[]=[1,"sdlnkkwao",3,5,"sddvjw","skjvn",false]
console.log(arr3);
