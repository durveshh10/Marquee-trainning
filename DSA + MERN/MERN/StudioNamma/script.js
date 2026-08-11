const box = document.querySelector(".cursorBox");

document.addEventListener("mousemove", (e) => {
  box.style.left = e.clientX + "px";
  box.style.top = e.clientY + "px";
});
