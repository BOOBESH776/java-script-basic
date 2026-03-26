let site_name = document.getElementById("site_name");
let site_url = document.getElementById("site_url");
let card = document.getElementById("card");

function vaild() {

    card.innerHTML =

        `<div class="head">
        <h2>${site_name}</h2>
    </div>
    
    <div class="tag">
        <a href = "${site_url}">${site_url}</a>
    </div>
    `

}