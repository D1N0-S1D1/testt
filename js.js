url = 'https://jsonplaceholder.typicode.com/posts'
let sector = document.getElementById('sector')

fetch(url)
    .then(async function(response) {
        let data = await response.json();
        console.log(data);

        let filtered = data.filter(function(filtData){
            return filtData.userId == 1
        })

        let sortData = data.sort(function(first, second){
            
        })

        filtered.forEach(element => {
        addsector(element)
        })


    });



    function addsector(sec){
        sector.innerHTML += `
        <div class = 'card'>
        <h1>TITLE: ${sec.title}</h1>
        <h2>USER ID: ${sec.userId}</h2>
        <h3>ID: ${sec.id}</h3>
        <p>Body: ${sec.body}</p>
        </div>
        <hr>
        `    
    }