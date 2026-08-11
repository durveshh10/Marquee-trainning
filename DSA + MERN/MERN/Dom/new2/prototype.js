function Student (name) {
this.name = name


// // this.sayHello function (){
// console.log("hello "+ this.name) 
//  }
}
Student.prototype.sayHello = function() {
    console.log("Hello "+ this.name)
}

const s1 = new Student ("Durvesh")
const s2 = new Student ("Shreya")


console.log(s1)
console.log(s2)
// Using prototye