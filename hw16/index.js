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
// get data for pagination and create
const getData = function () {
  const getDataPagesNum = fetch(`${baseURL}s=${input.value}`);
  getDataPagesNum
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((data) => {
      pagination.replaceChildren();
      details.replaceChildren();
      if (data.Response === "True") {
        numberOfPages = 0;
        // create paginations button
        for (
          let i = 1;
          i <= 15 && i <= Math.ceil(data.totalResults / 10);
          i++
        ) {
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
    })
    .then(() => {
      activePagination();
    })
    .catch((err) => {
      console.error(err);
    });
};

// get result of search and bild result page
const bildDataPage = function () {
  const getDataPage = fetch(`${baseURL}s=${input.value}&page=${pageNum}`);
  getDataPage
    .then((result) => {
      return result.ok ? result.json() : render404Page();
    })
    .then((data) => {
      const result = data.Search;
      details.replaceChildren();
      resultList.replaceChildren();
      if (data.Response === "True") {
        result.forEach((element) => {
          const item = document.createElement("li");
          item.classList.add("result-item");
          const poster = document.createElement("img");
          poster.classList.add("poster");
          poster.src = element.Poster;
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

          item.append(poster);
          wrapper.append(title);
          wrapper.append(year);
          wrapper.append(type);
          wrapper.append(imdbID);
          wrapper.append(btnDetails);
          item.append(wrapper);
          resultList.append(item);
        });
      } else {
        const notFound = document.createElement("span");
        notFound.innerHTML = "Movie not found!";
        details.append(notFound);
      }
    })
    .then(() => {
      activePagination();
    })
    .catch((err) => {
      console.error(err);
    });
};
// get data for detail and create
const getDetails = function () {
  const detailsData = fetch(`${baseURL}i=${filmId}`);
  detailsData
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
    })
    .then((data) => {
      if (data.Response === "True") {
        details.replaceChildren();

        const poster = document.createElement("img");
        poster.classList.add("poster-big");
        poster.src = data.Poster;
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

        details.append(poster);
        wrapper.append(title);
        wrapper.append(year);
        wrapper.append(country);
        wrapper.append(actors);
        wrapper.append(awards);
        wrapper.append(director);
        wrapper.append(genre);
        wrapper.append(type);
        wrapper.append(imdbRating);
        wrapper.append(rated);
        wrapper.append(plot);

        details.append(wrapper);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

button.addEventListener("click", () => {
  pageNum = 1;
  getData();
  bildDataPage();
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
      bildDataPage();
    } else if (
      event.target.textContent === "next" &&
      pageNum !== numberOfPages
    ) {
      pageNum += 1;
      bildDataPage();
      console.log(pageNum);
    } else if (
      event.target.textContent !== "prev" &&
      event.target.textContent !== "next"
    ) {
      pageNum = +event.target.textContent;
      bildDataPage();
    }
  }
});
