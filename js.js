url = 'https://jsonplaceholder.typicode.com/posts'
let sector = document.getElementById('sector')

fetch(url)
    .then(async function(response) {
        let data = await response.json();
        console.log(data);

        let filtered = data.filter(function(filtData){
            return filtData.userId < 10
        })

        let sortData = filtered.sort(function(first, second){
            if(first.title.length < second.title.length) return -1;
            if(first.title.length > second.title.length) return 1;
            return 0
            
        })

        sortData.forEach(element => {
        addsector(element)
        })


    });

    git_url = 



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