const box = document.querySelector(".cursor-box")

document.querySelector(".hero").addEventListener("mousemove",(e)=>{
  box.style.left = e.clientX + "px"
  box.style.top = e.clientY + "px"
  box.style.transition = "linear 0.3s"
  box.style.visibility = "visible"
}