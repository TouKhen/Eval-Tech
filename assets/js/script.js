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
        for (let i = 1; i <= 6; i++) {
            // For creating cards
            let a = document.createElement("a");
            let div1 = document.createElement("div");
            div1.className = "cards";
            a.href = "assets/pages/appart1.html";
            a.appendChild(div1);

            // Cards image
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = "assets/img/pic" + i + ".png";
            img.alt = "pic" + i;
            div1.appendChild(div2);
            div2.appendChild(img);

            // Cards Adress and price
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            if (i === 1 || i === 4) {
                let txt1 = document.createTextNode("1450 CloudCroft Drop");
                p1.appendChild(txt1);
                let txt2 = document.createTextNode("Illinois / Chicago");
                p2.appendChild(txt2);
                let txt3 = document.createTextNode("$250,000");
                p3.appendChild(txt3);
            } else if (i === 2 || i === 5) {
                let txt1 = document.createTextNode("140 Small Village");
                p1.appendChild(txt1);
                let txt2 = document.createTextNode("Missouri / Kansas City");
                p2.appendChild(txt2);
                let txt3 = document.createTextNode("$200,000");
                p3.appendChild(txt3);
            } else if (i === 3 || i === 6) {
                let txt1 = document.createTextNode("1250 Lake House");
                p1.appendChild(txt1);
                let txt2 = document.createTextNode("Colorado / Denver");
                p2.appendChild(txt2);
                let txt3 = document.createTextNode("$339,000");
                p3.appendChild(txt3);
            }
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(p3);

            // Size, Bedrooms and Bathrooms
            let div3 = document.createElement("div");
            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let txt1 = document.createTextNode("3400 Sq Ft");
            li1.appendChild(txt1);
            ul.appendChild(li1);
            ul.appendChild(li1);

            let li2 = document.createElement("li");
            let txt2 = document.createTextNode("2 Bedrooms");
            li2.appendChild(txt2);
            ul.appendChild(li2);
            ul.appendChild(li2);

            let li3 = document.createElement("li");
            let txt3 = document.createTextNode("1 Bathroom");
            li3.appendChild(txt3);
            ul.appendChild(li3);
            ul.appendChild(li3);

            div3.appendChild(ul);
            div1.appendChild(div3);
            // Append to Cards Container
            cardsC[0].appendChild(a);
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

// Carousel

let bigImg = document.getElementById("bigImg");