let ticket = new Promise((resolve,reject) =>{
    let booked = true;
    if(booked)
        resolve()
    else
        reject()
})

.then(success).catch(error)

function success(){
    console.log("Ticket Booked")
}   

function error(){
    console.log("Ticket Not Booked")
}