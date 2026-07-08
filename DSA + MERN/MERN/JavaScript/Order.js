const orders = [
  { id: 1, customer: "Rahul", food: "Pizza", price: 500, delivered: true },
  { id: 2, customer: "Aman", food: "Burger", price: 250, delivered: false },
  { id: 3, customer: "Priya", food: "Pasta", price: 400, delivered: true },
  { id: 4, customer: "Riya", food: "Momos", price: 150, delivered: false }
];

console.log(orders);
orders.forEach(order => console.log(order.customer));

console.log(orders.find(order => order.id === 2));
console.log(orders.filter(order => order.delivered));

const total = orders.reduce((sum, order) => sum + order.price, 0);
console.log("Total:", total);

console.log("customer" in orders[0]); 
console.log("address" in orders[0]);  