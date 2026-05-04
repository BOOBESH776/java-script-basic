let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2); //123

let arr3 = [1,2,3], arr4 = [4,5];
console.log(...arr3,...arr4);  //12345

function array(...num){
    return num.filter(num => num%2==0)
}
console.log(array(3,4,5,6)); //[4,6]

let person = {name : "bob",age: 12};
let person2 = {name : "alice" ,age :18};

let merges = {...person,...person2};
console.log(merges);  //{ name: 'alice', age: 18 }

let [first, second, third,...other] = [1,2,3,4,5,6,7];
console.log(first); //1
console.log(second); //2
console.log(...other); //4567