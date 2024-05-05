const images = ["1.jpg", "2.jpg", "3.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];


document.body.background = `./image/${chosenImage}`;