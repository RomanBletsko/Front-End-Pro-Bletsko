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
  if (!this.status) {
    this.status = true;
    this.carCondition -= +(Math.random() * (2.5 - 0.1) + 0.1).toFixed(1);
    console.log("Поїхали");
  } else {
    console.log(
      "Ви не можете розпочати нову поїздку доки не закінчена попередня"
    );
  }
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
const myFathersCar = new Universal(6.5, "disel", 2, "Passat", 2005, 1400);
const myFriendsCar = new Sedan(8, "gasoline", 2.5, "6", 2017, 1350);
myFathersCar.startRide();
myFathersCar.endRide();
myFathersCar.startRide();
myFathersCar.endRide();
const diler = function (car) {
  if (car.carCondition > 0 && car.carCondition < 100) {
    const vehicleDamage = +(100 - car.carCondition).toFixed(2);
    let priceByType;
    if (car instanceof Hatchback) {
      priceByType = 110;
    } else if (car instanceof Sedan) {
      priceByType = 125;
    } else if (car instanceof Universal) {
      priceByType = 130;
    }
    let coefEngenType;
    let coefYear;
    let coefWeight;
    car.engineType === "disel" && car instanceof Hatchback
      ? (coefEngenType = 2.2)
      : (coefEngenType = 1.8);
    car.engineType === "disel" && car instanceof Sedan
      ? (coefEngenType = 2.5)
      : (coefEngenType = 2);
    car.engineType === "disel" && car instanceof Universal
      ? (coefEngenType = 2.9)
      : (coefEngenType = 2.4);
    if (car.year >= 1990 && car.year <= 1999 && car instanceof Hatchback) {
      coefYear = 2;
    }
    if (car.year >= 2000 && car.year <= 2009 && car instanceof Hatchback) {
      coefYear = 1.7;
    }
    if (car.year >= 2010 && car.year <= 2018 && car instanceof Hatchback) {
      coefYear = 1.4;
    }
    if (car.year >= 2019 && car.year <= 2022 && car instanceof Hatchback) {
      coefYear = 1.2;
    }
    if (car.year >= 1990 && car.year <= 1999 && car instanceof Sedan) {
      coefYear = 2.6;
    }
    if (car.year >= 2000 && car.year <= 2009 && car instanceof Sedan) {
      coefYear = 2;
    }
    if (car.year >= 2010 && car.year <= 2018 && car instanceof Sedan) {
      coefYear = 1.8;
    }
    if (car.year >= 2019 && car.year <= 2022 && car instanceof Sedan) {
      coefYear = 1.5;
    }
    if (car.year >= 1990 && car.year <= 1999 && car instanceof Universal) {
      coefYear = 3;
    }
    if (car.year >= 2000 && car.year <= 2009 && car instanceof Universal) {
      coefYear = 2.5;
    }
    if (car.year >= 2010 && car.year <= 2018 && car instanceof Universal) {
      coefYear = 2.2;
    }
    if (car.year >= 2019 && car.year <= 2022 && car instanceof Universal) {
      coefYear = 2;
    }
    if (car.weight >= 800 && car.weight <= 1100 && car instanceof Hatchback) {
      coefWeight = 1.5;
    }
    if (car.weight >= 1101 && car.weight <= 1400 && car instanceof Hatchback) {
      coefWeight = 1.7;
    }
    if (car.weight > 1401 && car instanceof Hatchback) {
      coefWeight = 2;
    }
    if (car.weight >= 800 && car.weight <= 1100 && car instanceof Sedan) {
      coefWeight = 1.6;
    }
    if (car.weight >= 1101 && car.weight <= 1400 && car instanceof Sedan) {
      coefWeight = 1.8;
    }
    if (car.weight > 1401 && car instanceof Sedan) {
      coefWeight = 2.1;
    }
    if (car.weight >= 800 && car.weight <= 1100 && car instanceof Universal) {
      coefWeight = 1.7;
    }
    if (car.weight >= 1101 && car.weight <= 1400 && car instanceof Universal) {
      coefWeight = 1.9;
    }
    if (car.weight > 1401 && car instanceof Universal) {
      coefWeight = 2.2;
    }
    const sum = Math.floor(
      vehicleDamage * priceByType * coefYear * coefEngenType * coefWeight
    );
    console.log(
      `Ваш автомобіль був зношений на ${vehicleDamage}%, ремонт коштував ${sum} грн.`
    );
    car.carCondition = 100;
  }
};
diler(myFathersCar);
console.log(myFathersCar);
