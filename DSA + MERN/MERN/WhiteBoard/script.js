// selecting
const canvas = document.getElementById('paintCanvas')
const ctx = canvas.getContext('2d')
const clearBtn = document.getElementById('clearBtn')


// Variables
let isDrawing = false
let brushColor = '#ffffff'
let brushWidth = 5

// mousedown
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
})

// mouseup
canvas.addEventListener('mouseup', () => {
    isDrawing = false
    ctx.closePath()  //drawing stops
})

// mousemove

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return
    ctx.lineWidth = brushWidth
    ctx.lineCap = 'round'
    ctx.strokeStyle = brushColor

    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()
})

// mouseleave
canvas.addEventListener('mouseleave', () => {
    isDrawing = false
})
// mouseenter
canvas.addEventListener('mouseenter', () => {
    console.log('You can draw')
})

// double click
canvas.addEventListener('dblclick', () => {
    const randomBg = `hsl(${Math.random() * 360},80%, 90%)`
    // ctx.fillStyle = randomBg
    canvas.style.backgroundColor = randomBg
})

// contextmenu
canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault() //stops the deafualt of browser
    const color = ['red', 'green', 'black', 'blue', 'orange']
    const randomColor = color[Math.floor(Math.random() * color.length)]
    brushColor = randomColor
    alert(`Brush color changed to: ${brushColor}`)
})


clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});