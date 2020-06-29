// Carousel
let bigImg = document.getElementById("bigImg");
let carouselItem = document.getElementsByClassName("carousel-item");

carouselItem[0].addEventListener('mousedown', carouselSelector1);

function carouselSelector1() {
    bigImg.src = "../img/pic1.png";
}

carouselItem[1].addEventListener('mousedown', carouselSelector2);

function carouselSelector2() {
    bigImg.src = "../img/pic2.png";
}

carouselItem[2].addEventListener('mousedown', carouselSelector3);

function carouselSelector3() {
    bigImg.src = "../img/pic3.png";
}

carouselItem[3].addEventListener('mousedown', carouselSelector4);

function carouselSelector4() {
    bigImg.src = "../img/pic4.png";
}

carouselItem[4].addEventListener('mousedown', carouselSelector5);

function carouselSelector5() {
    bigImg.src = "../img/pic5.png";
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