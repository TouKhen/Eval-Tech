// Carousel
let bigCard = document.getElementsByClassName("big-card");
let bigImg = document.getElementById("bigImg");
let carouselItem = document.getElementsByClassName("carousel-item");

bigCard[0].addEventListener('mousedown', carouselSelector);

function carouselSelector() {
    for (let i = 0; i < carouselItem.length; i++){
        carouselItem[i].addEventListener('mouseup', carouselSelected);
        function carouselSelected(){
            bigImg.src = "../img/pic" + (i + 1) + ".png";
        }
    }
}

//Darken image

let darken = document.getElementsByClassName("darken");
let valid = false;

darken[0].addEventListener('mousedown', imgdarken);

function imgdarken() {
    if (valid === false){
        bigImg.style.filter = "brightness(0.5)";
        darken[0].innerHTML = "Lighten";
        valid = true;
    }
    else {
        bigImg.style.filter = "brightness(1)";
        darken[0].innerHTML = "Darken";
        valid = false;
    }
}