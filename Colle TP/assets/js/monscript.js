/* ==================================================================================================== */
/* ===================================    la page des modeles    ======================================= */
/* ==================================================================================================== */

// get elements
let searchInput = document.getElementById("searchInput");
let cards = document.querySelectorAll(".car-card");
let noResults = document.getElementById("noResults");

// input event
searchInput.addEventListener("input", function () {

    let searchText = searchInput.value.toLowerCase().trim();
    let found = 0;

    cards.forEach(function (card) {
        
        // get all of the text in the card
        let cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.parentElement.style.display = "";
            found++;
        } else {
            card.parentElement.style.display = "none";
        }

    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});
