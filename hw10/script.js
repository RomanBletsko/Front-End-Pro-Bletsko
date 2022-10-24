const Car = function () {
  this.fuelConsumption = arguments[0][0];
  this.engineType = arguments[0][1];
  this.engineCapacity = arguments[0][2];
  this.model = arguments[0][3];
  this.year = arguments[0][4];
  this.weight = arguments[0][5];
  this.status = arguments[0][6];
  this.carCondition = 100;
};
Car.prototype.startRide = function () {
  if (this.status) {
    return "Ви не можете розпочати нову поїздку доки не закінчена попередня";
  }
  this.status = true;
  this.carCondition -= +(Math.random() * (2.5 - 0.1) + 0.1).toFixed(1);
  console.log("Поїхали");
};
Car.prototype.endRide = function () {
  this.status = false;
  console.log("По ходу приїхали");
};
const Hatchback = function () {
  Car.call(this, arguments);
};
const Sedan = function () {
  Car.call(this, arguments);
};
const Universal = function () {
  Car.call(this, arguments);
};
Hatchback.prototype = Object.create(Car.prototype);
Sedan.prototype = Object.create(Car.prototype);
Universal.prototype = Object.create(Car.prototype);
const myCar = new Hatchback(10, "gasoline", 2.5, "cx5", 2017, 1700);
const myFathersCar = new Universal(6.5, "diesel", 2, "Passat", 2005, 1400);
const myFriendsCar = new Sedan(8, "gasoline", 2.5, "6", 2017, 1350);
myCar.startRide();
myCar.endRide();
myCar.startRide();
myCar.endRide();
const dieler = function (car) {
  if (car.carCondition > 0 && car.carCondition < 100) {
    const carDamage = +(100 - car.carCondition).toFixed(2);
    const arrayKoef = [
      [
        [2, 1.7, 1.4, 1.2], // Коефіцієнт за рік авто, тип Хечбек.
        [2.2, 1.8], // Коефіцієнт за тип двігуна, тип Хечбек.
        [1.5, 1.7, 2], // Коефіціент за вагу, тип Хечбек.
      ],
      [
        [2.6, 2, 1.8, 1.5], // Коефіцієнт за рік авто, тип Седан.
        [2.5, 2], // Коефіцієнт за тип двігуна, тип Седан.
        [1.6, 1.8, 2.1], // Коефіціент за вагу, тип Седан.
      ],
      [
        [3, 2.5, 2.2, 2], // Коефіцієнт за рік авто, тип Універсал.
        [2.9, 2.4], // Коефіцієнт за тип двігуна, тип Універсал.
        [1.7, 1.9, 2.2], // Коефіціент за вагу, тип Універсал.
      ],
    ];
    let priceByType, a1, a2, a3, a4; // Тип кузова, рік авто, тип двигуна, вага авто.
    car instanceof Hatchback
      ? ((priceByType = 110), (a1 = 0))
      : car instanceof Sedan
      ? ((priceByType = 125), (a1 = 1))
      : car instanceof Universal
      ? ((priceByType = 130), (a1 = 2))
      : console.log("Тип кузова не знайдено");
    if (car.year >= 1990 && car.year <= 1999) {
      a2 = 0;
    } else if (car.year >= 2000 && car.year <= 2009) {
      a2 = 1;
    } else if (car.year >= 2010 && car.year <= 2018) {
      a2 = 2;
    } else if (car.year >= 2019 && car.year <= 2022) {
      a2 = 3;
    }
    car.engineType === "diesel" ? (a3 = 0) : (a3 = 1);
    if (car.weight >= 800 && car.weight <= 1100) {
      a4 = 0;
    } else if (car.weight >= 1101 && car.weight <= 1400) {
      a4 = 1;
    } else if (car.weight > 1401) {
      a4 = 2;
    }
    const coefYear = arrayKoef[a1][0][a2];
    const coefEngienType = arrayKoef[a1][1][a3];
    const coefWeight = arrayKoef[a1][2][a4];
    const sum = Math.floor(
      carDamage * priceByType * coefYear * coefEngienType * coefWeight
    );
    console.log(
      `Ваш автомобіль був зношений на ${carDamage}%, ремонт коштував ${sum} грн.`
    );
    car.carCondition = 100;
  }
};
dieler(myCar);

// if (car instanceof Hatchback) {
//   priceByType = 110;
//   a1 = 0;
// } else if (car instanceof Sedan) {
//   priceByType = 125;
//   a1 = 1;
// } else if (car instanceof Universal) {
//   priceByType = 130;
//   a1 = 2;
// }
// car.year >= 1990 && car.year <= 1999
//       ? (a2 = 0)
//       : car.year >= 2000 && car.year <= 2009
//       ? (a2 = 1)
//       : car.year >= 2010 && car.year <= 2018
//       ? (a2 = 2)
//       : car.year >= 2019 && car.year <= 2022
//       ? (a2 = 3)
//       : console.log("Авто такого року не підтримується!");
