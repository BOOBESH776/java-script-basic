
function tossCoin() {
    return new Promise((resolve, reject) => {
        const coin = Math.floor(Math.random() * 2); //generating a random number between 0 and 1, and then multiplying it by 2 to get either 0 or 1
    
        if (coin == 0)
            resolve() //if coin is 0 then it will go to then block
        else
            reject() //if coin is 1 then it will go to catch block
    })

    .then(() => console.log("Heads")) //if coin is 0 then it will print this
    .catch(() => console.log("Tails")) //if coin is 1 then it will print this
}

tossCoin(); //calling the tossCoin function to see the result of the coin toss


