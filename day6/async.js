// setTimeout(()=>{
//     console.log("Nimish");
// },3000);
// let a:number=setInterval(()=>{
//     console.log("Sahil Pagal");
// },2000);
// let p1 = new Promise<string>((running, walking) => {
//     let success = true;
//     if (!success) {
//       running("login successful")
//     } else {
//       walking("login unsuccessful")
//     }
//   })
//   p1.then((ele) => {
//     console.log(ele);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   console.log(p1);
// function getuser():Promise<string>{
//   return new Promise((resolve,reject)=>{
//     reject("User nipat liya");
//     resolve("User hai");
//   })
// }
// getuser().catch((ele)=>{
//   console.log(ele);
// }).then((ele)=>{
//     console.log(ele);
// })
//what is promise static method
let prom = new Promise((resolve) => {
    resolve(10);
});
prom
    .then(val => (console.log(val * 2), val * 2))
    .then(val => (console.log(val * 20), val * 20)).then(val => console.log(val));
// prom.then((val)=>{
//   console.log(25+val);
//   return 25+val;
// })
// .then((val)=>{
//   console.log(val/2);
// })
