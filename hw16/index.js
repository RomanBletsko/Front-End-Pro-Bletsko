const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const keyAPI = "701a94e0";
const baseURL = `http://www.omdbapi.com/?apikey=${keyAPI}&`;
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
  const page404 = document.createElement("span");
  page404.innerHTML = "Erorr 404 page not found!";
  details.append(page404);
};
// build paginnation
const buildPaginationList = (data) => {
  pagination.replaceChildren();
  details.replaceChildren();
  if (data.Response === "True") {
    numberOfPages = 0;
    // create paginations button
    for (let i = 1; i <= 100 && i <= Math.ceil(data.totalResults / 10); i++) {
      const page = document.createElement("li");
      page.classList.add("pages-item");
      const pageNumber = document.createElement("button");
      pageNumber.classList.add("page-num");
      pageNumber.innerHTML = i;
      page.append(pageNumber);
      pagination.append(page);
      numberOfPages = i;
    }
    // create next prev button
    if (numberOfPages > 1) {
      const pagePrev = document.createElement("li");
      pagePrev.classList.add("pages-item");
      const pageBtnPrev = document.createElement("button");
      pageBtnPrev.classList.add("page-num");
      pageBtnPrev.innerHTML = "prev";
      pagePrev.append(pageBtnPrev);
      pagination.prepend(pagePrev);

      const pageNext = document.createElement("li");
      pageNext.classList.add("pages-item");
      const pageBtnNext = document.createElement("button");
      pageBtnNext.classList.add("page-num");
      pageBtnNext.innerHTML = "next";
      pageNext.append(pageBtnNext);
      pagination.append(pageNext);
    }
  }
};
const builtResultPage = (data) => {
  const result = data.Search;
  details.replaceChildren();
  resultList.replaceChildren();
  if (data.Response === "True") {
    result.forEach((element) => {
      const item = document.createElement("li");
      item.classList.add("result-item");
      const poster = document.createElement("img");
      poster.classList.add("poster");
      if (element.Poster === "N/A") {
        poster.src = "./images/photo_2022-11-22 16.02.29.jpeg";
      } else {
        poster.src = element.Poster;
      }
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      const title = document.createElement("h3");
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

      wrapper.append(title, year, type, imdbID, btnDetails);
      item.append(poster, wrapper);
      resultList.append(item);
      activePagination();
    });
    activePagination();
  } else {
    const notFound = document.createElement("span");
    notFound.innerHTML = "Movie not found!";
    details.append(notFound);
  }
};
// get data for pagination and result
const getData = function () {
  const getDataPagesNum = fetch(`${baseURL}s=${input.value}`);
  getDataPagesNum
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
      render404Page();
    })
    .then((data) => {
      buildPaginationList(data);
      builtResultPage(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// get result of search
const buildDataPage = function () {
  const getDataPage = fetch(`${baseURL}s=${input.value}&page=${pageNum}`);
  getDataPage
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
      render404Page();
    })
    .then((data) => {
      builtResultPage(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
// build details page
const buildDetails = (data) => {
  details.replaceChildren();
  const poster = document.createElement("img");
  poster.classList.add("poster-big");
  if (data.Poster === "N/A") {
    poster.src = "./images/photo_2022-11-22 16.02.29.jpeg";
  } else {
    poster.src = data.Poster;
  }
  const wrapper = document.createElement("div");
  wrapper.classList.add("details-wrapper");
  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerHTML = data.Title;
  const actors = document.createElement("span");
  actors.innerHTML = `Actors: ${data.Actors}`;
  const director = document.createElement("span");
  director.innerHTML = `Director: ${data.Director}`;
  const country = document.createElement("span");
  country.innerHTML = `Country: ${data.Country}`;
  const genre = document.createElement("span");
  genre.innerHTML = `Genre: ${data.Genre}`;
  const awards = document.createElement("span");
  awards.innerHTML = `Awards: ${data.Awards}`;
  const imdbRating = document.createElement("span");
  imdbRating.innerHTML = `imdbRating: ${data.imdbRating}`;
  const rated = document.createElement("span");
  rated.innerHTML = `Rated: ${data.Rated}`;
  const plot = document.createElement("span");
  plot.innerHTML = `Plot: ${data.Plot}`;

  const type = document.createElement("span");
  type.innerHTML = `Type: ${data.Type}`;
  const year = document.createElement("span");
  year.innerHTML = `Year: ${data.Year}`;

  wrapper.append(
    title,
    year,
    country,
    actors,
    awards,
    director,
    genre,
    type,
    imdbRating,
    rated,
    plot
  );
  details.append(poster, wrapper);
};
// get data for detail
const getDetails = function () {
  const detailsData = fetch(`${baseURL}i=${filmId}`);
  detailsData
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      render404Page();
    })
    .then((data) => {
      if (data.Response === "True") {
        buildDetails(data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
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
    } else if (
      event.target.textContent === "next" &&
      pageNum !== numberOfPages
    ) {
      pageNum += 1;
      buildDataPage();
    } else if (
      event.target.textContent !== "prev" &&
      event.target.textContent !== "next"
    ) {
      pageNum = +event.target.textContent;
      buildDataPage();
    }
  }
});
