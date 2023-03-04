const myDivs = document.getElementById('showadd_button');
  // Add a click event listener to the div
  myDiv.addEventListener('click', function() {
    
});
myDivs.classList.remove('card');
myDivs.style = '';





const parentCards = document.querySelector('.venues');
const addChildBtns = document.querySelector('#showadd_button');
const btnCards = document.querySelector('#plusBtnshow');

addChildBtns.addEventListener('click', () => {
    const card = document.createElement("div");
	card.classList.add("card");

	// Add the card data to the element
	card.innerHTML = `
        <h2>Show x</h2>
        <p>Timings: x</p>
        <button class="actions_button" id="actions_button">Actions</button>
    `;
    btnCards.parentNode.insertBefore(card, btnCards);
});