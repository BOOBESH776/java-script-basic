function y() {
    console.log(y);
    var y = 10;// undefined
    y = 40;
    console.log(y);
}
y();

function z() {
    let z = 10;
    console.log(z);
    z = 30;
    console.log(z);

}
z(); 
z = 40;
console.log(z);

function x(){
    const x =10;
    console.log(x);
    // x = 30;  // TypeError: Assignment to constant variable.

    const person ={name : "bob"};
    person.name = "alice";   //Allowed (object mutation)
    console.log(person);

}
x();