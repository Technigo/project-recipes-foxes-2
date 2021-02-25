const recipeList = document.getElementById("recipes");
const query = "vegetarian";
const fetchesEdamameData = `https://api.edamam.com/search?q=${query}&app_id=18a88bfd&app_key=6b689aa35628db7e2adc1990e205bd0f&from=0&to=10`;
let output = "";

const fetchedData = () => {
  fetch(fetchesEdamameData)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.hits
        .forEach((data) => {

          output += `<p class="label">${data.recipe.label}</p>`;
          output += `<img src="${data.recipe.image}"></img>`;
          output += `<p class="cooking-time">${data.recipe.totalTime} mins.</p>`;
          recipeList.innerHTML = output;
          output += `<a href=${data.recipe.url}>See the recipe here</a>`;
        })

        .catch((error) => {
          recipeList.innerHTML = `<h2>Ooops, an error has occurred! Please try again later.<h2>`;
        });
    });
};
fetchedData();

recipeList.innerHTML = output;


