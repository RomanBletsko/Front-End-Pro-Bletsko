const searchSmallestNumber = (num1, num2, num3, num4) => {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    console.log("Ви вели не вірний тип даних!");
  } else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    console.log("Ви вели не вірний тип даних!");
  } else {
    return Math.min(num1, num2, num3, num4);
  }
};

searchSmallestNumber(-76, 4, 5, 8); //-76
searchSmallestNumber(34, -100, 37, 0); //-100
searchSmallestNumber(27, 45, 3, 579); //3
searchSmallestNumber(35, 67, -1, 5); //-1

const searchTheGreatestDivisor = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Ви вели не вірний тип даних!");
  } else if (isNaN(num1) || isNaN(num2)) {
    console.log("Ви вели не вірний тип даних!");
  } else {
    let maxDivisor;
    for (let i = 1; i < Math.abs(num1) && i < Math.abs(num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        maxDivisor = i;
      }
    }
    if (maxDivisor <= 1) {
      console.log(`Числа ${num1} і ${num2} не мають спільного дільника!`);
    } else {
      return maxDivisor;
    }
  }
};
searchTheGreatestDivisor(9, 6); // 3
searchTheGreatestDivisor(27, 9); // 3
searchTheGreatestDivisor(13, 6); // Числа 13 і 6 не мають спільного дільника!
searchTheGreatestDivisor(156, 575); // Числа 156 і 575 не мають спільного дільника!

const checkingForPerfectNumber = (num1) => {
  if (typeof num1 !== "number") {
    console.log("Ви вели не вірний тип даних!");
  } else if (isNaN(num1)) {
    console.log("Ви вели не вірний тип даних!");
  } else {
    let dividers = null;
    for (let i = 1; i < num1; i++) {
      if (num1 % i === 0) {
        dividers += i;
      }
    }
    if (dividers === num1) {
      console.log(`Число ${num1} є досконалим!`);
    } else {
      console.log(`Число ${num1} не є досконалим!`);
    }
  }
};
checkingForPerfectNumber(6); // Є досконалим!
checkingForPerfectNumber(10); // Не є досконалим!
checkingForPerfectNumber(47); // НЕ є досконалим!

const sumNumbersInRange = (num1, num2) => {
  if (typeof num1 !== "number") {
    console.log("Ви вели не вірний тип даних!");
  } else if (isNaN(num1)) {
    console.log("Ви вели не вірний тип даних!");
  } else {
    const largeNumber = Math.max(num1, num2);
    const smallNumber = Math.min(num1, num2);
    let sum = 0;
    for (i = smallNumber; i <= largeNumber; i++) {
      sum += i;
    }
    return sum;
  }
};
sumNumbersInRange(-1, 1); // 0
sumNumbersInRange(-5, 9); //30
sumNumbersInRange(-17, 33); //408
sumNumbersInRange(0, 11); //66

const convertСelsiusFahrenheit = (celsius) => {
  if (typeof celsius !== "number") {
    console.log("Ви вели не вірний тип даних!");
  } else if (isNaN(celsius)) {
    console.log("Ви вели не вірний тип даних!");
  } else {
    return (fahrenheit = Math.round(celsius * 1.8 + 32));
  }
};
convertСelsiusFahrenheit(0); //32
convertСelsiusFahrenheit(-10); //14
convertСelsiusFahrenheit(21); //70
convertСelsiusFahrenheit(100); //212

const createRandomNumber = () => {
  return Math.round(Math.random() * 40);
};
createRandomNumber();
