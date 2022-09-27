const newArray = [];
arrayLeтgth = Math.abs(
  +prompt("Ведіть довжину масиву який ви хочете створити")
);
if (isNaN(arrayLeтgth)) {
  console.log("Не вірний тип даних!");
} else {
  newArray.length = arrayLeтgth;
}
for (let i = 0; i < newArray.length; i++) {
  let userNumber = +prompt(
    `Ведіть число яке ви хочете додати до масиву під індексом ${i}`
  );
  if (isNaN(userNumber)) {
    console.log("Не вірний тип даних!");
    newArray[i] = +prompt(
      `Ви вели не вірний тип даних! Спобуйте знову додати число до масиву під індексом ${i}`
    );
  } else {
    newArray[i] = userNumber;
  }
  if (isNaN(newArray[i])) {
    i--;
    console.log("сробуйте знову з початку! Тільки будьласка уважніше)))");
  }
}
console.log(newArray);

const someArray = newArray;
someArray.sort(function (a, b) {
  return a - b;
});
console.log(someArray);

const shoppingList = [
  { productName: "bread", productPrice: 25, productQuantity: 2 },
  { productName: "beer", productPrice: 30, productQuantity: 1 },
  { productName: "potatoes", productPrice: 8.5, productQuantity: 4 },
  { productName: "tee", productPrice: 70, productQuantity: 1 },
  { productName: "coffee", productPrice: 16, productQuantity: 2 },
  { productName: "cheese", productPrice: 70, productQuantity: 1 },
  { productName: "bananas", productPrice: 16, productQuantity: 4 },
];
let sum = 0;
let obj;
for (let i = 0; i < shoppingList.length; i++) {
  obj = shoppingList[i];
  sum += obj.productQuantity * obj.productPrice;
}
console.log(sum);
