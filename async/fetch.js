fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=> res.json())
.catch(err => console.log(err));