// All let
let cardsC = document.getElementsByClassName("cards-container");
let button = document.getElementsByTagName("button");
btn1 = button[0];
btn2 = button[1];
let counter = 1;
let maxcounter = 4;

// Events Listener
btn1.addEventListener('mousedown', showMoreCards);
btn2.addEventListener('mousedown', showAllCards);

// Functions
function showMoreCards(){
    if (counter <= maxcounter) {
        for (let i = 0; i <= 5; i++) {
            let cards = document.getElementsByClassName("a-cards");
            let cln = cards[i].cloneNode(true);
            cardsC[0].appendChild(cln);
        }
    }
    if (counter >= maxcounter){
        btn1.remove();
        btn2.remove();
    }
    counter++;
}

function showAllCards(){
    for (let j = 0; j < maxcounter; j++){
        showMoreCards();
    }
}