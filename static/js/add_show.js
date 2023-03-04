const myDivs = document.getElementById('showadd_button');
  // Add a click event listener to the div
  myDivs.addEventListener('click', function() {
    // Hide the div by changing its display value to "none"
    myDivs.style.display = 'none';
});
myDivs.classList.remove('scard');
myDivs.style = '';





const parentCards = document.querySelector('#shows-container');
const addChildBtns = document.querySelector('#showadd_button');

addChildBtns.addEventListener('click', () => {
    const card = document.createElement("div");
	card.classList.add("card");

	// Add the card data to the element
	card.innerHTML = `
        <h2>Show 1</h2>
        <p>Timings: 12:20</p>
        <button class="actions_button" id="actions_button">Actions</button>
`;

	// Add the card element to the card container
	parentCards.appendChild(card);
    const sxcard = document.createElement("div");
sxcard.classList.add("scard");
sxcard.innerHTML = `<button class="venueadd_button" id="venueadd_button"><img class="add-venue-img" id="add-venue-img" src="../images/plus_icon.png" alt="Add a new Show"></button>`;
// Add the card element to the card container
parentCards.appendChild(sxcard);
    console.log("not working bytch")


});