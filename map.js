let fruit = ['apple', 'banana', 'orange'];
fruit.push("grape");
 console.log(fruit); // Output: ['apple', 'banana', 'orange', 'grape']

fruit.pop();
console.log(fruit); // Output: ['apple', 'banana', 'orange']

// it can be modify the array at the end but it can not modify the array at the beginning or in the middle



fruit.unshift("grape");
console.log(fruit); // Output: ['grape', 'apple', 'banana', 'orange']

fruit.shift("grapes");
console.log(fruit); // Output: ['apple', 'banana', 'orange']

// it can modify the array at the beginning but it can not modify the array at the end or in the middle
