fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=> res.json())
.then(data => console.log(data[0].setup,data[0].punchline))
.catch(err => console.log(err));