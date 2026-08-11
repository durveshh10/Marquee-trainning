// // Ways to add event (3)
// // 1. Inline Event
// /* <button onclick="showMessage()"> Click Me !!</button>
// function showMessage(){
// alert("Hello")
// } */


// // 2. Property Method:
// //const btn = document.querySelector("#btn")
// //btn.onclick = function(){
// ///alert("Hello")
// }


// // 3. addeventlistener()
// // btn.addEventListener("click", function(e){
// // console.log(e.type) //click
// // console.log(e.target) //html tag
// // console.log(e.clientX) //100 (different)
// // console.log(e.screenX)
// // })
// btn.onclick = function(){
// console.log("1st call")
// }
// btn.onclick = function(){
// console.log("2nd call")
// }



// // Syntax:
// Element.addEventListener(
//     "click",



//     // MOUSE EVENTS:
// // 1. Click 'click'
// // 2. double click 'dblclick'
// // 3. mousemove
// // 4. mouseenter

// // btn.addEventListener('mousemove', function(){
// // })

const myButton = document.getElementById('button');
// 1. Click Event ('click')
myButton.addEventListener('click', () => {
    console.log('Button was clicked!');
});
// 2. Double Click Event ('dblclick')
myButton.addEventListener('dblclick', () => {
    console.log('Button was double-clicked!');
});
// 3. Mouse Move Event ('mousemove')
myButton.addEventListener('mousemove', (event) => {
    console.log(`Mouse moving at coordinates: X=${event.clientX}, Y=${event.clientY}`);
});
// 4. Mouse Enter Event ('mouseenter')
myButton.addEventListener('mouseenter', () => {
    console.log('Mouse entered the button area!');
});
// 5. Mouse Leave Event ('mouseleave')
myButton.addEventListener('mouseleave', () => {
    console.log('Mouse left the button area!');
});
// 6. Mouse Over Event ('mouseover')
myButton.addEventListener('mouseover', () => {
    console.log('Mouse is over the button!');
});