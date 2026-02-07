
const a = {
    name: "abc", age: 21, city: "madurai"
};

console.log(a.city);
a.age=22;
console.log(a)

//Add a new properties

a.language = "javascript";

console.log(a)

//delete a properties
delete a.name;
console.log(a)


const user = {
  name: "ashe",
  greet() {
    console.log("Hi, I'm " + user.name);
  }
};

user.greet();  // "Hi, I'm Asha"


let car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2020,
  start() {
    console.log("Car is starting...");
  }
};

car.start();


//add price
let cart = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 450 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {

  total = total +  cart[i].price;  // add each price
}

console.log("Total price = " +total);

