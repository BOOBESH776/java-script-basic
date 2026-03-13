
let movie = new Promise((resolve, reject) => {
    let reached = true

    if (reached) {
        resolve("Friend reached the theater")
    }
    else {
        reject("Friend still going")
    }
})

function success() {
    console.log("I am Reached");
}

function failed() {
    console.log("still going");
}

async function asyncstatus() {
    console.log("two frds going to home after movie");
    try {
        let res = await movie
        console.log(res);
        setTimeout(success,3000)
    }
    catch (error) {
        console.log(error)
        failed();
    }

}
asyncstatus();