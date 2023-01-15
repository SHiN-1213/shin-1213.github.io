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
const imageList = ["image1.webp","image2.webp","image3.webp","IMG_1208.jpg"];
let imageOrder = 0;

const scaleKeyflame = {
    transform: ["scale(1.0)", "scale(1.2)"]
}

window.onload = function(){
    /* preload img */
    for (i = 0; i < imageList.length; i++){
        var img = document.createElement('img');
        img.src = "src/img/"+imageList[i];
    }
}
mainImageAnimation();
setInterval(() => {
    mainImageAnimation();
}, 5000);

function mainImageAnimation(){
    if (imageFlag == true) {
        /* activate img2*/

        mainImg2.style.backgroundImage = "url(src/img/" + imageList[imageOrder++] + ")";
        if (imageOrder >= imageList.length) {
            imageOrder = 0;
        }
        mainImg1.style.opacity = 0;
        mainImg2.animate(scaleKeyflame,7000)
        window.setTimeout(() => {
            mainImg1.style.zIndex = 0;
            mainImg1.style.transform = "scale(1.0)"
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
        mainImg1.animate(scaleKeyflame,7000);
        window.setTimeout(()=>{
            mainImg1.style.zIndex = 1;
            mainImg2.style.zIndex = 0;
            mainImg2.style.transform = "scale(1.0)"
            mainImg2.style.opacity = 1;
        },1500)
        imageFlag = true;
    }
};