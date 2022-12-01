const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const KEY_API = "701a94e0";
const baseURL = `http://www.omdbapi.com/?apikey=${KEY_API}&`;
const errorWrapper = document.querySelector(".error-wrapper");
const resultList = document.querySelector(".result-list");
let pageNum = 1;
const pagination = document.querySelector(".pages-list");
let numberOfPages;
let filmId;
const details = document.querySelector(".details");

const activePagination = () => {
  document.querySelectorAll(".page-num").forEach((element) => {
    element.classList.remove("active");
    if (+element.innerHTML === pageNum) {
      element.classList.add("active");
    }
  });
};
// create error page
const render404Page = () => {
  errorWrapper.replaceChildren();
  const page404 = document.createElement("span");
  page404.innerHTML = "Erorr 404 page not found!";
  errorWrapper.append(page404);
};
// build paginnation start
// buid visible pagination nums
const buildSinglePageNum = (num) => {
  const page = document.createElement("li");
  page.classList.add("pages-item");
  const pageNumber = document.createElement("button");
  pageNumber.classList.add("page-num");
  pageNumber.innerHTML = num;
  page.append(pageNumber);
  pagination.append(page);
};
const paginationArr = (data, pageN, numberPages) => {
  let iStart;
  let iEnd;
  if (numberPages < 11 && numberPages > 2) {
    iStart = 2;
    iEnd = Math.ceil(data.totalResults / 10) - 1;
  } else if (numberPages >= 11) {
    if (pageN < 7) {
      iStart = 2;
      iEnd = 10;
    } else if (pageN >= 7 && pageN < Math.ceil(data.totalResults / 10) - 5) {
      iStart = pageN - 4;
      iEnd = pageN + 4;
    } else {
      iStart = Math.ceil(data.totalResults / 10) - 6;
      iEnd = Math.ceil(data.totalResults / 10) - 1;
    }
  }
  for (let i = iStart; i <= iEnd; i++) {
    buildSinglePageNum(i);
  }
};
// buid first and last pagination nums

const builtPaginationNums = (data, numberPages) => {
  const buildPoints = () => {
    const page = document.createElement("li");
    page.classList.add("pages-item");
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-span");
    pageNumber.innerHTML = "...";
    page.append(pageNumber);
    pagination.append(page);
  };
  if (numberPages <= 2) {
    buildSinglePageNum(1);
    buildSinglePageNum(numberPages);
  } else if (numberPages <= 10) {
    buildSinglePageNum(1);
    paginationArr(data, pageNum, numberPages);
    buildSinglePageNum(numberPages);
  } else if (numberPages > 10) {
    if (pageNum < 7) {
      buildSinglePageNum(1);
      paginationArr(data, pageNum, numberPages);
      buildPoints();
      buildSinglePageNum(numberPages);
    } else if (pageNum >= 7 && pageNum < numberPages - 5) {
      buildSinglePageNum(1);
      buildPoints();
      paginationArr(data, pageNum, numberPages);
      buildPoints();
      buildSinglePageNum(numberPages);
    } else {
      buildSinglePageNum(1);
      buildPoints();
      paginationArr(data, pageNum, numberPages);
      buildSinglePageNum(numberPages);
    }
  }
};
let dataOf;
// build prev next pagination batton
const buildPaginationList = (data) => {
  pagination.replaceChildren();
  details.replaceChildren();
  if (data.Response === "True") {
    numberOfPages = Math.ceil(data.totalResults / 10);
    dataOf = data;
    if (numberOfPages > 1) {
      const pagePrev = document.createElement("li");
      pagePrev.classList.add("pages-item");
      const pageBtnPrev = document.createElement("button");
      pageBtnPrev.classList.add("page-num");
      pageBtnPrev.innerHTML = "prev";
      pagePrev.append(pageBtnPrev);
      pagination.prepend(pagePrev);

      builtPaginationNums(dataOf, numberOfPages);

      const pageNext = document.createElement("li");
      pageNext.classList.add("pages-item");
      const pageBtnNext = document.createElement("button");
      pageBtnNext.classList.add("page-num");
      pageBtnNext.innerHTML = "next";
      pageNext.append(pageBtnNext);
      pagination.append(pageNext);
    } else {
      buildSinglePageNum(1);
    }
  }
};
// build pagination End

