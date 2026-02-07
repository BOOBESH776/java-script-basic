const a = new Set([1,2,3]);
console.log(a);


const num = new Set();
 
num.add(10);
num.add(20);
num.add(30);
num.add(30);

console.log(num);

num.delete(10);
console.log(num);

const colors = new Set(["red", "green", "blue"]);

for (let color of colors) {
  console.log(color);
}
