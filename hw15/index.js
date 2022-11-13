const API_Key = "uYHPCrdlZ6Nwi2puAgv2HJwcYCEf5Jr5";
const API_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
const sitys = [
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

const sity = document.querySelector(".sitychosen_city");
sitys.forEach((element) => {
  const option = document.createElement("option");
  option.classList.add("sity");
  option.innerHTML = element.name;
  sity.append(option);
});

let sityKey;
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  sitys.forEach((element) => {
    if (element.name === sity.value) {
      sityKey = element.key;
    }
  });
});
const convertToCelsius = function (temp) {
  return Math.round((temp - 32) / 1.8);
};
const dayList = document.querySelector(".day-list");
const xhttp = new XMLHttpRequest();
const loadWeather = function () {
  const fullUrl = `${API_URL}${sityKey}?apikey=${API_Key}`;
  xhttp.open("GET", fullUrl);
  xhttp.send();
  xhttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.response);
      //   console.log(result);
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

        const iconDay = document.createElement("span");
        const iconNight = document.createElement("span");
        iconDay.classList.add("icon");
        iconNight.classList.add("icon");
        iconDay.innerHTML = `<img src="./icons/${element.Day.Icon}-s.png" alt="image"/>`;
        iconNight.innerHTML = `<img src="./icons/${element.Night.Icon}-s.png" alt="image"/>`;

        const date1 = new Date(element.Date);
        const date = document.createElement("span");
        date.classList.add("date");
        date.innerHTML = `${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}`;
        day.append(date);

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
        wrapper1.append(spanDay);
        wrapper1.append(tempDay);
        wrapper1.append(iconDay);
        wrapper2.append(spanNight);
        wrapper2.append(tempNight);
        wrapper2.append(iconNight);
        day.append(wrapper1);
        day.append(wrapper2);
        dayList.append(day);
        console.log();
      });
    } else {
      console.log("No data for server");
    }
  };
};
button.addEventListener("click", loadWeather);
