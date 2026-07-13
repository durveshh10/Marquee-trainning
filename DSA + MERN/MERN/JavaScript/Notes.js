// Variables - Container jaha pr value store hoti hai.
// var , let ,  const

// Variable Declaration
var a

//Intialization
a = 12

// Declaration & Intialization
var b = 25

// Keyword reserved words
// Using var keywords we can re-initialize the variable and also we can redeclare the varible
var x = 15
x = 10
//console.log(x)


// console.log(s)

let insertCard = 123
insertCard = 456
// let insertCard = 789
// console.log(insertCard)

const PI = 3.14
//PI = 3



//ARRAY 



// // Method 1
// let arr1 = [10,20,30]

// // Method 2
// let arr2 = new Array(10,20,30)

// //Array can store anything 

// let detail = [
//     2403051050186,
//     "Harshal",
//     true,
//     null,
//     undefined,
//     {
//         city:"Ratlam",
//     },
//     [1,2,3]
// ]
// console.log(detail)

// let fruit = [
//     "Mango",
//     "Kiwi",
//     "Dragon Fruit",
//     "Chiku"
// ]
// console.log(fruit[3])
// console.log(fruit.length);
// fruit[0] = "Aam"
// console.log(fruit[0])

// Looping through array
// // For Loop
// let color = ["purple","black","white","pink"]
// for(let i=0;i<color.length;i++){
//     console.log(color[i])
// }

// //For of loop

// let bike = ["KTM","Royal Enfield","Yamaha","Honda"]
// for(let val of bike){
//     console.log(val)
// }

// // Array Methods
// // 1. Push 

// bike.push("Harley")
// for(let index in bike) {
// console.log(bike[index])
// }
// console.log(bike.indexOf("KTM"))
// console.log(bike.includes(("ktm").toUpperCase()));


// //PUSH
// const colors = ['red', 'blue'];
// const newLength = colors.push('green', 'yellow'); 
// console.log(colors);
// console.log(newLength);

// //POP
// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.pop();
// console.log(colors);
// console.log(removedColor);

// //UNSHIFT
// const colors = ['red', 'blue'];
// const newLength = colors.unshift('purple');
// console.log(colors);
// console.log(newLength);

// //SHIFT
// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.shift();
// console.log(colors);
// console.log(removedColor);


// //Method of Searching and Extrsacting 

// // Includes
// let laptop = ["asus","accer","mac","lenovo","HP"]
// console.log(laptop.includes("HP"))


// // IndexOf ->
// console.log(laptop.indexOf("mac"))

// // LastIndexOf
// console.log(laptop.lastIndexOf("asus"))

// // Right to left
// let arr = [
// 10, 20, 30
// ]
// console.log(arr[arr.length-1])


// // Slice Original array does not change
// // array_name.slice(start, end) s:inclusive e: exclusive
// let nums = [
// 10,20,30,40,50
// ]
// console.log(nums.slice(2,-1))
// console.log(nums)


// // splice:
// // array.splice(start, deleteCount,item1,item2....)
// let nums2 = [1,2,3,4,5,6,7,8]
// // nums2.splice(1,4)
// // console.log(nums2)

// // Insert withoud deleting
// nums2.splice(1,0,10)
// console.log(nums2)

// //Replace
// nums2.splice(1,1,200,1000,50)
// console.log(nums2)

// //For each Loop ->
// // let stud = ["A", "B","C"]
// ["a","b","c"].forEach(function(student) {
// console.log(student)
// })

// let students = ["Yash","Rupesh","Harshal","Rohit"]
// students.forEach((student, index) => {
// console.log(`${index + 1}.${student} is sleeping in
// class`);
// });\





// 1. Named Function It is a type of function declaration
// function functionName (parameters){
// code
// return value
// }

// function greet (name){
// console.log("Hello "+ name)
// }
// greet("Harshal")

// 2. Function Expression
// const varibaleName = function (paramets){
// Code
// Return Value
//}

// const goodMorning = function (name){
// console.log("Good Morning ! "+ name)
// }
// goodMorning("Harshal")

// 3. Anonymous Function : A function without name

// function (){
//  code
// }

// setTimeout(function, time)
// setTimeout(function(){},1000)

// 4. Arrow Function : Introduced in ES6
// Syntax:
// const varName =(parametes) =>{
// // code
// }

// const sayHi = (name)=>{
// console.log("Hey! "+ name)
// }
// sayHi("Harshal")

// If there is only one expression, return and {} are optional

// Syntax->
// Implicit Return
// const varName = (parametes) expression

// function sq (num){
//  return num * num
// }
// console.log(sq(5))


