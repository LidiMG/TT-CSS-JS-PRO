const button = document.querySelector('#enviar')

const data = {
    Search: [
      {
        Title: "Sabrina",
        Year: "1954",
        imdbID: "tt0047437",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmFlNTA1NWItODQxNC00YjFmLWE3ZWYtMzg3YTkwYmMxMjY2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg"
      },
      {
        Title: "War and Peace",
        Year: "1956",
        imdbID: "tt0049934",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE1MzE2MzgyOV5BMl5BanBnXkFtZTcwMTAzNzAwMQ@@._V1_.jpg"
      },
      {
        Title: "The Expanse",
        Year: "2015-2022",
        imdbID: "tt3230854",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
      },
      {
        Title: "La Dolce Vita",
        Year: "1960",
        imdbID: "tt0053779",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjNiNjJhNjMtM2ZkNy00NGMxLThhNWEtN2I5OTk1NjJkNjdjXkEyXkFqcGdeQXVyNjQ0NjYxNjE@._V1_.jpg"
      },
      {
        Title: "Casablanca",
        Year: "1942",
        imdbID: "tt0034583",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"
      },
      {
        Title: "Reacher",
        Year: "2011-",
        imdbID: "tt9288030",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
      },
      {
        Title: "The Great Dictator",
        Year: "1940",
        imdbID: "tt0032553",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      {
        Title: "Shadow and Bone",
        Year: "2021-",
        imdbID: "tt2403776",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTNhY2JlMmItMGMzZi00ZTM2LTlmNTItZDBkMGVhNGJhYWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      },
      {
        Title: "Dr. Terror's House of Horrors",
        Year: "1965",
        imdbID: "tt0059125",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjJlMWJhMDktZmM2Zi00ZjJkLThkM2EtMTAwNmFiZWViYTc1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
      },
      {
        Title: "The Apartment",
        Year: "1960",
        imdbID: "tt0053604",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg"
      },
      {
        Title: "The Raven",
        Year: "1963",
        imdbID: "tt0057449",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ4MjAzMzQzN15BMl5BanBnXkFtZTcwNzkyMTU2NA@@._V1_.jpg"
      },
      {
        Title: "House of the Long Shadows",
        Year: "1983",
        imdbID: "tt0085693",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI0NjAyNDMzMV5BMl5BanBnXkFtZTcwNTkyODE0NA@@._V1_.jpg"
      },
      {
        Title: "What Ever Happened to Baby Jane?",
        Year: "1962",
        imdbID: "tt0056687",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmI0M2VmNTgtMWVhYS00Zjg1LTk1YTYtNmJmMjRkZmMwYTc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
      },
      {
        Title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        Year: "1964",
        imdbID: "tt0057012",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWMyNjFmMDEtZTJiNy00YzM0LWEzMTAtYzU0YjZiMWNjZTgxXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg"
      },
      {
        Title: "Sunset Blvd.",
        Year: "1950",
        imdbID: "tt0043014",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_.jpg"
      },
      {
        Title: "The Wheel of Time",
        Year: "2021-",
        imdbID: "tt7462410",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzA2Nzk5M2EtNWY4Yi00ZDY4LThkZTgtYjhhNWEyMGY0MjFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
      },
      {
        Title: "Rope",
        Year: "1948",
        imdbID: "tt0040746",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWFjMDNlYzItY2VlMS00ZTRkLWJjYTEtYjI5NmFlMGE3MzQ2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
      },
      {
        Title: "Vertigo",
        Year: "1958",
        imdbID: "tt0052357",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWYwZGNmYjctNTE1NC00MGFkLTkwNzQtZDZhMGZjNjBiMWZlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_.jpg"
      },
      {
        Title: "The Witcher",
        Year: "2019-",
        imdbID: "tt5180504",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
      },
      {
        Title: "The Lord of the Rings: The Rings of Power",
        Year: "2022-",
        imdbID: "tt7631058",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTUzYTMwYjAtNzMzMS00YjhmLWEwOGQtY2MxZGEyMzMwZDI0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
      },
    ]
  };

  const movies = (value) =>{
      value.map((movie) =>{
          document.querySelector('.container').innerHTML +=`
          <div class="card">
        <div class="image"><img src="${movie.Poster}" alt="poster" class="poster"></div>
        <div class="info">
            <h1 class="title">${movie.Title}</h1>
            <h3 class="year">Ano: ${movie.Year}</h3>
            <h2 class="type">Tipo: ${movie.Type}</h2>
            <h3 class="imdbID">IMDb ID: ${movie.imdbID}</h3>
        </div>
    </div>`
      })
  }

  button.addEventListener('click', function(e){
    e.preventDefault();
    movies(data.Search);
})