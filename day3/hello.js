//homogeneous
let arr=[1,2,3,4,5]
//heterogeneous
let arr2=[1,"hello",true,null]

let timepass={
    name:"Krish"
}

console.log(timepass.name[1])

delete arr[2]
console.log(arr)

let nm=function (){
    console.log("Krish");
}


nm();
(function(){
    console.log("hello");
}());

let a=()=>{
    console.log("Nimish")
    return "Sahil"
}
console.log(a());
