let data = document.getElementById("data");

fetch('data.json')
    .then(res => res.json())
    .then(jk => {
        data.innerHTML = `
        <h2>${jk.user[0].name}</h2>
        <h3>${jk.user[0].age}</h3>
        <img src ="${jk.user[0].img}" style ="width:100px;" >
        `;
        
    })
    .catch(err => err)
