let ticket = new Promise((resolve, reject) => {
    let book = true
    if(book){
        console.log("bought a Book");
    }
    else{
        console.log("Not Buy");
    }
})

async function status(){
    console.log("look the which book want to buy");

    let res = await ticket
    console.log(res);
    console.log("going to home");
}