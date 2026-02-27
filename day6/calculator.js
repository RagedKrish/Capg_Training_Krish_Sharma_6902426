var num = document.body.getElementsByClassName("num");
var display = document.querySelector(".display");
var div = document.getElementById("/");
var equal = document.getElementById("equal");
var mul = document.getElementById("*");
var add = document.getElementById("+");
var sub = document.getElementById("-");
var reset = document.getElementById("reset");
var num1;
var num2;
var input;
var cmd = "";
// loop through all number buttons
for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        // add clicked number to display
        display.value += this.innerText;
    });
}
function calculate() {
    num2 = Number(display.value);
    if (cmd === "/") {
        num1 = num1 / num2;
    }
    else if (cmd === "*") {
        num1 = num1 * num2;
    }
    else if (cmd === "+") {
        num1 = num1 + num2;
    }
    else if (cmd === "-") {
        num1 = num1 - num2;
    }
}
mul === null || mul === void 0 ? void 0 : mul.addEventListener("click", function () {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate();
        console.log(num1);
    }
    display.value = "";
    cmd = "*";
});
div === null || div === void 0 ? void 0 : div.addEventListener("click", function () {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate();
        console.log(num1);
    }
    display.value = "";
    cmd = "/";
    display.value = "";
});
add === null || add === void 0 ? void 0 : add.addEventListener("click", function () {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate();
        console.log(num1);
    }
    display.value = "";
    cmd = "+";
});
sub === null || sub === void 0 ? void 0 : sub.addEventListener("click", function () {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate();
        console.log(num1);
    }
    display.value = "";
    cmd = "-";
});
equal === null || equal === void 0 ? void 0 : equal.addEventListener("click", function () {
    calculate();
    cmd = "";
    display.value = String(num1);
});
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
    num1 = null;
    num2 = null;
    display.value = "";
    cmd = "";
});
