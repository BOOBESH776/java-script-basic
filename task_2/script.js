let passage = document.getElementById("passage");
let input = document.getElementById("inputbox");
let err = document.getElementById("errormsg");
let reset = document.getElementById("reset");
let count = 0;
let time = setInterval(counter, 1000);

sentence();

function counter() {
    document.getElementById("seconds").textContent = count;
    count++;
}

function stop() {
    clearInterval(time);
}

function sentence() {
    fetch('https://apis.ccbp.in/random-quote')
        .then(res => res.json())
        .then(data => {
            let val = data.content;
            passage.textContent = val;
            passage.style.color = "blue"
        })
        .catch(error => {
            passage.textContent = "error in fetch data"
        })
}

function checktime() {
    if (input.value === "") {
        err.textContent = "type the content";
        err.style.color = "red";
        return;
    }
    if (passage.textContent.trim() === input.value.trim()) {
        err.textContent = `typed in ${count - 1}sec`;
        err.style.color = "green";
        stop();
    }
    else {
        err.textContent = "error in letter";
        err.style.color = "red";
    }
}

reset.addEventListener("click", () => {
    window.location.reload();
})