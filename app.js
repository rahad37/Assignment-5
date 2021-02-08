const searchFood = () =>{
  const searchWord = document.getElementById('searchPlace').value;
 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
fetch(url)
.then(res => res.json())
.then(data => displayFood(data.meals))
}
const displayFood = foods =>{
  const mealName = document.getElementById('mealName');
  mealName.innerHTML= '';
  foods.forEach(food => {
    const foodDiv = document.createElement('div');
    foodDiv.className = "image-size";
    foodDiv.innerHTML = `
    <img onclick="mealDetail('${food.idMeal}')" class="img-size" src=${food.strMealThumb}>
    <h2>${food.strMeal}</h2>
    `;
    mealName.appendChild(foodDiv);
  })
}


const mealDetail = id =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeal(data.meals))
}
const displayMeal = meals =>{
  const details = document.getElementById('details');
  details.innerHTML= '';
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.innerHTML= `
    <img src="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    <h2>${'Ingredient:'}</h2>
    <h3>${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}, ${meal.strIngredient8}, ${meal.strIngredient9}, ${meal.strIngredient10}</h3>
    `;
    details.appendChild(mealDiv);
  })
}