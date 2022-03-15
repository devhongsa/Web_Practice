const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const randomImg = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");            //img 태그 형성.

image.src = `img/${randomImg}`;

document.body.appendChild(image);