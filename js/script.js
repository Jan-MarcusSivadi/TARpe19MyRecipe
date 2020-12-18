const _main = document.querySelector('.main');
const list = document.querySelector('.list-group');
const _instructions = document.querySelector('.instructions');

document.addEventListener('DOMContentLoaded', () => {

    let url = "https://api.spoonacular.com/recipes/random/?apiKey=8bd68c58645443c593a11594beb33f29";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let recipe = data.recipes[0];
            console.log(recipe);

            let summary = recipe.summary;
            console.log(summary);

            let title = recipe.title;
            console.log(title);
            
            let instructions = recipe.instructions;
            console.log(title);

            let ingredients = recipe.extendedIngredients;
            console.log(ingredients);

            let outputImage = recipe.image;

            let main_text = `
                <h1 class="title">${title}</h1>

                <img src="${outputImage}" alt="" class="mainImage">

                <p class="summary">${summary}</p>

                <h1 class="title">What you need:</h1>
            `;
            _main.innerHTML += main_text;

            ingredients.forEach(value => {

                let listItem = document.createElement('li');
                listItem.classList.add('list-group-item');

                let item_name = `${value.name + " (" + value.aisle + ")"}`;
                listItem.appendChild(document.createTextNode(item_name));

                let item_info = `
                    <p>Amount: ${Math.round((value.amount + Number.EPSILON) * 100) / 100} ${value.unit}</p>
                `;
                listItem.innerHTML += item_info;

                list.appendChild(listItem);
            });

            let instructions_text = `
                <h1 class="title">Instructions</h1>
                <p class="instructions">${instructions}</p>
            `;
            _instructions.innerHTML += instructions_text;

        });
});