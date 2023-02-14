const API_KEY = '4ce4c2cc948c50e2918b768d786fb611';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
let movie = document.getElementById('movie')
let error = document.getElementById('error')
let mobile = document.getElementById('mobile')
let btnGetMovie = document.getElementById('btnGetMovie')

function getMovie(id){

    fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&${language}`)
    .then(response => response.json())
    .then(data => {
        if(data.status_code === 34){
           getMovie(Math.floor(Math.random() * 20000 - 1) + 1)
        }else {
            if(data.overview === '' | null ){
               getMovie(Math.floor(Math.random() * 2000 - 1) + 1)
            }else{
                titleMovie.textContent = data.original_title
                sinopseMovie.textContent = data.overview
                bannerMovie.src = `${IMG_URL}/${data.poster_path}`
                movie.style.display = 'flex'
            }
        }
    })
    .catch(error => console.error(error))
}