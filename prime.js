let n = 9;

if (n <= 1) console.log("not prime");
else {
    for (let i = 2; i < n; i++)
        if (n % i === 0) return console.log("not prime");
    console.log("prime");
}

