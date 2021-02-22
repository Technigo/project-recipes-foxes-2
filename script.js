const recipes = document.getElementById("recipes")
const chickenUrl = "https://api.edamam.com/search?q=chicken&app_id=18a88bfd&app_key=6b689aa35628db7e2adc1990e205bd0f&from=0&to=3&calories=591-722&health=alcohol-free"

console.log(dummyData);

/* fetch(chickenUrl)
.then((response) => {
    console.log(`${response.ok}`);
    console.log(`${response.status}`);
    return response.json();
})

.then((json) => {
    console.log(`${json}`);
})  */

const recipe = dummyData.hits[0].recipe.label

recipes.innerHTML =+ `${recipe}`