const input1 = document.querySelector(".input1");
const btn1 = document.querySelector(".btn1");
const out1 = document.querySelector(".out1");
let timerToHoliday;
const dataVerification = function () {
  out1.innerHTML = "";
  clearTimeout(timerToHoliday);
  if (isNaN(+input1.value)) {
    out1.innerHTML = " Is not a Numer";
  } else {
    console.log(input1.value);
    const timerToHoliday = setTimeout(() => {
      out1.innerHTML = "russia is destroyed :) !";
    }, +(input1.value + "000"));
  }
  input1.value = "";
};

btn1.addEventListener("click", dataVerification);

const input2 = document.querySelector(".input2");
const btn2 = document.querySelector(".btn2");
const out2 = document.querySelector(".out2");
let interval1;
let inputDateMSec;
btn2.addEventListener("click", () => {
  clearInterval(interval1);
  inputDateMSec = input2.valueAsNumber;
  const inputDate = input2.valueAsDate;
  const monthsArray = [31, 31, 28, 31, 30, 31, 30, 31, 21, 30, 31, 30];
  const bigYears = [2024, 2026, 2030];
  const timer = function () {
    const date = new Date();
    const lefTime = Math.round((inputDateMSec - date) / 1000) - 7200; // -7200 it's corection time zone.
    const minutes = Math.floor(lefTime / 60);
    const hour = Math.floor(minutes / 60);
    // years
    let years;
    if (inputDate.getMonth() < date.getMonth()) {
      years = inputDate.getFullYear() - date.getFullYear() - 1;
    } else {
      years = inputDate.getFullYear() - date.getFullYear();
    }
    // months
    let months;
    if (inputDate.getMonth() < date.getMonth()) {
      months = 12 + (inputDate.getMonth() - date.getMonth());
    } else if (inputDate.getMonth() > date.getMonth()) {
      months = inputDate.getMonth() - date.getMonth();
    } else if (years !== 0 && inputDate.getMonth() === date.getMonth()) {
      months = 12;
      years -= 1;
    } else {
      months = 0;
    }

    bigYears.forEach((element) => {
      if (date.getFullYear() === element) {
        monthsArray[2] = 29;
      } else {
        monthsArray[2] = 28;
      }
    });

    // days
    let days;
    if (date.getDate() < inputDate.getDate()) {
      days = inputDate.getDate() - date.getDate();
      days -= 1;
    } else if (date.getDate() > inputDate.getDate()) {
      days =
        monthsArray[inputDate.getMonth()] +
        (inputDate.getDate() - date.getDate() - 1);
      months -= 1;
      //   days -= 1;
    } else if (months !== 0 && date.getDate() === inputDate.getDate()) {
      days = monthsArray[inputDate.getMonth()] - 1;
      months -= 1;
      //   days -= 1;
    } else {
      days = 0;
    }

    out2.innerHTML = `Until the start of the campaign, years:${years} month:${months}  days:${days}, hours:${
      hour % 24
    }, minutes:${minutes % 60}`;
  };
  // витратив декілька днів щоб порахувати дні і тільки потім помітив що рахувати дні не треба

  timer();
  interval1 = setInterval(() => {
    timer();
  }, 1000);

  if (inputDateMSec === Date.now()) {
    out2.innerHTML = "Finish!!!";
    clearInterval(interval1);
  } else if (inputDateMSec < Date.now()) {
    out2.innerHTML = "The date has already passed!";
    clearInterval(interval1);
  }
});

const phone = document.querySelector(".phone");
const rAM = document.querySelector(".ram");
const phoneMemory = document.querySelector(".memory");
const btnCalculate = document.querySelector(".btn3");
const out3 = document.querySelector(".out3");

const priceArray = [
  {
    name: "Samsung",
    basePrice: 500,
    ram: {
      2: 0,
      4: 50,
      6: 90,
      8: 130,
    },
    memory: {
      64: 0,
      128: 30,
      256: 50,
      512: 73,
    },
  },
  {
    name: "Iphone",
    basePrice: 700,
    ram: {
      2: 0,
      4: 60,
      6: 95,
      8: 140,
    },
    memory: {
      64: 0,
      128: 40,
      256: 60,
      512: 80,
    },
  },
  {
    name: "xiaomi",
    basePrice: 350,
    ram: {
      2: 0,
      4: 25,
      6: 45,
      8: 60,
    },
    memory: {
      64: 0,
      128: 15,
      256: 27,
      512: 55,
    },
  },
];
let selectedPhone;
const calculatePriceFunc = () => {
  switch (phone.value) {
    case "Samsung":
      selectedPhone = 0;
      break;
    case "Iphone":
      selectedPhone = 1;
      break;
    case "Xiaomi":
      selectedPhone = 2;
      break;
  }
  const calculatePrice =
    priceArray[selectedPhone].basePrice +
    priceArray[selectedPhone].ram[rAM.value] +
    priceArray[selectedPhone].memory[phoneMemory.value];
  out3.innerHTML = `Phone: ${phone.value} with RAM: ${rAM.value}gb. Memory: ${phoneMemory.value}
  gb. will cost: ${calculatePrice}$ `;
};

btnCalculate.addEventListener("click", calculatePriceFunc);
