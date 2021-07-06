// receipe constructer
class Receipe {
    constructor(receipeName, ingredients, cookingMethod) {
        this.receipeName = receipeName;
        this.ingredients = ingredients;
        this.cookingMethod = cookingMethod;
    }
}

// UI 
class UI {
    addReceipeToCard (receipe) {
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


showAlert = (message, className) => {
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
  
     clearFields() {
        document.getElementById('receipe-name').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('cooking-method').value = '';
    }
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

// add to storage
// Store.addReceipe(receipe);

// Show success
ui.showAlert('Receipe Added!', 'success');

// clear feilds
ui.clearFields();
}


e.preventDefault();
});


// delete button
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}


// Local storage 
// class Store {
//     static getReceipe() {
//         let receipes;
//         if(localStorage.getItem('receipes') === null) {
//           receipes = [];
//         } else {
//           books = JSON.parse(localStorage.getItem('receipes'));
//         }
//         return receipes;
//     }
//     static  displayReceipe() {

//         }
//     static addReceipe(receipe) {
//         const receipes = Store.getReceipes();

//     receipes.push(receipe);

//     localStorage.setItem('receipes', JSON.stringify(receipes));
//     }
//     static removeReceipe() {

//     }
// }

