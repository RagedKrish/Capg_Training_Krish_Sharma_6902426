// class demo{
//     constructor(){
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person = /** @class */ (function () {
    function person(name) {
        this.name = "abc";
        this.name = name;
    }
    return person;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(name, company) {
        var _this = _super.call(this, name) || this;
        _this.company = "test yantra";
        return _this;
    }
    teacher.prototype.display = function () {
        console.log(this.company, this.name);
    };
    return teacher;
}(person));
var t = new teacher("abc", "xyz");
t.display();
