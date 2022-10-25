const listOfProducts = [
  {
    productName: "Bread",
    productDate: {
      weight: 300,
      sertificate: true,
      dateOfExpiry: "21/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 11.75,
  },
  {
    productName: "Cheese",
    productDate: {
      weight: 180,
      sertificate: true,
      dateOfExpiry: "15/11/2022",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 67,
  },
  {
    productName: "Yogurt",
    productDate: {
      weight: 280,
      sertificate: true,
      dateOfExpiry: "30/10/2022",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 29.5,
  },
  {
    productName: "Sour cream",
    productDate: {
      weight: 500,
      sertificate: true,
      dateOfExpiry: "26/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 45.6,
  },
  {
    productName: "Spaghetti",
    productDate: {
      weight: 400,
      sertificate: true,
      dateOfExpiry: "10/01/2023",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "PL",
    productPrice: 70,
  },
  {
    productName: "Tomatoes",
    productDate: {
      weight: 1000,
      sertificate: true,
      dateOfExpiry: "06/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 64.6,
  },
  {
    productName: "Cucumbers",
    productDate: {
      weight: 1000,
      sertificate: true,
      dateOfExpiry: "05/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 58.2,
  },
  {
    productName: "Beer",
    productDate: {
      weight: 330,
      sertificate: true,
      dateOfExpiry: "13/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 44.5,
  },
  {
    productName: "Chips",
    productDate: {
      weight: 80,
      sertificate: true,
      dateOfExpiry: "01/03/2023",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 42.8,
  },
  {
    productName: "Rice",
    productDate: {
      weight: 950,
      sertificate: false,
      dateOfExpiry: "30/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "CN",
    productPrice: 92.5,
  },
  {
    productName: "Cookies",
    productDate: {
      weight: 320,
      sertificate: true,
      dateOfExpiry: "01/02/2023",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "PL",
    productPrice: 38,
  },
  {
    productName: "Shrimp",
    productDate: {
      weight: 750,
      sertificate: true,
      dateOfExpiry: "20/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "PL",
    productPrice: 190,
  },
  {
    productName: "Milk",
    productDate: {
      weight: 1200,
      sertificate: true,
      dateOfExpiry: "21/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 53.25,
  },
  {
    productName: "Bacon",
    productDate: {
      weight: 80,
      sertificate: true,
      dateOfExpiry: "21/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 42,
  },
  {
    productName: "Eggs",
    productDate: {
      weight: 400,
      sertificate: true,
      dateOfExpiry: "21/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 75.4,
  },
];
const header = document.createElement("h1");
header.innerHTML = "List of product";
header.classList.add("header");
document.body.prepend(header);

const list = document.createElement("ul");
list.classList.add("products-list");

let maxPrice = 0;
let allPrice = 0;

for (let i = 0; i < listOfProducts.length; i++) {
  const item = document.createElement("li");
  for (let x = 0; x < 8; x++) {
    const span = document.createElement("span");
    item.append(span);
    if (x % 2 === 0) {
      span.classList.add("span-color");
    }
  }

  // li.classList.add(`item-${i + 1}`);
  item.classList.add("product-item");

  const name = listOfProducts[i]["productName"];
  const weight = listOfProducts[i].productDate.weight;
  const date = listOfProducts[i].productDate.dateOfExpiry;
  const sugar = listOfProducts[i].productDate.sugarFree ? "without" : "with";
  const price = listOfProducts[i]["productPrice"];
  const provider = listOfProducts[i]["productProvider"];
  const sertificate = listOfProducts[i].productDate.sertificate ? " " : "!";

  let country;
  switch (listOfProducts[i].productCountry) {
    case "UA":
      country = "./images/ukrainee_64.png";
      break;
    case "CN":
      country = "./images/china_64.png";
      break;
    case "PL":
      country = "./images/poland_64.png";
      break;
  }

  item.children[0].innerHTML = `Name:  ${name} `;
  item.children[1].innerHTML = `Weight:  ${weight} g.`;
  item.children[2].innerHTML = `Date of expiry:  ${date}`;
  item.children[3].innerHTML = `sugar:  ${sugar}`;
  item.children[4].innerHTML = `price:  ${price}грн.`;
  item.children[5].innerHTML = `provider:  ${provider}`;
  item.children[6].innerHTML = sertificate;
  item.children[7].innerHTML = `<img src=${country} />`;
  item.children[6].style.fontSize = "30px";
  item.children[6].style.color = "red";
  if (i % 2 === 0) {
    item.classList.add("li-color");
  }

  allPrice += listOfProducts[i]["productPrice"];

  if (maxPrice < listOfProducts[i]["productPrice"]) {
    maxPrice = listOfProducts[i]["productPrice"];
  }
  list.append(item);
}
document.body.append(list);

const midlePrice = +(allPrice / listOfProducts.length).toFixed(2);

const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const paragraph3 = document.createElement("p");
paragraph1.innerHTML = `All price: ${allPrice} UAH.`;
paragraph2.innerHTML = `Max price: ${maxPrice} UAH.`;
paragraph3.innerHTML = `Midle price: ${midlePrice} UAH.`;
paragraph1.classList.add("tittle");
paragraph2.classList.add("tittle");
paragraph3.classList.add("tittle");
document.body.append(paragraph1);
document.body.append(paragraph2);
document.body.append(paragraph3);
