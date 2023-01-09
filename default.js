const header = document.getElementById("header")
window.onscroll = function () {
    if (window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
};

const img1 = document.getElementById("mainImage1");
const img2 = document.getElementById("mainImage2");
let num = 0;

setInterval(() => {

    switch(num){
        case 0:
            img2.style.backgroundImage = 'url("image2.webp")';
            break;
        case 1:
            img1.style.backgroundImage = 'url("image3.webp")'
            break;
        case 2:
            img2.style.backgroundImage = 'url("marinbi-to.jpg")'
            break;
        case 3:
            img1.style.backgroundImage = 'url("image1.webp")'
            num -= 4;
            break;
    }
    num++;
}, 5000);

