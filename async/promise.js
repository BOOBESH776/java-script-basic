let ticket = new Promise((resolve,reject) =>{
    let booked = false;
    if(booked)
        resolve() //if booked is true then it will go to then block
    else
        reject() //if booked is false then it will go to catch block
})

.then(success) //true
.catch(error)  //false

function success(){
    console.log("Ticket Booked"); //if booked is true then it will print this
}   

function error(){
    console.log("Ticket Not Booked"); //if booked is false then it will print this
}



let busticket = new Promise((resolve,reject)=>{ //creating a new promise for bus ticket booking
    let busbooked = true; //you can change this value to false to see the catch block in action
    if(busbooked){
        resolve() //if busbooked is true then it will go to then block
    }
    else{
        reject() //if busbooked is false then it will go to catch block
    }
})

.then(() => console.log("Bus Ticket Booked"))  //true
.catch(()=> console.log("Bus Ticket Not Booked"))  //false