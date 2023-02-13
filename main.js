const API_KEY = '4ce4c2cc948c50e2918b768d786fb611';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
let movie = document.getElementById('movie')
let error = document.getElementById('error')
let mobile = document.getElementById('mobile')

function getMovie(id){

    fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if(data.status_code === 34){
            error.style.display = 'flex'
            setTimeout(() =>{
                error.style.display = 'none'
            }, 4000)
        }else {
            titleMovie.textContent = data.original_title
            sinopseMovie.textContent = data.overview
            if(window.matchMedia("(max-width:979px)").matches){
                mobile.style.display = 'flex'
                bannerMovieMobile.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            }else{
                bannerMovie.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                movie.style.display = 'flex'
            }
        }
    })
    .catch(error => console.error(error))
}