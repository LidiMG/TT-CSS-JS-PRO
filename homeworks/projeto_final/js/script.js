const container = document.querySelector('.container')
const btnPesq = document.querySelector('.pesquisar')
const buscar = document.querySelector('.buscar')
const urlBase = 'https://imdb-api.com/en/API/SearchTitle/k_jbuzm5wi/'
const urlBaseTop = 'https://imdb-api.com/en/API/Top250Movies/k_jbuzm5wi'

const getMovie = async(movie) =>{
    clearHTML();
    const response = await fetch(`${urlBase}${movie}`)
    const data = await response.json()
    
    data.results.map((item) =>{
        container.innerHTML +=`
        <div class="card">
            <div class="image"><img src="${item.image}" alt="${item.title}" class="poster"></div>
            <div class="info">
                <h1 class="title">${item.title}</h1>
                <button type="button" class="saiba-mais">SAIBA MAIS</button>
            </div>
        </div>`
    })
}

const topMovies = async() =>{
    const response = await fetch(`${urlBaseTop}`)
    const data = await response.json()
    console.log(data);
    // array!
    // for (let i = 0; i < value.length; i++) {
    //     console.log(i);
    // for (var data = 0; data < 50){
    //     console.log(data);}
    data.items.map((item) =>{
        container.innerHTML +=`
        <div class="card">
            <div class="image"><img src="${item.image}" alt="${item.title}" class="poster"></div>
            <div class="info">
                <h1 class="title">${item.title}</h1>
                <button type="button" class="saiba-mais">SAIBA MAIS</button>
            </div>
        </div>`
    })
}

topMovies()
    
const clearHTML = () => {
    container.innerHTML = ``;
}

btnPesq.addEventListener('click', (event)=>{
    event.preventDefault();
    const busca = buscar.value;
    getMovie(busca)
})