const renderPoster = (data) => {
  if (data.Poster === "N/A") {
    return "./images/cat.jpg";
  }
  return data.Poster;
};
// render result items
const renderResultPage = (result) => {
  result.forEach((element) => {
    const item = document.createElement("li");
    item.classList.add("result-item");
    const poster = document.createElement("img");
    poster.classList.add("poster");
    poster.src = renderPoster(element);
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const title = document.createElement("h3");
    const holder = document.createElement("div");
    holder.classList.add("holder");
    title.classList.add("title");
    title.innerHTML = element.Title;
    const type = document.createElement("span");
    type.innerHTML = `Type: ${element.Type}`;
    const year = document.createElement("span");
    year.innerHTML = `Year: ${element.Year}`;
    const imdbID = document.createElement("span");
    imdbID.innerHTML = `IMDB ID: ${element.imdbID}`;
    const btnDetails = document.createElement("button");
    btnDetails.classList.add("btn-details");
    btnDetails.id = element.imdbID;
    btnDetails.innerHTML = "Details";

    holder.append(year, type, imdbID, btnDetails);
    wrapper.append(title, holder);
    item.append(poster, wrapper);
    resultList.append(item);
    activePagination();
  });
};
const builtResultPage = (data) => {
  const result = data.Search;
  details.replaceChildren();
  errorWrapper.replaceChildren();
  resultList.replaceChildren();
  if (data.Response === "True") {
    renderResultPage(result);
    activePagination();
  } else {
    const notFound = document.createElement("span");
    notFound.innerHTML = "Movie not found!";
    errorWrapper.append(notFound);
  }
};
// get data for pagination and result
const getData = async function () {
  try {
    const response = await axios.get(`${baseURL}s=${input.value}`);
    if (response.status === 200) {
      const data = await response.data;
      buildPaginationList(data);
      builtResultPage(data);
    }
  } catch (error) {
    console.error(error);
    render404Page();
  }
};

// get result of search
const buildDataPage = async function () {
  try {
    const response = await axios.get(
      `${baseURL}s=${input.value}&page=${pageNum}`
    );
    if (response.status === 200) {
      const data = await response.data;
      builtResultPage(data);
    }
  } catch (error) {
    console.error(error);
    render404Page();
  }
};
// build details page
const buildDetails = (data) => {
  details.replaceChildren();
  const poster = document.createElement("img");
  poster.classList.add("poster-big");
  poster.src = renderPoster(data);
  const wrapper = document.createElement("div");
  wrapper.classList.add("details-wrapper");
  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerHTML = data.Title;
  wrapper.append(title);
  const dataArray = [
    "Year",
    "Country",
    "Actors",
    "Awards",
    "Director",
    "Genre",
    "Type",
    "imdbRating",
    "Rated",
    "Plot",
  ];
  dataArray.forEach((element) => {
    const spanElement = document.createElement("span");
    spanElement.classList.add("span");
    spanElement.innerHTML = `${element}: ${data[element]}`;
    wrapper.append(spanElement);
  });
  details.append(poster, wrapper);
};
// get data for detail
const getDetails = async function () {
  try {
    const response = await axios.get(`${baseURL}i=${filmId}`);
    if (response.status === 200) {
      const data = await response.data;
      buildDetails(data);
    }
  } catch (error) {
    console.error(error);
    render404Page();
  }
};

button.addEventListener("click", () => {
  pageNum = 1;
  getData();
  // buildDataPage();
});
resultList.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-details")) {
    filmId = event.target.id;
    getDetails();
  }
});
pagination.addEventListener("click", (event) => {
  // pagination logic
  if (event.target.classList.contains("page-num")) {
    if (pageNum !== 1 && event.target.textContent === "prev") {
      pageNum -= 1;
      buildDataPage();
      buildPaginationList(dataOf);
    } else if (
      event.target.textContent === "next" &&
      pageNum !== numberOfPages
    ) {
      pageNum += 1;
      buildDataPage();
      buildPaginationList(dataOf);
    } else if (
      event.target.textContent !== "prev" &&
      event.target.textContent !== "next"
    ) {
      pageNum = +event.target.textContent;
      buildDataPage();
      buildPaginationList(dataOf);
    }
  }
});
