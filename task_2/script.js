let count = 0;
let time = setInterval(counter, 1000);

function counter() {
    let sec = document.getElementById("seconds").textContent = count;
    count++;
}
counter();

function stop(){
    let stop = clearInterval(time);
}

function checktime() {
    stop();
}