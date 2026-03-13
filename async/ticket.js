let ticket = new Promise((resolve, reject) => {
    let book = true
    if (book) {
        setTimeout(resolve,3000,"bought a Book");
    }
    else {
        reject("Not Buy");
    }
})

async function asyncstatus() {
    try {
        console.log("look the which book want to buy");
        let res = await ticket
        console.log(res);
        console.log("going to home");
    }
    catch (err) {
        console.log(err);
    }
}
asyncstatus()