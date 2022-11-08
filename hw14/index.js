const input1 = document.querySelector(".input1");
const display1 = document.querySelector(".display1");
const button1 = document.querySelector(".enter1");

const input2 = document.querySelector(".input2");
const display2 = document.querySelector(".display2");
const button2 = document.querySelector(".enter2");

const input3 = document.querySelector(".input3");
const display3 = document.querySelector(".display3");
const button3 = document.querySelector(".enter3");

const input4 = document.querySelector(".input4");
const display4 = document.querySelector(".display4");
const button4 = document.querySelector(".enter4");

const input5 = document.querySelector(".input5");
const display5 = document.querySelector(".display5");
const button5 = document.querySelector(".enter5");

// task1
const serchCentury = function () {
  const century = Math.floor(+input1.value / 100) + 1;
  let end;
  const array = [11, 12, 13, 14];
  if (array.includes(century)) {
    end = "th";
  } else if (century % 10 === 1) {
    end = "st";
  } else if (century % 10 === 2) {
    end = "nd";
  } else if (century % 10 === 3) {
    end = "rd";
  } else {
    end = "th";
  }
  display1.innerHTML =
    +input1.value < 10000 ? `${century}${end}` : "You kept too many numbers!";
  input1.value = "";
};
button1.addEventListener("click", () => {
  serchCentury();
});

// task 2
let error2 = false;
const getStringForVowelOne = function () {
  const string = input2.value;
  if (string.length === 0) {
    error2 = true;
  }
  return string;
};
const vowelOne = function (string) {
  const stringArray = string.toLowerCase().split("");
  let result = "";
  const arrayOfVowels = ["a", "e", "i", "j", "o", "q", "u", "y"];
  stringArray.forEach((element) => {
    if (arrayOfVowels.includes(element)) {
      result += "1";
    } else {
      result += "0";
    }
  });
  display2.innerHTML = error2 ? "You did not lead any symbol!" : result;
  input2.value = "";
  error2 = false;
};
button2.addEventListener("click", () => {
  const string = getStringForVowelOne();
  vowelOne(string);
});

// task 3
let error3 = false;
const getStringForSpinWords = function () {
  const string = input3.value;
  if (string.length === 0) {
    error3 = true;
  }
  return string;
};
const spinWords = (string) => {
  const result = string
    .split(" ")
    .map((element) => {
      if (element.length > 5) {
        return element.split("").reverse().join("");
      }
      return element;
    })
    .join(" ");
  display3.innerHTML = error3 ? "You have not entered any words!" : result;
  input3.value = "";
  error3 = false;
};
button3.addEventListener("click", () => {
  const strings = getStringForSpinWords();
  spinWords(strings);
});

// task 4
let error4 = false;
const getHighAndLowNumber = function () {
  const array = input4.value.split(" ");
  if (array.length < 2 || array[array.length - 1] === "") {
    error4 = true;
  }
  array.map((element) => {
    if (isNaN(+element)) {
      error4 = true;
    } else {
      return +element;
    }
  });

  return array;
};
const highAndLow = function (arrayOfNumbers) {
  display4.innerHTML = error4
    ? "Invalid data type or insufficient characters!"
    : `${Math.max(...arrayOfNumbers)}, ${Math.min(...arrayOfNumbers)}`;
  error4 = false;
  input4.value = "";
};

button4.addEventListener("click", () => {
  const arrayNumbers = getHighAndLowNumber();
  highAndLow(arrayNumbers);
});

// task 5
let error5 = false;
const getPhoneData = function () {
  const arr = input5.value.split(" ");
  arr.forEach((element) => {
    if (isNaN(+element) || element.length > 1) {
      error5 = true;
    }
  });
  if (arr.length < 10 || arr.length > 10) {
    error5 = true;
  }
  if (arr[9] === "") {
    error5 = true;
  }
  return arr;
};
const createPhoneNumber = function (array) {
  const [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10] = array;
  display5.innerHTML = error5
    ? "Invalid data type or insufficient characters!"
    : `(${num1}${num2}${num3}) ${num4}${num5}${num6}-${num7}${num8}${num9}${num10}`;
  input5.value = "";
  error5 = false;
};
button5.addEventListener("click", () => {
  const arrayPhoneData = getPhoneData();
  createPhoneNumber(arrayPhoneData);
});
