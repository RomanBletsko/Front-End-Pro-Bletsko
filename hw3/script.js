let userName = prompt("Яке Ваше імʼя?");
let userSurname = prompt("Яке Ваше прізвище?");
let userFavoriteNumber = +prompt("Яке Ваше улюблене число?");
alert(`Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${userFavoriteNumber}`);
let userFirstNumber = +prompt("Введіть перше число");
let userSecondNumber = +prompt("Введіть друге число");
console.log(userFirstNumber + userSecondNumber);
console.log(userFirstNumber - userSecondNumber);
console.log(userFirstNumber * userSecondNumber);
console.log(userFirstNumber / userSecondNumber);
let userBirthYear = +prompt("В якому році Ви народились?");
let curentData = new Date();
let curentYear = curentData.getFullYear();
let userAge = curentYear - userBirthYear;
console.log(`Вік ккористувача ${userAge} років.`);
let numberA = 25;
let numberB = 17;
console.log(`Остача від ділення числа ${numberA} на число ${numberB} рівна ${numberA % numberB}`);
if(userFavoriteNumber % 2 == 0){;
    console.log(`Улюблене число користувача ${userFavoriteNumber} є парним. `);
}else{;
    console.log(`Улюблене число користувача ${userFavoriteNumber} є не парним.`)};