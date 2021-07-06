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

div.innerHTML = `<div class="card w-75 delete-option">
  <div class="card-body">
    <h5 class="card-title">${receipe.receipeName}</h5>
    <p class="card-text">${receipe.ingredients}</p>
    <p class="card-text">${receipe.cookingMethod}</p>

    <button onclick= "deleteItem(this)" type="click" class="btn btn-danger">Delete</button>
  </div>
</div>`;
receipeCard.appendChild(div);
}


// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div 
  const div = document.createElement('div');

  // add classes 
  div.className = `alert ${className}`;

  // Add text 
  div.appendChild(document.createTextNode(message));

  // Get parent
  const container =document.querySelector(".container");

  // Get form 
  const form = document.querySelector('#receipe-form');

  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 sec

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// // Delete receipe
// UI.prototype.deleteReceipe = function(target) {
//   if(target.className === "receipe-group") {
//     target.parentElement.parentElement.remove();
//   }
// }
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

// validation
if(receipeName === '' || ingredients === '' || cookingMethod === '') {
  // Error alert
  ui.showAlert('Please fill in all fields', 'error');
} else {
  // add receipe cards
ui.addReceipeToCard(receipe);

// Show success
ui.showAlert('Receipe Added!', 'success');

// clear feilds
ui.clearFields();
}


e.preventDefault();
});

// Event listener for delete

// document.getElementById("good-receipe").addEventListener
// ("click", function(e){

  // Instantiate UI
// const ui = new UI();
// ui.deleteReceipe(e.target);


// e.preventDefault();
// });
// delete button
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}