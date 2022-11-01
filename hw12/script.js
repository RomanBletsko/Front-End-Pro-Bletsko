const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operator = ["+", "-", "/", "*"];
let num = "0";
let acc = "";
let secondNum = false;
const display = document.querySelector(".display");

document.querySelector(".keyWrapper").onclick = (event) => {
  const key = event.target.textContent;

  if (key === "AC") {
    num = "0";
    acc = "";
    display.innerHTML = num;
  }
  // adding a digit to a number and only one point.
  if (digit.includes(key)) {
    secondNum = true;
    if (!num.includes(".")) {
      num += key;
      display.innerHTML = num;
    }
    if (num.includes(".") && key !== ".") {
      num += key;
      display.innerHTML = num;
    }
    // cleaning a firs zero without point
    const arrayOfNum1 = num.split("");
    if (
      arrayOfNum1.length > 1 &&
      arrayOfNum1[0] === "0" &&
      arrayOfNum1[1] !== "."
    ) {
      num = arrayOfNum1.splice(1).join("");
      display.innerHTML = num;
    }
  }
  // adding a number, aading an operators to an accumulator,  and cleaning a number
  if (operator.includes(key)) {
    acc += num;
    acc += key;
    num = "0";
    secondNum = false;
  }
  //calculation
  const arrayOfAcc = acc.split("");
  if (key === "=") {
    //blocking division by zero
    if (arrayOfAcc[arrayOfAcc.length - 1] === "/" && num === "0") {
      num = "Error: Invalid operation";
      console.log("Сідай два, на нуль ділити не можна!");
      display.innerHTML = num;
      acc = "";
      num = "0";
    } else if (!secondNum) {
      //blocking calculation without a second number
      num = "Error: Invalid operation";
      console.log("А друге число хто буде вводити, я чи шо?");
      display.innerHTML = num;
      acc = "";
      num = "0";
    } else {
      acc += num;

      num = acc;
      acc = "";
      const calculation = eval(num);

      num = calculation.toFixed(10);
      const arrayOfNum1 = num.split("");
      //cleaning last zero with point
      const deleteLastZero = function () {
        arrayOfNum1.splice(arrayOfNum1.length - 1, 1);
      };
      let lastZero = true;
      while (lastZero) {
        if (
          (arrayOfNum1[arrayOfNum1.length - 1] === "0" &&
            arrayOfNum1.includes(".")) ||
          arrayOfNum1[arrayOfNum1.length - 1] === "."
        ) {
          deleteLastZero();
        } else {
          lastZero = false;
        }
      }

      num = arrayOfNum1.join("");
      display.innerHTML = num;
    }
  }
};

const input = document.querySelector(".input");
const btnAdd = document.querySelector(".btnAdd");
const list = document.querySelector(".list");
btnAdd.addEventListener("click", () => {
  if (input) {
    const item = document.createElement("li");
    const btnСleaning = document.createElement("button");
    btnСleaning.classList.add("cleaning");
    btnСleaning.innerHTML = "x";
    btnСleaning.addEventListener("click", () => {
      btnСleaning.parentElement.remove();
    });
    item.classList.add("item");
    item.innerHTML = input.value;
    item.prepend(btnСleaning);
    list.prepend(item);
    input.value = "";
  }
});
