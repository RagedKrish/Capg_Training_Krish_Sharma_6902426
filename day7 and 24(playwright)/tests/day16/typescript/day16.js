var obj = {
    names: "Krish",
    age: 21
};
var arr = ['nimish', 23, true];
// for(const item of obj){
//     console.log(item);  --> gives error as for of gives error for object
// }
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
for (var key in obj) {
    console.log(key, " : ", obj[key]);
}
for (var index in arr) {
    console.log(index, " : ", arr[index]);
}
