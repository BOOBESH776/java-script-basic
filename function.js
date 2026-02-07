

// function

function msg(){
   console.log("hello");
}
msg();

// function with one parameters

function one(name){
    console.log("hello"+name+"!");
}
one("boobesh");


// function with parameters

function add(a,b){
    return a+b;
}
console.log(add(3,4));

// arrow function   

// No need to put function keyword

const sub=(a,b)=>{
    return a-b;
}
console.log(sub(3,3));

// short from arrow function

const mul=(a,b)=>a*b;
console.log(mul(5,3));