// const square = (num) =>
//     num * num
// console.log(square(4))


// 5. Callback Function: A function passed as an argument to another function

// function welcome() {
//     console.log("Welcome")
// }
// function execute(CallBack) {
//     CallBack()
// }
// execute(welcome)

// 6. Immediately Invoked function Expression (IIFE)
// Invoke function call krna 
// Runs immediately after created

// Syntax:
// (function(){
//     code
// })();

// (function(){
// console.log("Types of Function")
// })();

// //HOD FUNCTION

// function greet(){
//     console.log("Good Morning")
//     sayBye()
// }
// function sayBye(){
//     console.log("Bye")
// }
// greet(sayBye) 

// function greetBye(){
// sayBye()
// }

// function greetThanks (){
// sayThanks()
// }

// function greeWelcome(){
// sayWelcome()
// }

// function sayBye(){
// console.log("Bye")
// }
// function sayThanks(){
// console.log("Thank you")
// }
// function sayWelcome() {
// console.log("Welcome")
// }
// greetBye()


//MAP


// let Shop = [
//     {
//         id : 1,
//         name : "Harshal",
//         bill : 200,
//     },
//     {
//         id : 2,
//         name : "Ram",
//         bill : 100,
//     },
//     {
//         id : 3,
//         name : "Shyam",
//         bill : 50,
//     }
// ]
// let names = Shop.map((id) =>id.name);
// console.log(names)

// let marks = [10,20,30]
// let result = marks.map(m=> m*3)
// console.log(result)
// let nums3 = [1,2,3,4,5,6]
// let even= nums3.filter(num=>num%2===0)
// console.log(even)



// let nums4 = [1, 2, 3, 4]


// function myMap(arr, callback) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         let r = callback(arr[i], i, arr)
//         newArray.push(r)
//     }
//     return newArray
// }

// let ans = myMap(nums4, function(num){
//     return num * 2
// })
// console.log(ans)

// //REST --->
// function print(x,...y){
// console.log(x,y)
// }
// print(1,2,3,4,5)

// // filter()
// let nums5 = [1,2,3,4,5,6,7,8]
// let eve = nums5.filter(function(n){
// return n%2===0
// })
// console.log(eve)

// // array.reduce(callback, intialvalue)
// let even1 = [2,4,6]
// let sum = even1.reduce((acc,e)=>{
// return acc+e
// },1)
// console.log(sum)


// //Find
// let arr4 = [10,20,30,40,50,60,70,80,90,100]
// let ans1 = arr4.find((n)=> n>50)
// console.log(ans1)

// //CONCAT FUNCTION
// let front = ["HTML", "CSS", "JS"]
// let back = ["Nodejs", "Expressjs"]
// let full = front.concat(back)
// console.log(full)

// let front = ["HTML", "CSS", "JS"]
// let back = ["Nodejs", "Expressjs"]
// let data = ["MongoDB", "MYSQ1"]
// let full = front.concat(back, data)
// console.log(full)


// let arr5 = [10,100]
// let [k,o=50] = arr5
// console.log(k)
// console.log(o)


// let n1  = 10
// let n2  = 20
// console.log("Before Swap", n1, n2);
// [n1, n2] = [n2,n1];
// console.log("After Swap", n1, n2);




// OBJECT ->

// // Object creation
// let student1 = {
//     // key:value,
//     "full_name": "Shreyansh",
//     id: 123
// }

// let k = "age"


// Dot Notation
// console.log(student1.full_name)
// console.log(student1.id)


// Bracket Notation
//console.log(student1["full-name"])

// console.log(student1)

// // Adding propertiers you can add anytime
// // object_name.proper_name = value
// student1.cgpa = 7.9
// student1.city = "Indore"
// student1["course"] = "Btech"
// console.log(student1)

// // delete
// delete student1.age
// delete student1["full_name"]
// console.log(student1)


// // TO check key value is present or not
// console.log("id1" in student1)

// function printLaptop(brand, price) {
//     return {
//         brand,
//         price,
//         color:"Black",
//     }
// }
// let laptop = printLaptop("Dell", 60000)
// console.log(laptop.brand)
// console.log(laptop.price)
// console.log(laptop.color)


// let obj = {
//     for: 1,
//     let: 2,
//     const: 3,
//     return: 4
// }
// console.log(obj.for + obj.let + obj.const + obj.return)



// console.log(user.address.state?.city)
// console.log("Welcome")


// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1 == s2)


