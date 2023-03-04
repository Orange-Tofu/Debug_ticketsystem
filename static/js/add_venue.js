const myDiv = document.getElementById('venueadd_button');
  // Add a click event listener to the div
  myDiv.addEventListener('click', function() {
    // Hide the div by changing its display value to "none"
    myDiv.style.display = 'none';
});
myDiv.classList.remove('vvcard');
myDiv.style = '';





const parentCard = document.querySelector('#venues-container');
const addChildBtn = document.querySelector('#venueadd_button');

addChildBtn.addEventListener('click', () => {
    const vcard = document.createElement("div");
	vcard.classList.add("vcard");

	// Add the card data to the element
	vcard.innerHTML = `
		<h1>Venue x</h1>
        <button onclick='createShows()'>Click me</button>
	`;

	// Add the card element to the card container
	parentCard.appendChild(vcard);
    const vxcard = document.createElement("div");
vxcard.classList.add("vvcard");
vxcard.innerHTML = `<button class="venueadd_button" id="venueadd_button"><img class="add-venue-img" id="add-venue-img" src="../images/plus_icon.png" alt="Add a new Show"></button>`;
// Add the card element to the card container
parentCard.appendChild(vcard);
    console.log("not working bytch")


});