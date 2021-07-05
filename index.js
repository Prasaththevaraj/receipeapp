// receipe constructor
function Receipe(receipeName, ingredients, cookingMethod) {
    this.receipeName = receipeName;
    this.ingredients = ingredients;
    this.cookingMethod = cookingMethod;


}

// UI consructor 
function UI() {}
// add receipe to card 
UI.prototype.addReceipeToCard = function(receipe) {
  const receipeCard = document.getElementById("good-receipe");
//   Create div element 
const div = document.createElement('div');
// div.innerHTML = `<div class="card-body">
// <h5 class="card-title">${receipe.receipeName}</h5>
// <p class="card-text">${receipe.ingredients}</p>
// <p class="card-text">${receipe.cookingMethod}</p>
// </div>`;


}

// event listeners
document.getElementById('receipe-form').addEventListener('submit',
function(e) {
    // get form values
const receipeName = document.getElementById('receipe-name').value,
      ingredients = document.getElementById('ingredients').value,
      cookingMethod = document.getElementById('cooking-method').value

// initiating receipe
const receipe = new Receipe(receipeName, ingredients, cookingMethod);

// Instiate UI
const ui = new UI();

// add receipe cards
ui.addReceipeToCard(receipe);

e.preventDefault();
});