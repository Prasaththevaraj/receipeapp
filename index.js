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

div.innerHTML = `<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${receipe.receipeName}</h5>
    <p class="card-text">${receipe.ingredients}</p>
    <p class="card-text">${receipe.cookingMethod}</p>

    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>`;
receipeCard.appendChild(div);
}

// clear feilds
UI.prototype.clearFields = function(){
  document.getElementById('receipe-name').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('cooking-method').value = '';
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

// Instantiate UI
const ui = new UI();

// add receipe cards
ui.addReceipeToCard(receipe);

// clear feilds
ui.clearFields();

e.preventDefault();
});