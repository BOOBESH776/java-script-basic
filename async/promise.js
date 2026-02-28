let ticket = new Promise((resolve,reject) =>{
    let booked = false;
    if(booked)
        resolve()
    else
        reject()
})

.then(success)
.catch(error)

function success(){
    console.log("Ticket Booked");
}   

function error(){
    console.log("Ticket Not Booked");
}


let busticket = new Promise((resolve,reject)=>{
    let busbooked = true;
    if(busbooked){
        resolve()
    }
    else{
        reject()
    }
})

.then(() => console.log("Bus Ticket Booked")).catch(()=> console.log("Bus Ticket Not Booked"))