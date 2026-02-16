
var mul = (a,b) =>{
    return a*b;
}
console.log(mul(4,4));

let add = (a,b) => a+b;

console.log(add(3,4));

function check(age){
    if(age>=18){
        console.log("eligible")
    }
    else{
        console.log("not")
    }
}
check(16);

function greet(name){
    console.log("hello "+name);
}
greet("kishore");