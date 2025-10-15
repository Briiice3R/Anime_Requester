import apiHandler from "./getDataAPI.js";
const searchType = document.getElementById("searchType");
const searchParameter = document.getElementById("paramInput");
const container = document.getElementById("div-anime-cards");
const template = document.getElementById("anime-card");


let request;


export async function requestAnime(event){
    event.preventDefault();
    switch(searchType.value){
        case "title":
            
            request = await apiHandler.getAnimeByName(searchParameter.value);
            break;
        case "genre":
            const arrGenres = [];
            const genresChecked = document.querySelectorAll("#genreCheck");
            genresChecked.forEach(v=>{
                if(v.checked){
                    arrGenres.push(v.value);
                }
            })

            request = await apiHandler.getAnimeByGenre(arrGenres);
            break;
        case "id":
            request = await apiHandler.getAnimeById(searchParameter.value || 1);
            break;
        case "rank":
            request = await apiHandler.getAnimeByRank(searchParameter.value || 1);
            break;
        default :
            request = await apiHandler.getTenAnime();
    }
    displayAnime();

   
}

export function displayAnime() {
    clearCards();
    if(Array.isArray(request)){
        container.setAttribute("style", "grid-template-columns: repeat(2, 1fr);");
        request.forEach(anime => {
        
            const animeCard = template.content.cloneNode(true);
            animeCard.querySelector('.anime-card-title').textContent = anime.title;
            animeCard.querySelector('.anime-card-img').src = anime.image;
            animeCard.querySelector('.anime-card-synopsis').textContent = anime.synopsis;
            anime.genres.forEach((genre, index)  =>{
                animeCard.querySelector('.anime-card-genre').textContent += genre;
                if(!(index === anime.genres.length - 1)){
                    animeCard.querySelector('.anime-card-genre').textContent += ", ";
                }
            })
            animeCard.querySelector('.anime-card-rank').textContent = anime.ranking;
            animeCard.querySelector('.anime-card-episode-number').textContent = anime.episodes;
            animeCard.querySelector('.anime-card-id').textContent = anime._id;
    
            container.appendChild(animeCard);
        })
    }
    else{
        const animeCard = template.content.cloneNode(true);
        animeCard.querySelector('.anime-card-title').textContent = request.title;
        animeCard.querySelector('.anime-card-img').src = request.image;
        animeCard.querySelector('.anime-card-synopsis').textContent = request.synopsis;
        request.genres.forEach((genre, index)  =>{
            animeCard.querySelector('.anime-card-genre').textContent += genre;
            if(!(index === request.genres.length - 1)){
                animeCard.querySelector('.anime-card-genre').textContent += ", ";
            }
        })
        animeCard.querySelector('.anime-card-rank').textContent = request.ranking;
        animeCard.querySelector('.anime-card-episode-number').textContent = request.episodes;
        animeCard.querySelector('.anime-card-id').textContent = request._id;

        container.appendChild(animeCard);
        container.setAttribute("style", "grid-template-columns: repeat(1, 1fr);");
    }
        

}

export function reinitSearch(){
    clearCards();
    searchType.selectedIndex = 0;
    searchParameter.value = '';
    genresGroup.style.display = "none";
    paramGroup.style.display = "flex";
}

export function clearCards(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
}