let cart = [
    { product: "toyota", price: 4500 },
    { item: "honda", price: 7800 },
    { item: "supra", price: 100 }
];


let car_price = 0;

for (var i = 0; i < cart.length; i++) {
    car_price += cart[i].price;
}
console.log(car_price);