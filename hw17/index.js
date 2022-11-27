const API_Key = "K0TNJSRxnVYuWmnzFDRK57OXKpkdcBcw";
const API_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
const citys = [
  { name: "Lviv", key: 324561 },
  { name: "Kyiv", key: 324505 },
  { name: "Kharkiv", key: 323903 },
  { name: "Chernihiv", key: 322162 },
  { name: "Odesa", key: 325343 },
  { name: "Mariupol", key: 323037 },
  { name: "Poltava", key: 325523 },
  { name: "Zhytomyr", key: 326609 },
  { name: "Cherkasy", key: 321985 },
  { name: "London", key: 328328 },
  { name: "Warsaw", key: 274663 },
  { name: "New York", key: 349727 },
];

const city = document.querySelector(".chosen_city");
citys.forEach((element) => {
  const option = document.createElement("option");
  option.innerHTML = element.name;
  city.append(option);
});

let cityKey;
let cityName;
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  citys.forEach((element) => {
    if (element.name === city.value) {
      cityKey = element.key;
      cityName = element.name;
    }
  });
});
const outpuCityName = function () {
  const cityNameWrapper = document.querySelector(".chosen-city-wrapp");
  cityNameWrapper.replaceChildren();
  const citySpan = document.createElement("span");
  citySpan.innerHTML = cityName;
  citySpan.classList.add("city-span");

  cityNameWrapper.append(citySpan);
};
const renderError = () => {
  document.querySelector(".day-list").replaceChildren();
  document.querySelector(".neighbors-list").replaceChildren();
  const errorHolder = document.querySelector(".result-wrapper");
  errorHolder.replaceChildren();
  const errorSpan = document.createElement("span");
  errorSpan.innerHTML = "Error something is wrong!";
  errorSpan.classList.add("error-span");

  errorHolder.append(errorSpan);
};
// I tried to do something like this but it doesn't work!
// const buildPaletWeather = (element) => {
// const elementsArr = [
//   {
//     name: "day",
//     type: "li",
//     class: "day-item",
//     target: "day-list",
//   },
//   {
//     name: "wrapper1",
//     type: "div",
//     class: "wrapper1",
//     target: "day-item",
//   },
//   {
//     name: "wrapper2",
//     type: "div",
//     class: "wrapper2",
//     target: "day-item",
//   },
//   {
//     name: "spanDay",
//     type: "span",
//     value: "Day:",
//     class: "span",
//     target: "wrapper1",
//   },
//   {
//     name: "spanNight",
//     type: "span",
//     value: "Night:",
//     class: "span",
//     target: "wrapper2",
//   },
//   {
//     name: "skyDay",
//     type: "span",
//     class: "span",
//     // value: element.Day.IconPhrase,
//     target: "wrapper1",
//   },
//   {
//     name: "skyNigh",
//     type: "span",
//     class: "span",
//     // value: element.Day.IconPhrase,
//     target: "wrapper2",
//   },
// ];
//   let counter = 0;
//   elementsArr.forEach((obj) => {
//     const el = document.createElement(obj.type);
//     el.classList.add(obj.class);
//     document.querySelector(`.${obj.target}`).append(el);
//   });
// };

