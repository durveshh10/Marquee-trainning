const player = document.querySelector(".player");
let playerX = 50;
let moveRight = false;
let moveLeft = false;
let playerY = 90;
let velocityY = 0;
let gravity = 0.8;
let isJumping = false;
const groundY = 90; // Ground level for Mario

//move
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    moveRight = true;
  }
  if (e.key === "ArrowLeft") {
    moveLeft = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    moveRight = false;
  }
  if (e.key === "ArrowLeft") {
    moveLeft = false;
  }
});
//jumping function
document.addEventListener("keydown", (e) => {
  if ((e.key === "space" || e.key === " ") && !isJumping) {
    velocityY = 15;
    isJumping = true;
  }
});
//game function logic
function gameLoop() {
  const speed = 5;

  if (moveRight) {
    playerX += speed;
  }
  if (moveLeft && playerX > 0) {
    playerX -= speed;
  }

  player.style.left = playerX + "px";
  if (isJumping) {
    playerY += velocityY;
    velocityY -= gravity;
    if (playerY <= groundY) {
      playerY = groundY;
      velocityY = 0;
      isJumping = false;
    }
  }

  // Update vertical position in CSS
  player.style.bottom = playerY + "px";

  requestAnimationFrame(gameLoop);
}

gameLoop();
