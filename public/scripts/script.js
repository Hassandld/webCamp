const btn = document.getElementById('btn');
const bck = document.getElementById('bck');
let mode = 'light';
function changeColor() { 
    if ( mode === 'light' ) {
        mode = 'black';
        bck.style.background = 'green';
        btn.style.background = "green"; 
    } else {
        mode = 'light';
        bck.style.background = 'blue';
        btn.style.background = "blue"; 
    }
  
} 
btn.addEventListener("click", changeColor);

const url = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=5b43d9cdb22149b4b57566b725be9f09'
function handle(response) {
    return response.json();
}

function handleJson(json) {
    const img = document.createElement('img');
    img.src = json.results[0].image
    const main = document.getElementById('container');
    main.appendChild(img);
}
function getFood(){
    fetch(url)
    .then(handle)
    .then(handleJson);
}

const foodBtn = document.getElementById('food')
foodBtn.addEventListener('click', getFood)

