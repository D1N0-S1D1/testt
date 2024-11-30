const grid = document.getElementById('content')

fetch('https://my-json-server.typicode.com/D1N0-S1D1/testt/db')
    .then(async function(response) {
        let data = await response.json()
        console.log(data)

        data.products.forEach(element => {
            addcard(element)
            })
    })


function addcard(eve){
    grid.innerHTML += `
        <div class="card">
            <h1>Name: ${eve.name}</h1>
            <h3>ID: ${eve.id}</h3>
            <p>${eve.description}</p>
            <img src="${eve.photo_url}" alt="">
        </div>
    `
    console.log(eve.photo_url)
}    