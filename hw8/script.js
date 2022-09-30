const newArrayOfNumbers = [];
const arrayLeтgth = Math.abs(
  +prompt("Ведіть довжину масиву який ви хочете створити")
);
if (isNaN(arrayLeтgth)) {
  console.log("Не вірний тип даних!");
} else {
  newArrayOfNumbers.length = arrayLeтgth;
}
for (let i = 0; i < newArrayOfNumbers.length; i++) {
  const userNumber = +prompt(
    `Ведіть число яке ви хочете додати до масиву під індексом ${i}`
  );
  if (isNaN(userNumber)) {
    console.log("Не вірний тип даних!");
    newArrayOfNumbers[i] = +prompt(
      `Ви вели не вірний тип даних! Спобуйте знову додати число до масиву під індексом ${i}`
    );
  } else {
    newArrayOfNumbers[i] = userNumber;
  }
  if (isNaN(newArrayOfNumbers[i])) {
    i--;
    console.log(
      "Ви вели не число, сробуйте знову з початку! Тільки будьласка уважніше!!!)))"
    );
  }
}

newArrayOfNumbers.sort(function (a, b) {
  return a - b;
});

const shoppingList = [
  { productName: "bread", productPrice: 25, productQuantity: 2 },
  { productName: "beer", productPrice: 30, productQuantity: 4 },
  { productName: "potatoes", productPrice: 8.5, productQuantity: 4 },
  { productName: "tea", productPrice: 80, productQuantity: 2 },
  { productName: "coffee", productPrice: 16, productQuantity: 2 },
  { productName: "cheese", productPrice: 75, productQuantity: 1 },
  { productName: "bananas", productPrice: 16, productQuantity: 4 },
];

let totalCostOfPurchases = 0;
shoppingList.forEach((element) => {
  totalCostOfPurchases += element.productQuantity * element.productPrice;
});
console.log(`Загальна сума покупок ${totalCostOfPurchases} грн.`); // 535

const productQuantityArray = shoppingList.map((element) => {
  return element.productQuantity;
});
const minNumberOfProducts = Math.min(...productQuantityArray); // 1

let totalNumberOfProducts = 0;
shoppingList.forEach((element) => {
  totalNumberOfProducts += element.productQuantity;
}); // 19

let maxPriceOfProduct = 0;
shoppingList.forEach((element) => {
  if (element.productPrice > maxPriceOfProduct) {
    maxPriceOfProduct = element.productPrice;
  }
});
// maxPriceOfProduct = 80
let productWithMaxPrice;
shoppingList.forEach((element) => {
  if (element.productPrice === maxPriceOfProduct) {
    productWithMaxPrice = element.productName;
  }
});
// productWithMaxPrice = tea

const addingProductToList = () => {
  const newProduct = {
    productName: prompt(
      "Ведіть назву продукту який ви хочете додати до списку"
    ).toLowerCase(),
    productPrice: +prompt("Ведіть ціну продукту"),
    productQuantity: +prompt("Ведіть кількість продукту"),
  };
  if (
    !isNaN(Number(newProduct.productName)) ||
    isNaN(newProduct.productPrice) ||
    isNaN(newProduct.productQuantity)
  ) {
    console.log("Невірний тип данних!");
  } else {
    shoppingList.push(newProduct);
  }
};
addingProductToList();

const deletingProductOfList = () => {
  const removableProduct = prompt(
    "Ведіть назву продукту який ви хочете видалити"
  ).toLowerCase();
  let productAvailability = false;
  if (isNaN(Number(removableProduct))) {
    shoppingList.forEach((element) => {
      if (element.productName === removableProduct) {
        productAvailability = true;
      }
    });

    if (productAvailability === true) {
      shoppingList.splice(
        shoppingList.findIndex((element, index, array) => {
          if (element.productName === removableProduct) {
            return index;
          }
        }),
        1
      );
    } else {
      console.log("Такий продукт відсутній у списку");
    }
  } else {
    console.log("Невірний тип данних!");
  }
};
deletingProductOfList();

const arrayOfNumbers = [
  16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54,
  76, -4, 12, 6, -35,
];

let sumPositiveElements = 0;
let numberPositiveElements = 0;
arrayOfNumbers.forEach((num) => {
  if (num > 0) {
    sumPositiveElements += num;
    numberPositiveElements++;
  }
});
// sumPositiveElements = 393, numberPositiveElements = 13

let minArrayElement;
let indexMinArrayElement;
arrayOfNumbers.findIndex((element, index, array) => {
  if (element === Math.min(...arrayOfNumbers)) {
    minArrayElement = element;
    indexMinArrayElement = index;
  }
});
// minArrayElement = -56, indexMinArrayElement = 5

let maxArrayElement;
let indexMaxArrayElement;
arrayOfNumbers.findIndex((element, index, array) => {
  if (element === Math.max(...arrayOfNumbers)) {
    maxArrayElement = element;
    indexMaxArrayElement = index;
  }
});
// maxArrayElement = 76, indexMaxArrayElement = 19

let numberNegativeElements = 0;
arrayOfNumbers.forEach((num) => {
  if (num < 0) {
    numberNegativeElements++;
  }
});
// numberNegativeElements = 11

let numberNotPairPositiveElements = 0;
arrayOfNumbers.forEach((num) => {
  if (num > 0 && num % 2 === 1) {
    numberNotPairPositiveElements++;
  }
});
// numberNotPairPositiveElements = 3

let sumPairPositiveElements = 0;
arrayOfNumbers.forEach((num) => {
  if (num > 0 && num % 2 === 0) {
    sumPairPositiveElements += num;
  }
});
// sumPairPositiveElements = 294

let productPositiveElements = 1;
arrayOfNumbers.forEach((num) => {
  if (num > 0) {
    productPositiveElements *= num;
  }
});
// productPositiveElements = 31793018594918400