// let id=Symbol("id")
// let user_id=Symbol("user_id") 
// let user={
//     name:"Ravi",
//     age:20,
//     id:101,
//     [id]:1234,
//     [user_id]:5678
// }
// user.id=102;  // this will not change the value of id as it is a symbol
// user[user_id]=5679;  // this will not change the value of user_id as it is a symbol
// console.log(user.id);
// console.log(user[id]);
// console.log(user[user_id]);
// console.log(Object.getOwnPropertySymbols(user));  // get the symbol properties of the object
// console.log(Object.keys(user));  // get the string properties of the object
// for(let key in user){
//     console.log(key);  // this will not print the symbol properties of the object
// }

// let stu={
//     name:"Harshal",
//     age:19,
//     course:"Marqueee",
//     phone:7589958787,
//     city:"Ratlam"
// }
// for(let key in stu){
//     // console.log(key);  // this will print the string properties of the object
//     // console.log(stu[key]);  // this will print the values of the string properties of the object
//     console.log(key,stu[key]);  // this will print the values of the string properties of the object
// }


// // Shallow Copy
// let a = 10
// let b = a
// b = 20
// console.log(a)//10
// console.log(b)//20

// let emp1 = {
//     name: "John"
// }
// let emp2 = emp1
// emp2.name = "Bob"
// console.log(emp1.name)//Bob
// console.log(emp2.name)//Bob

//A shallow copy copies only the first level nested object still Share the same memory

// First method of shallow copy is spread operator

// let emp3 = {
//     name: "Prince",
//     age: 20,
//     address: {
//         city: "Indore"
//     }
// }
// // 1. Spread Operator

// let emp4 = { ...emp3 }
// emp4.name = "Ankit"
// emp4.age = 22


// console.log(emp3)//Prince
// console.log(emp4)//Ankit


// // 2. Object.assign

// let emp5 = {
//     name: "Meet",
//     age: 20
// }
// let copy = Object.assign({}, emp5)
// copy.name = "Harsh"
// console.log(emp5.name) //Meet
// console.log(copy.name) //Meet


// // Deep Copy : A deep copy copies everything including all objects and arrays

// let emp6 = {
//     name: "Shreyansh",
//     address: {
//         city: "Vadodara"
//     }
// }

// // structuredClone using this function we can make deep copy

// let newObj = structuredClone(emp6)

// newObj.name = "Shrey"
// newObj.address.city = "Noida"
// console.log(emp6.address.city)
// console.log(newObj.address.city)


// let city = "Hyderabad"
// // if (city == null) {
// //     console.log("City is not Avai.")
// // }
// // else {
// //         console.log(city)
// // }

// console.log(city ?? "Not Avail.")

// let obj = {
//     name: "Emma",
//     age:
//         20
// }
// let newCopy = JSON.parse(JSON.stringify(obj))

// let a = [10, 20, 30]
// let b = [...a]
// b.push(40)
// console.log(a)  // 10.20.30
// console.log(b)  // 10 20 30 40


// let a = [[1, 2], [3, 4]]
// let b = [...a]
// console.log(a) // [[1, 2], [3, 4]]
// console.log(b) // [[1, 2], [3, 4]]

// let a = [[1, 2], [3, 4]]
// let b = [...a]
// b[0][0] = 10
// console.log(a) // [[10,2],[3,4]]
// console.log(b) // [[10,2], [3,4]]


// OBJECT FUNCTION ->

// let student = {
//     name,
//     age,
//     marks,
//     study(),
//     walk(),
//     sleep()
// }

// Properties stores the information
// Function (methods) performs action

// let student = {
//     name: "Shreyansh",
//     age:
//         20,
//     study: function () {
//         console.log("Student is studying.")
//     }
// }
// console.log(student.name)
// student.study()


let car = {
    brand: "BMW",
    color: "black",
    start: function () {
        console.log("Car started")
    },
    stop: function () {
        console.log("Car stopped")
    },
    showBrand: function () {
        console.log(this.brand)
    }
}

// because hs look for a variable names brand

// this means the current

car.start()
car.stop()
car.showBrand()

let user = {
    name: "John",
    age: 20,
    introduce: function () {
        console.log("Hi I am " + this.name)
        console.log("Age: " + this.age)
    }
}
// this.name -> user.name
// this.age -> user.age
user.introduce()


let emp1 = {
    name: "Emma",
    introduce: function () {
        console.log(emp1.name)
    }
}
let emp2 = emp1
emp2.name = "Bob"
emp2.introduce()

let emp1 = {
    greet: function () {
        console.log("Hello " + this.name)
    }
    // this.name emp1.name
}
let emp2 = {
    name: "Bob",
    // greet:function (){
    //console.log("Hello "+ this.name)
    // }
    greet: emp1.greet
    // this.name -> emp2.name
}
emp1.greet()//Hello Emma
emp2.greet()//Hello Emma