let operation = [];
let maxScreenLength = 12;
let numberCount = 1;

const calculator = {
  num1: 0,
  num2: 0,
  operator: undefined,
  currentValue: 0,
  calculate: function () {
    if (this.operator === "+") {
      this.currentValue = this.num1 + this.num2;
    } else if (this.operator === "-") {
      this.currentValue = this.num1 - this.num2;
    } else if (this.operator === "*") {
      this.currentValue = this.num1 * this.num2;
    } else if (this.operator === "/") {
      if (this.num1 != 0 && this.num2 != 0) {
        this.currentValue = this.num1 / this.num2;
      } else this.currentValue = NaN;
    }
    return this.currentValue;
  },
};

let screen = document.querySelector("p");


let numbersButton = document.querySelectorAll(".number");
numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberCount === 1) {
      if (screen.textContent.length < maxScreenLength) {
        screen.textContent += button.textContent;
        screen.textContent = checkDecimal(screen.textContent, ".");
        
      }
    }
    if (screen.textContent == calculator.operator) screen.textContent = "";
    if (numberCount === 2) {
      if (screen.textContent.length < maxScreenLength) {
        screen.textContent += button.textContent;
        screen.textContent = checkDecimal(screen.textContent, ".");
        
      }
    }
  });
});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  screen.textContent = "";
  calculator.num1 = 0;
  calculator.num2 = 0;
  calculator.operator = undefined;
  calculator.currentValue = 0;
  numberCount = 1;
  
});

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
  if (numberCount === 1) {
    calculator.num1 = parseFloat(screen.textContent);
  } else calculate.num2 = parseFloat(screen.textContent);
});

let operatorsButton = document.querySelectorAll(".operator");
operatorsButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberCount === 1) {
      calculator.num1 = parseFloat(screen.textContent);
      numberCount++;
    }
    screen.textContent = button.textContent;
    calculator.operator = button.textContent;
  });
});

let equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  if (calculator.operator != undefined) {
    if (numberCount === 2) {
      calculator.num2 = parseFloat(screen.textContent);
    } else calculator.num1 = screen.textContent;
    calculator.calculate();
    while (calculator.currentValue.toString().length > maxScreenLength) {
      calculator.currentValue = parseFloat(
        calculator.currentValue.toString().slice(0, -1)
      );
    }
    screen.textContent = calculator.currentValue.toString();
    calculator.num1 = parseFloat(screen.textContent);
    calculator.currentValue = 0;
    numberCount = 1;
 }
});

function checkDecimal(str) {
 const arrayedStr = Array.from(str);
  return arrayedStr.filter(item, ()=> {item = '.' })? arrayedStr.slice(0, -1).join(',') : arrayedStr.join(',')
}

function checkDecimal(str, char) {
  let firstIndex = str.indexOf(char);

  if (firstIndex === -1) {
    return str;
  }

  let secondIndex = str.indexOf(char, firstIndex + 1);
  if (secondIndex === -1) {
    return str
  }

  return str.slice(0, secondIndex) + str.slice(secondIndex + 1);

}

function checkBeforeOperate(num1, num2, operator) {
  let 
} 
