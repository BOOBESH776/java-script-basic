let passage = document.getElementById("passage").textContent = "abc def";
let input = document.getElementById("inputbox");
let err = document.getElementById("errormsg");
let count = 0;
let time = setInterval(counter, 1000);

function counter() {
    let sec = document.getElementById("seconds").textContent = count;
    count++;
}
counter();

function stop() {
    let stop = clearInterval(time);
}

function checktime() {
    stop();
    if(input.value === ""){
        err.textContent ="type the content";
        err.style.color ="red";
    }
    if (passage === input.value) {
        err.textContent = `typed in ${count-1}`;
        err.style.color = "green";
    }
    else {
        err.textContent = "error in letter";
        err.style.color = "red";
    }
}