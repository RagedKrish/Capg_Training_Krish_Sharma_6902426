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
    size:string,
}

interface dog extends animal{
    breed(name:string):string,

}

let sahil:dog={
    name:"Sahil",
    age:69,
    size:"0.5 cm",
    breed(name:string){
        return name
    }
}
console.log(sahil,sahil.breed("vodaphone"));
