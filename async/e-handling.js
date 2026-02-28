
//error handling

num = 7;

try{ //try is used to test a block of code for errors
    if(num === ''){
        throw "enter a number";
    }
    if(isNaN(num)){
        throw "enter number";
    }
    console.log(num**2);
}

catch(error){ //catch is used to catch the error and handle it
    console.log(error);
}

finally{ //finally is used to execute code after try and catch, regardless of the result
    console.log("this will always run");
}