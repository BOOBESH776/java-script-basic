
//reverse string

let str="hello";
let arr=str.split("");
arr.reverse();
let a = arr.join("");
console.log(a);



//one line short cut

let name="kishore".split("").reverse().join("");
console.log(name)



let ar=["main","kishore"];

for(let i=0;i<ar.length;i++){
    console.log(ar[i].split("").reverse());
    console.log(ar.join(""));
}