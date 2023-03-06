var btn = 0;
const venuesContainer = document.getElementById("venues-container");

const venueData = [
	{ name: "Venue 1",  cards: [ { name: "Show 1", time: 30 }, { name: "Show 2", time: 25 }, { name: "Show 3", time: 40 } ] },
	{ name: "Venue 2",  cards: [ { name: "Show 4", time: 30 }, { name: "Show 5", time: 25 }, { name: "Show 6", time: 40 } ] },
	{ name: "Venue 3",  cards: [ { name: "Show 7", time: 30 }, { name: "Show 8", time: 25 }, { name: "Show 9", time: 40 }, { name: "Show 10", time: 25 } ] }
];
const numVenueToPrint = venueData.length;

for (let i = 0; i < numVenueToPrint; i++) {
	// Create a new card element
	const vcard = document.createElement("div");
	vcard.classList.add("vcard");
	vcard.classList.add("vcard"+(i+1));
    vcard.setAttribute('id', 'shows-container'+(i+1));
    console.log(vcard)
	// Add the card data to the element
	const vcardDataIndex = i % venueData.length; // Use modulo to cycle through the data
	const vcardDataItem = venueData[vcardDataIndex];
	vcard.innerHTML = `
		<h1>${vcardDataItem.name}</h1>
	`;

	// Add the card element to the card container
	venuesContainer.appendChild(vcard);
    createShows(i);
}
const vcard = document.createElement("div");
vcard.classList.add("vvcard");
vcard.innerHTML = `<button class="venueadd_button" id="venueadd_button"><img class="add-venue-img" id="add-venue-img" src="../images/plus_icon.png" alt="Add a new Show"></button>`;
vcard.setAttribute('id', 'plusBtnvenue');
// Add the card element to the card container
venuesContainer.appendChild(vcard);





function createShows(x) {
    //Show creation
    const showsContainer = document.getElementById("shows-container"+(x+1));

    const numCardsToPrint = venueData[x].cards.length;

    for (let i = 0; i < numCardsToPrint; i++) {
        // Create a new card element
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("card"+(i+1));
        card.setAttribute('id', 'card-cont');
        console.log(card)

        // Add the card data to the element
        const cardDataIndex = i; // Use modulo to cycle through the data
        const cardDataItem = venueData[x].cards[cardDataIndex];
        card.innerHTML = `
            <h2>${cardDataItem.name}</h2>
            <p>Timings: ${cardDataItem.time}</p>
            <button class="actions_button" id="actions_button">Actions</button>
        `;

        // Add the card element to the card container
        showsContainer.appendChild(card);
    }
    btn = btn + 1;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<button class="showadd_button" onclick="addShow(this)" id="plusBtnshow${btn}"><img class="add-show-img" id="add-show-img" src="../images/plus_icon.png" alt="Add a new Show"></button>`;
    // card.setAttribute('id',`plusBtnshow${btn}`);
    // Add the card element to the card container
    showsContainer.appendChild(card);
}






//Adding new venues
const myDiv = document.getElementById('venueadd_button');
  // Add a click event listener to the div
  myDiv.addEventListener('click', function() {
    
});
myDiv.classList.remove('vvcard');
myDiv.style = '';



const parentCard = document.querySelector('#venues-container');
const addChildBtn = document.querySelector('#venueadd_button');
const btnCard = document.querySelector('#plusBtnvenue');

addChildBtn.addEventListener('click', () => {
    const vcard = document.createElement("div");
	vcard.classList.add("vcard");

	// Add the card data to the element
	vcard.innerHTML = `
		<h1>Venue x</h1>
	`;
    const showsContainer = document.getElementById("shows-container"+(numVenueToPrint));
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<button class="showadd_button" onclick="addShow(this)" id="plusBtnshow${btn}"><img class="add-show-img" id="add-show-img" src="../images/plus_icon.png" alt="Add a new Show"></button>`;
    // card.setAttribute('id',`plusBtnshow${btn}`);
    // Add the card element to the card container
    console.log(card);
    showsContainer.appendChild(card);



    btnCard.parentNode.insertBefore(vcard, btnCard);
});