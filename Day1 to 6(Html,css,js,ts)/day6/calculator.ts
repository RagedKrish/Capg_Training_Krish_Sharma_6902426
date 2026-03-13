let num = document.body.getElementsByClassName("num");
let display = document.querySelector(".display") as HTMLInputElement;
let div = document.getElementById("/")
let equal = document.getElementById("equal")
let mul = document.getElementById("*")
let add = document.getElementById("+")
let sub = document.getElementById("-")
let reset = document.getElementById("reset")
let num1: number | null;
let num2: number | null;
let input: string;
let cmd: string = "";

// loop through all number buttons
for (let i = 0; i < num.length; i++) {

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

mul?.addEventListener("click", () => {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate()
        console.log(num1);
    }
    display.value = "";
    cmd = "*";
})
div?.addEventListener("click", () => {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate()
        console.log(num1);
    }
    display.value = "";
    cmd = "/";
    display.value = "";
})
add?.addEventListener("click", () => {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate()
        console.log(num1);
    }
    display.value = "";
    cmd = "+";
})
sub?.addEventListener("click", () => {
    if (cmd === "") {
        num1 = Number(display.value);
    }
    else {
        calculate()
        console.log(num1);
    }
    display.value = "";
    cmd = "-";
})

equal?.addEventListener("click", () => {
    calculate();
    cmd="";
    display.value = String(num1);
})

reset?.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    display.value = ""
    cmd = ""
})

