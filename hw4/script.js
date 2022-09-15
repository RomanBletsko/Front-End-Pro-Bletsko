console.log((0.1 + 0.2).toFixed(1));
const userLogin = prompt("Enter your login");
const userPassword = prompt("Enter your password");
if (userLogin === "admin" && userPassword === "12pass33210") {
  console.log("Вітаю, ви увійшли у адмін панель!");
  // } else if (userLogin === "admin" && userPassword !== "12pass33210") {
  //   console.log("проблема з логіном або паролем");
  // } else if (userLogin !== "admin" && userPassword === "12pass33210") {
  //   console.log("проблема з логіном або паролем");
  // } else {
  //   console.log(
  //     "такий користувач немає доступу до admin-панелі"
  //   );
} else if (userLogin !== "admin" && userPassword !== "12pass33210") {
  console.log("такий користувач немає доступу до admin-панелі");
} else {
  console.log("проблема з логіном або паролем");
}
const userMoney = +prompt("Скільки грошей у вас є");
console.log(
  "Кавун: 21 грн. за кг., Морква: 8 грн. за кг., Картопля: 12 грн. за кг."
);
const userChoise = prompt("Що ви хотіли б купити?");
let userProduct;
if (userChoise === "кавун") {
  userProduct = 21;
} else if (userChoise === "морква") {
  userProduct = 8;
} else if (userChoise === "картопля") {
  userProduct = 12;
} else {
  console.log("товар не знайдено");
}
const quantityProdact = Math.floor(userMoney / userProduct);
const rest = userMoney % userProduct;
if (quantityProdact >= 1) {
  console.log(
    `За ${userMoney} грн. Ви можете придбати ${quantityProdact} кг. даного продукту. У Вас залишиться ${rest} грн.`
  );
} else if (userMoney < 21 && userProduct >= 12) {
  console.log(
    `На жаль, у Вас недостатньо коштів для купівлі хоча б 1 кг. ${userChoise}`
  );
} else if (userMoney < 12 && userMoney >= 8) {
  console.log(
    `На жаль, у Вас недостатньо коштів для купівлі хоча б 1 кг. ${userChoise}`
  );
} else {
  console.log(
    "На жаль, у Вас недостатньо коштів для купівлі хоча б 1 кг. будь-якого продукту"
  );
}
const sideTriangleA = +prompt("Ведіть розмір сторони А вашого трикутника ");
const sideTriangleB = +prompt("Ведіть розмір сторони B вашого трикутника ");
const sideTriangleC = +prompt("Ведіть розмір сторони C вашого трикутника ");
if (sideTriangleA <= 0 || sideTriangleB <= 0 || sideTriangleC <= 0) {
  console.log("Такий трикутник не існує!");
} else {
  console.log("Такий трикутник існує!");
}
// 2 && 0 && 3 || true && false; відповідь false
// false || " " || 3 && true; відповідь ' '
// 1 && 1000 && '0' || 0 && 'Bob'; відповідь '0'
// -1 || 0 || 0 && "" || 1010; відповідь -1
