const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const body = document.querySelector("#body");

const bgImg = document.createElement("img");

function changeImg() {
    const setImg = images[Math.floor(Math.random() * images.length)];
    body.style.backgroundImage = `url(img/${setImg})`;
}
window.addEventListener("load", changeImg);

