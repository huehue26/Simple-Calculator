let previousInput = "0";
let currentInput = "0";
let operation;
let check=false;
const outp = document.querySelector(".output");

document.querySelector('.cal-main').addEventListener("click", function (event) {
    clickbutton(event.target.innerText);
});

function clickbutton(value) {
    if (isNaN(parseInt(value))) {
        handelsymbols(value);
    }
    else {
        handlenumbers(value);
    }
}

function handelsymbols(value) {
    switch (value) {
        case 'C':
            currentInput = "0";
            previousInput = "0";
            break;
        case '+':
            previousInput = currentInput;
            currentInput = "0";
            operation = '+';
            break;
        case '-':
            previousInput = currentInput;
            currentInput = "0";
            operation = '-';
            break;
        case '×':
            previousInput = currentInput;
            currentInput = "0";
            operation = '*';
            break;
        case '÷':
            previousInput = currentInput;
            currentInput = "0";
            operation = '/';
            break;
        case '=':
            if(operation==='+'){
                let b=parseInt(currentInput);
                let a=parseInt(previousInput);
                let res=a+b;
                currentInput=res.toString();
            }
            else if(operation==='-'){
                let b=parseInt(currentInput);
                let a=parseInt(previousInput);
                let res=a+b;
                currentInput=res.toString();
            }
            else if(operation==='*'){
                let b=parseInt(currentInput);
                let a=parseInt(previousInput);
                let res=a*b;
                currentInput=res.toString();
            }
            else if(operation==='/'){
                let b=parseInt(currentInput);
                let a=parseInt(previousInput);
                let res=a/b;
                currentInput=res.toString();
            }
            break;
    }
    printoutput();
}

function handlenumbers(value) {
    if (currentInput === "0") {
        currentInput = value;
    }
    else {
        currentInput += value;
    }
    printoutput();
}
function printoutput() {
        outp.innerText = currentInput;
}