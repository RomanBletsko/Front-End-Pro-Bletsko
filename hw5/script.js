for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}
const userNumberFirst = +prompt("Будьласка ведіть будь яке число");
let isPrime = "є простим";
for (let i = 2; i < userNumberFirst; i++) {
  if (userNumberFirst % i === 0) {
    isPrime = "не є простим";
    break;
  }
}
console.log(`Число ${userNumberFirst} ${isPrime}.`);
const purchaseSumm = +prompt("Яка сума вашої покупки?");
let discount;
purchaseSumm < 100
  ? (discount = 3)
  : purchaseSumm >= 100 && purchaseSumm < 200
  ? (discount = 5)
  : (discount = 7);
console.log(`Ваша знижка ${discount}%.`);
let firstMultiplier;
let secondMultiplier;
let product;
for (firstMultiplier = 2; firstMultiplier <= 9; firstMultiplier++) {
  for (secondMultiplier = 2; secondMultiplier <= 9; secondMultiplier++) {
    product = firstMultiplier * secondMultiplier;
    console.log(`${firstMultiplier} * ${secondMultiplier} = ${product}`);
  }
}
const costUSD = 36.76;
let numberUAH;
for (let i = 10; i <= 100; i += 10) {
  numberUAH = costUSD * i;
  console.log(`${i} USD = ${Math.round(numberUAH)} UAH`);
}
let userNumberSecond;
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let pairNumber = 0;
let notPairNumber = 0;
for (let i = 1; i <= 15; i++) {
  userNumberSecond = +prompt(`Ведіть число ${i}`);
  if (userNumberSecond > 0) {
    positiveNumber++;
  } else if (userNumberSecond < 0) {
    negativeNumber++;
  } else {
    zeroNumber++;
  }
  if (userNumberSecond % 2 === 0) {
    pairNumber++;
  } else {
    notPairNumber++;
  }
}
console.log(
  `Додатніх чисел${positiveNumber}, відємних чисел ${negativeNumber}, нулів ${zeroNumber}, парних чисел ${pairNumber}, непарних чисел ${notPairNumber}`
);
