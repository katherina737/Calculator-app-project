var buttons = document.querySelectorAll("button");
var screen = document.querySelector(".display");
var listOfNumbers = [];
var calculation;

function calculate(button){
    var value = button.textContent;
    if (value ==="CE"){
        listOfNumbers = [];
        screen.textContent = "0";
    }
    else if (value==="C"){
        listOfNumbers = listOfNumbers.slice(0,listOfNumbers.length -1);
        calculation = listOfNumbers.join('');
        screen.textContent = calculation;
    }
    else if (value === "=") {
        screen.textContent = eval(calculation);
    }
    else{
        listOfNumbers.push(value);
        calculation = listOfNumbers.join('');
        screen.textContent = calculation;
    }
}

screen.textContent = "0";
buttons.forEach(button => button.addEventListener("click", () => calculate(button)));

