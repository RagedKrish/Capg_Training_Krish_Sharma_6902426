interface Person{
    readonly name:string,
    age?:number,
    gender:string|undefined
}

let nimish:Person={
    name:"Nimish",
    gender:undefined
}

interface animal{
    name:string,
    age?:number,
}

interface dog extends animal{
    breed(name:string):string,

}

let sahil:dog={
    name:"Sahil",
    age:69,
    breed(name:string){
        return name
    }
}
console.log(sahil,sahil.breed("vodaphone"));
