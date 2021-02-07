  var button = document.querySelector('.searchButton');
  button.addEventListener('click', function(){
    
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => displayFood(data.meals))

function displayFood(foods){
    const foodsDiv = document.getElementById('foodName');
    foods.forEach(food =>{
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        foodDiv.setAttribute("onclick",`showDetails('${food.strMealThumb}')`)
        const foodInfo = ` 
        <img src=${food.strMealThumb}>
        <h3>${food.strMeal}</h3>
        `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
      
    }
  })

const showDetails = name =>{ 
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => ingredientDetail(data.meals[0]))
}
const ingredientDetail = food =>{
    const foodDiv = document.getElementById('mealDetail');
    foodDiv.innerHTML =`
    <img class="img-size" src=${food.strMealThumb}>
    <h1>Name: ${food.strMeal}</h1>
    <h3>Ingredient: Beef, Chicken, Lemon, saul, carrot, eggs</h3>
    <p>Price: $33</p>
    `;
}