const findWeekday = (date) => {
  let weekday;
  const dateNum = date.getDay();
  switch (dateNum) {
    case 0:
      weekday = "Sunday";
      break;
    case 1:
      weekday = "Monday";
      break;
    case 2:
      weekday = "Tuesday";
      break;
    case 3:
      weekday = "Wednesday";
      break;
    case 4:
      weekday = "Thursday";
      break;
    case 5:
      weekday = "Friday";
      break;
    case 6:
      weekday = "Suturday";
      break;
    default:
      break;
  }
  return weekday;
};
const dayList = document.querySelector(".day-list");
const loadWeatherData = (result) => {
  const daysArray = result.DailyForecasts;
  dayList.replaceChildren();
  daysArray.forEach((element) => {
    const day = document.createElement("li");
    day.classList.add("day-item");

    const wrapper1 = document.createElement("div");
    const wrapper2 = document.createElement("div");
    wrapper1.classList.add("wrapper");
    wrapper2.classList.add("wrapper");

    const spanDay = document.createElement("span");
    const spanNight = document.createElement("span");
    spanDay.innerHTML = "Day:";
    spanNight.innerHTML = "Night:";

    const skyDay = document.createElement("span");
    const skyNight = document.createElement("span");
    skyDay.innerHTML = element.Day.IconPhrase;
    skyNight.innerHTML = element.Night.IconPhrase;
    const precipitationDay = document.createElement("span");
    const precipitationNight = document.createElement("span");
    precipitationDay.innerHTML = element.Day.HasPrecipitation
      ? element.Day.PrecipitationType
      : "Without precipitation.";
    precipitationNight.innerHTML = element.Night.HasPrecipitation
      ? element.Night.PrecipitationType
      : "Without precipitation.";

    const iconDay = document.createElement("span");
    const iconNight = document.createElement("span");
    iconDay.classList.add("icon");
    iconNight.classList.add("icon");
    iconDay.innerHTML = `<img src="./icons/${element.Day.Icon}-s.png" alt="image"/>`;
    iconNight.innerHTML = `<img src="./icons/${element.Night.Icon}-s.png" alt="image"/>`;
    const date1 = new Date(element.Date);
    const date = document.createElement("span");
    date.classList.add("date");

    const weekdayOutput = document.createElement("span");
    weekdayOutput.classList.add("weekday");
    weekdayOutput.innerHTML = findWeekday(date1);
    date.innerHTML = `${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}`;
    day.append(weekdayOutput, date);

    const tempDay = document.createElement("span");
    const tempNight = document.createElement("span");
    tempDay.classList.add("tempDay");
    tempNight.classList.add("tempNight");
    tempDay.innerHTML = `${convertToCelsius(
      element.Temperature.Maximum.Value
    )} ℃`;

    tempNight.innerHTML = `${convertToCelsius(
      element.Temperature.Minimum.Value
    )} ℃`;
    wrapper1.append(spanDay, tempDay, iconDay, skyDay, precipitationDay);
    wrapper2.append(
      spanNight,
      tempNight,
      iconNight,
      skyNight,
      precipitationNight
    );
    day.append(wrapper1, wrapper2);
    dayList.append(day);
  });
};
const convertToCelsius = function (temp) {
  return Math.round((temp - 32) / 1.8);
};
const neighbors = document.querySelector(".neighbors-list");
const buildNeighbor = (result) => {
  neighbors.replaceChildren();
  for (let i = 0; i < 5; i++) {
    const neighborItem = document.createElement("li");
    neighborItem.classList.add("neighbors-item");
    const neighborName = document.createElement("span");
    neighborName.classList.add("neghbor-city");
    const getWeathertBtn = document.createElement("button");
    getWeathertBtn.classList.add("neighbor-Btn");
    getWeathertBtn.innerHTML = "Get weather";
    getWeathertBtn.id = result[i].Key;
    neighborName.innerHTML = result[i].EnglishName;
    neighborItem.id = result[i].EnglishName;

    neighborItem.append(neighborName, getWeathertBtn);
    neighbors.append(neighborItem);
  }
};
const loadWeather = async () => {
  try {
    const response = await fetch(`${API_URL}${cityKey}?apikey=${API_Key}`);
    if (response.status === 200) {
      const result = await response.json();
      loadWeatherData(result);
      outpuCityName();
    }
  } catch (error) {
    console.error(error);
    renderError();
  }
};
const neighborsBaseURL =
  "http://dataservice.accuweather.com/locations/v1/cities/neighbors/";
const loadNeighbors = async () => {
  try {
    const response = await fetch(
      `${neighborsBaseURL}${cityKey}?apikey=${API_Key}`
    );
    if (response.status === 200) {
      const result = await response.json();
      buildNeighbor(result);
    }
  } catch (error) {
    console.error(error);
    renderError();
  }
};
button.addEventListener("click", () => {
  loadWeather();
  loadNeighbors();
});
neighbors.addEventListener("click", (event) => {
  if (event.target.classList.contains("neighbor-Btn")) {
    cityKey = event.target.id;
    loadWeather();
    loadNeighbors();
  }
  cityName = event.path[1].id;
});
