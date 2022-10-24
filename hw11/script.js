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

const ul = document.createElement("ul");
ul.classList.add("products-list");
document.body.prepend(ul);
for (let i = 0; i < listOfProducts.length; i++) {
  const li = document.createElement("li");
  for (let x = 0; x < 8; x++) {
    const span = document.createElement("span");
    li.append(span);
    if (x % 2 === 0) {
      span.style.color = "#05267b";
    }
  }
  ul.append(li);
  li.classList.add(`item-${i + 1}`);
  li.classList.add("product-item");

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

  li.children[0].innerHTML = `Name:  ${name} `;
  li.children[1].innerHTML = `Weight:  ${weight} g.`;
  li.children[2].innerHTML = `Date of expiry:  ${date}`;
  li.children[3].innerHTML = `sugar:  ${sugar}`;
  li.children[4].innerHTML = `price:  ${price}грн.`;
  li.children[5].innerHTML = `provider:  ${provider}`;
  li.children[6].innerHTML = sertificate;
  li.children[7].innerHTML = `<img src=${country} />`;
  li.children[6].style.fontSize = "30px";
  li.children[6].style.color = "red";
  if (i % 2 === 0) {
    li.style.backgroundColor = "lightgreen";
  }
}
