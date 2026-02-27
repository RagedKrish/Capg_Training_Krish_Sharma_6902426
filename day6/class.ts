// class demo{
//     constructor(){

//     }
// }

// class car{
//     brand:string="Maruti";
//     colour:string="Black";
//     start():void{
//         console.log("This is a car");
//     }
//     display():void{

//     }
//     constructor(brand:string,colour:string){
//         this.brand=brand;
//         this.colour=colour;
//         this.display=()=>{
//             console.log("hello");
//         }
//     }
// }
// // let c=new car("Bmw","White");
// // c.start();
// // console.log(c);
// // c.display();

// class animal extends car{
//     private name:string="Nimish";
//     display():void{
//         console.log(this.name);
        
//     }
// }
// let a=new animal("Mouse","black");
// // console.log(a.name);
// a.display()
// console.log(a);

// class car{
//     constructor(name:string){

//     }
// }
// let c=new car("Bmw","White");
// c.start();
// console.log(c);
// c.display();

class person{
    name:string="abc";
    constructor(name:string){
        this.name=name;
    }
}
class teacher extends person{
    company:string="test yantra";
    constructor(name:string,company:string){
        super(name);
    }
    display(){
        console.log(this.company,this.name);
    }
}
let t=new teacher("abc","xyz");
t.display();
