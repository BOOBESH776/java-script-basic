let fruits = ['apple', 'banana', 'orange'];
fruits.push("grape");
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// it can be modify the array at the end but it can not modify the array at the beginning or in the middle




var newLength = fruits.unshift( "melon");
console.log(fruits); // Output: ["kiwi", "melon", "apple", "banana", "orange"]


var shifted = fruits.shift();
console.log(fruits); // Output: ["melon", "orange", "apple", "mango"]


// it can modify the array at the beginning but it can not modify the array at the end or in the middle

fruits.splice(0,1,"stapery", "mango");
console.log(fruits); // Output: ["stapery", "mango", "grape", "jk", "orange"]
