const input = document.getElementById('input');
const btn = document.getElementById('foodbtn');
const container = document.getElementById(container);


async function getFood(){
    let ingredients = input.value;
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=5b43d9cdb22149b4b57566b725be9f09`
    const res = await fetch(url);
    const json = await res.json();
    for (let i = 0; i < json.length; i++) {
     let recipes = json[i]
     let title = document.createElement('h1');
     title.innerText = recipes.title
 
     container.appendChild(title)
    }
    
}
btn.addEventListener('click', getFood);