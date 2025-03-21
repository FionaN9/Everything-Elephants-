const canvas = document.getElementById("bouncingCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const images = [];
const imageSrcs = [
  "images/Elephant_1.png",
  "images/Elephant_2.png",
  "images/Elephant_3.png",
  "images/Elephant_4.png",
  "images/Elephant_5.png",
  "images/Elephant_6.png",
  "images/Elephant_1.png",
  "images/Elephant_2.png",
  "images/Elephant_3.png",
  "images/Elephant_4.png",
  "images/Elephant_5.png",
  "images/Elephant_6.png",


]; // where to Add more

imageSrcs.forEach((src) => {
  const img = new Image();
  img.src = src;
  images.push({
    img,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    width: 140, 
    height: 140
  });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  images.forEach((image) => {
    image.x += image.vx;
    image.y += image.vy;

    // Bounce off walls
    if (image.x < 0 || image.x + image.width > canvas.width) image.vx *= -1;
    if (image.y < 0 || image.y + image.height > canvas.height) image.vy *= -1;

    // Draw image
    ctx.drawImage(image.img, image.x, image.y, image.width, image.height);
  });

  requestAnimationFrame(animate);
}

animate();

function goHome() {
  window.location.href="index.html" 
}