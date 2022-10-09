const dataVerification = (data_1, data_2, data_3, data_4, data_5, data_6) => {
  let checkResult = true;
  if (
    typeof data_1 !== "string" ||
    typeof data_3 !== "string" ||
    typeof data_4 !== "string" ||
    typeof data_5 !== "string"
  ) {
    checkResult = false;
  } else if (typeof data_2 !== "number" || isNaN(data_2)) {
    checkResult = false;
  }
  data_6.forEach((element) => {
    if (typeof element !== "string") {
      checkResult = false;
    }
  });
  return checkResult;
};

const Person = function (
  name,
  age,
  gender,
  nationality,
  country,
  countriesForTravel
) {
  if (
    dataVerification(
      name,
      age,
      gender,
      nationality,
      country,
      countriesForTravel
    ) === false
  ) {
    console.log("не вірний тип данних!");
  } else {
    (this.name = name),
      (this.age = age),
      (this.gender = gender),
      (this.nationality = nationality),
      (this.country = country),
      (this.countriesForTravel = countriesForTravel);
  }
};
const human = new Person("Roman", 33, "male", "Ukrainian", "Ukraine", [
  "Canada",
  "USA",
]);
const fnAcquaintance = function (person) {
  console.log(
    `Hello my name is ${this.name}, i am ${this.age} yers old, my gender is ${this.gender}, i am ${this.nationality} , i live in ${this.country}.`
  );
};
const fnWakeUp = function (person) {
  console.log(`${this.name} wakes up  in ${this.country}.`);
};
const fnFallAsleep = function (person) {
  console.log(`${this.name} fall asleep in ${this.country}.`);
};
const fnCountriesForTravel = function (person) {
  console.log(
    `${this.name} want to trawel in these contris: ${this.countriesForTravel}.`
  );
};
fnCountriesForTravel.call(human);
fnAcquaintance.call(human);
fnFallAsleep.apply(human);
fnWakeUp.apply(human);

// const person = {
//   name: "Roman",
// };
// const info = function (phone, email) {
//   console.log(`name: ${this.name}  phone: ${phone} email: ${email}`);
// };

Function.prototype.myOwnBind = function (context, ...rest) {
  return (...args) => {
    this.call(context, ...rest.concat(args));
  };
};

// info.myOwnBind(person, "0938711109")("romanblecko@gmail.com");
// name: Roman  phone: 0938711109 email: romanblecko@gmail.com

const comparisonOfObjects = (object1, object2) => {
  if (typeof object1 !== "object" || typeof object2 !== "object") {
    console.log("Не вірний тип данних");
  } else {
    const keysObj1 = Object.keys(object1);
    const keysObj2 = Object.keys(object2);
    let result = true;
    if (keysObj1.length !== keysObj2.length) {
      result = false;
    }

    for (let i = 0; i < keysObj1.length; i++) {
      if (keysObj1[i] !== keysObj2[i]) {
        result = false;
      }
      if (object1[keysObj1[i]] !== object2[keysObj2[i]]) {
        result = false;
      }
    }

    if (result === true) {
      console.log("Обекти абсолютно ідентичні!");
    } else {
      console.log("Обекти не є ідентичні!");
    }
  }
};

const student1 = {
  name: "Roman",
  age: 33,
  city: "Mena",
};
const student2 = {
  name: "Julia",
  age: 27,
  city: "Mena",
};

comparisonOfObjects(student1, student2);

const Calculator = function () {
  (this.number1 = null),
    (this.number2 = null),
    (this.enterData = function () {
      this.number1 = +prompt("Ведіть перше число");
      this.number2 = +prompt("Ведіть друге число");
    }),
    (this.calculateSum = () => {
      if (
        isNaN(this.number1) ||
        isNaN(this.number2) ||
        this.number1 === null ||
        this.number2 === null
      ) {
        this.enterData();
        this.calculateSum();
      }
      return this.number1 + this.number2;
    }),
    (this.calculateNSD = function () {
      let maxDivisor = 0;
      if (
        isNaN(this.number1) ||
        isNaN(this.number2) ||
        this.number1 === null ||
        this.number2 === null
      ) {
        this.enterData();
        this.calculateNSD();
      }
      for (
        let i = 1;
        i < Math.abs(this.number1) && i < Math.abs(this.number2);
        i++
      ) {
        if (this.number1 % i === 0 && this.number2 % i === 0) {
          maxDivisor = i;
        }
      }

      if (maxDivisor !== 1) {
        return maxDivisor;
      } else {
        return `Числа ${this.number1} і ${this.number2} не мають спільного дільника!`;
      }
    }),
    (this.calculateNSK = function () {
      if (
        isNaN(this.number1) ||
        isNaN(this.number2) ||
        this.number1 === null ||
        this.number2 === null
      ) {
        this.enterData();
        this.calculateNSK();
      } else {
        let min = this.number1 > this.number2 ? this.number1 : this.number2;
        while (true) {
          if (min === this.number1 || min === this.number2) {
            min++;
          } else {
            if (min % this.number1 === 0 && min % this.number2 === 0) {
              break;
            }
          }
          min++;
        }
        return min;
      }
    });
};
const calculator_1 = new Calculator();
calculator_1.enterData();

console.log(calculator_1.calculateSum());
console.log(calculator_1.calculateNSD());
console.log(calculator_1.calculateNSK());
