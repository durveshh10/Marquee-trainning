// Method 1
let arr1 = [10,20,30]


// Method 2 
let arr2 = new Array(10,20,30)


// Array Ccan store anything
let detail = [
  301102,
  "Shreyansh",
  true,
  null,
  undefined,
  {
    city:"Indore",
  },
  [1,2,3]
]

// console.log(detail)


let fruits = [
  "Mango",
  "Kiwi",
  "Dragon Fruit",
  "Kashmiri sev",
  "Chiku"
]

// console.log(fruits[3]);
// console.log(fruits.length);
fruits[0] = "Aam"
// console.log(fruits[0])

let bike = []
// push data in bike array
bike.push("Hunter","KTM","Lord Splendor","GT")
// console.log(bike.length)


// Looping through array

// For Loop
let color = ["purple","black","white","pink"]
for(let i=0;i<color.length;i++){
  // console.log(color[i])
}

// For of Loop
for(let val of bike){
  // console.log(abc)
}

// Diffrence between for loop for of loop
// for loop me hume index milta hai 
// for of loop hume value milti hai

for(let index in bike){
  // console.log(bike[index])
}


// Array Methods
bike.push("Harley")
for(let index in bike){
  console.log(bike[index])
}