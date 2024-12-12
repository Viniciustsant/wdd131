// Obtém o ano atual e insere no rodapé
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtém a data de última modificação da página e insere no rodapé
const lastModified = document.lastModified;
document.getElementById("lasModified").textContent = `Last Modified: ${lastModified}`;

const menu = document.getElementById('menu');
const hamburgerBtn = document.getElementById('hamburguer-btn');

hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('ativo'); // Alterna a classe para mostrar/ocultar
  hamburgerBtn.classList.toggle('ativo'); // Alterna o estilo do botão (ex. 'X')
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName:"Fortalesza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-11031.jpg"
  },

  {
    templeName: "Salvador Brazil",
    location: "Salvador, Brazil",
    dedicated: "2024, October, 20",
    area: 29963,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
  },

  {
  templeName: "São Paulo, Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  }
];

const templeList = document.getElementById("temples");

function renderTemples(templesArray) {
  templeList.innerHTML = "";


  templesArray.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add ("temple-card");

    templeCard.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading= lazy>
    <h3>${temple.templeName}</h3>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area} sq ft</p>
`;

  templeList.appendChild(templeCard);
  });
}
function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
    case "old":
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 1900;
      });
      break;
    case "new":
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year > 2000;
      });
      break;
    case "large":
      filteredTemples = temples.filter(temple => temple.area > 87000);
      break;
    case "small":
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    case "home":
    default:
      filteredTemples = temples;
      break;
  }

  renderTemples(filteredTemples);
}

// Adiciona eventos ao menu
document.querySelectorAll(".menu a").forEach(menuItem => {
  menuItem.addEventListener("click", event => {
    event.preventDefault(); // Evita comportamento padrão do link
    const filter = menuItem.getAttribute("data-filter");
    filterTemples(filter);
  });
});

// Renderiza todos os templos ao carregar a página
renderTemples(temples);