const checkString = function (string) {
  let result = true;
  if (typeof string !== "string") {
    result = false;
  }
  return result;
};
const checkNumber = function (number) {
  let result = true;
  if (typeof number !== "number" || isNaN(number)) {
    result = false;
  }
  return result;
};
const checkBoolean = function (boolean) {
  let result = true;
  if (typeof boolean !== "boolean" || isNaN(boolean)) {
    result = false;
  }
  return result;
};

const createTeamForCarMileage = function (
  teamNameIs,
  driverNameIs,
  yearOfBirthOfDriverIs,
  carBrandIs,
  teamSponsorIs,
  admissionToMileageIs
) {
  if (
    checkString(teamNameIs) === false ||
    checkString(driverNameIs) === false ||
    checkNumber(yearOfBirthOfDriverIs) === false ||
    checkString(carBrandIs) === false ||
    checkString(teamSponsorIs) === false ||
    checkBoolean(admissionToMileageIs) === false
  ) {
    return "Невірний тип даних";
  } else {
    return {
      teamName: teamNameIs,
      driverName: driverNameIs,
      yearOfBirthOfDriver: yearOfBirthOfDriverIs,
      carBrand: carBrandIs,
      teamSponsor: teamSponsorIs,
      admissionToMileage: admissionToMileageIs,
    };
  }
};

createTeamForCarMileage(
  "Mazda team",
  "Roman",
  1988,
  "mazda",
  "Mazda corporation",
  true
); // {teamName: "Mazda team", driverName: "Roman", yearOfBirthOfDriver: 1988, Brand: "mazda", teamSponsor: "Mazda Team", admissionToMileage: true}

const user_1 = {
  login: "свій логін",
  password: "свій пароль",
  city: "назву свого місто",
  country: "назву краЇни",
  gender: "свою стать",
  age: "свій вік",
};

for (let key in user_1) {
  user_1[key] = prompt(` Ведіть ${user_1[key]}`);
}
console.log(user_1);
const changeUserDate = (user, keys, value) => {
  user[keys] = value;
};
changeUserDate(user_1, "city", "Irpin");

const student_1 = {
  name: "Roman",
  surname: "Bletsko",
  age: 33,
  course: "Front End Pro",
  city: "Mena",
  greeting: () => {
    console.log("Hi, everyone!");
  },
  addHomework: () => {
    console.log("Sending my howework... Please, wait");
  },
};
student_1.addHomework(); //"Sending my howework... Please, wait"

const isEmpty = function (obj) {
  let result = true;
  for (let key in obj) {
    if (obj[key] === undefined || obj[key] === null) {
      result = false;
    }
  }
  return result;
};
isEmpty(student_1); // true

const sellersIncome = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roman: 366,
  Alina: 829,
};

const sumSellersIncome = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  console.log(sum);
};
sumSellersIncome(sellersIncome); //4805

const minSellersIncome = (obj) => {
  let minValue = Infinity;
  let sellerWithMinIncome;
  for (let key in obj) {
    if (obj[key] < minValue) {
      minValue = obj[key];
    }
    if (obj[key] === minValue) {
      sellerWithMinIncome = key;
    }
  }
  console.log(`Продавець з наймешою виручкою є ${sellerWithMinIncome}`);
};
minSellersIncome(sellersIncome); //Marta

const maxSellersIncome = (obj) => {
  let maxValue = 0;
  let sellerWithMaxIncome;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
    }
    if (obj[key] === maxValue) {
      sellerWithMaxIncome = key;
    }
  }
  console.log(`Продавець з набільшою виручкою є ${sellerWithMaxIncome}`);
};
maxSellersIncome(sellersIncome); //Taras

const randomSerrchSellerOfTheMonth = (obj) => {
  const allSellers = Object.keys(obj);
  const selerOfTheMonth =
    allSellers[Math.round(Math.random() * (allSellers.length - 1))];
  console.log(`Вітаємо ви ${selerOfTheMonth} є продавцем місяця!!!`);
};
randomSerrchSellerOfTheMonth(sellersIncome);
