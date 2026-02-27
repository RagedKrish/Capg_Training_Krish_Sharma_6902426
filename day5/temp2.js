var nimish = {
    name: "Nimish",
    gender: undefined
};
var sahil = {
    name: "Sahil",
    age: 69,
    size: "0.5 cm",
    breed: function (name) {
        return name;
    }
};
console.log(sahil, sahil.breed("vodaphone"));
