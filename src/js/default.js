const header = document.getElementById("header")
window.onscroll = function () {
    if (window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
};

const mainImg1 = document.getElementById("mainImage1");
const mainImg2 = document.getElementById("mainImage2");

let imageFlag = true;
const imageList = ["image1.webp","image2.webp","image3.webp"];
let imageOrder = 0;

window.onload = function(){

    for (i = 0; i < imageList.length; i++){
        var img = document.createElement('img');
        img.src = "src/img/"+imageList[i];
    }
}

setInterval(() => {
    if (imageFlag == true) {
        /* activate img2*/

        mainImg2.style.backgroundImage = "url(src/img/" + imageList[imageOrder++] + ")";
        if (imageOrder >= imageList.length) {
            imageOrder = 0;
        }
        mainImg1.style.opacity = 0;
        window.setTimeout(() => {
            mainImg1.style.zIndex = 0;
            mainImg2.style.zIndex = 1;
            mainImg1.style.opacity = 1;
        }, 1500)
        imageFlag = false;
    } else {
        /* activate img1*/

        mainImg1.style.backgroundImage = "url(src/img/" + imageList[imageOrder++] + ")";
        if (imageOrder >= imageList.length) {
            imageOrder = 0;
        }
        mainImg2.style.opacity = 0;
        window.setTimeout(()=>{
            mainImg1.style.zIndex = 1;
            mainImg2.style.zIndex = 0;
            mainImg2.style.opacity = 1;
        },1500)
        imageFlag = true;
    }
}, 5000);