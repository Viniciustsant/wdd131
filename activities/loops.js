/*myInfo = {
    name: "Vinicius Santiago",
    photo: "images/perfil1.jpg",
    favoriteFoods: ["Lasanha", "Hamburguer", "Costela de Porco", "Macarronada"],
    hobbies: ["Playing soccer","Watching movies", "resting"],
    placesLived: [
        {
            place: "Fortaleza, CE",
            length: "18 years",
        },
        {
            place: "Salvador, BA",
            length: "1 year and 4 months",
        },
        {
            place: "São Paulo, SP",
            length: "2 years",
        },
    ],
};*\

/*let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);*/

/*const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

const foodsElement = document.querySelector('#favorite-foods');
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
  }
  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  foodsElement.innerHTML = foodListElements.join(''); */

  const DAYS = 6;
  const LIMIT = 30;
  let studentReport = [11, 42, 33, 64, 29, 37, 44];

  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);

    }
  };

  let i=0;
  while (i < studentReport.length){
    if (studentReport[i] < LIMIT){
            console.log(studentReport);
            i++;
    }
  }

studentReport.forEach(function (item) {
    if (item < LIMIT){
        console.log(item);
    }    
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }