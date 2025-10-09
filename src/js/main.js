import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
const searchType = document.getElementById("searchType");
const searchParameter = document.getElementById("paramInput");
const form = document.getElementById("form");
let request;

const template = document.getElementById("anime-card");
const container = document.getElementById("div-anime-cards");


async function init(){
    try{
        
        if(!window.sessionStorage.getItem("APIKey")){
            await popUpAPI();
        }
        //request = await apiHandler.getTenAnime(searchParameter.value);
        //displayAnime();

    }catch (error){
        init();
    }
}

init();


form.addEventListener("submit", requestAnime);

async function requestAnime(event){
    event.preventDefault();
    console.log("searchType =", searchType.value);
    switch(searchType.value){
        case "title":
            request = await apiHandler.getAnimeByName(searchParameter.value);
            displayAnime();
            break;
        case "genre":
            request = await apiHandler.getAnimeByGenre(searchParameter.value);
            displayAnime();
        break;
        case "id":
            request = await apiHandler.getAnimeById(searchParameter.value);
            displayAnime();
        break;
        case "rank":
            request = await apiHandler.getAnimeByRank(searchParameter.value);
            displayAnime();
        break;
        default :
            request = await apiHandler.getTenAnime(searchParameter.value);
            displayAnimes();
    }

   
};

function clearCards(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
}



function displayAnime() {
    clearCards();
    if(Array.isArray(request)){
        container.setAttribute("style", "grid-template-columns: repeat(2, 1fr);");
        request.forEach(anime => {
        
            const animeCard = template.content.cloneNode(true);
            animeCard.querySelector('.anime-card-title').textContent = anime.title;
            animeCard.querySelector('.anime-card-img').src = anime.image;
            animeCard.querySelector('.anime-card-synopsis').textContent = anime.synopsis;
            anime.genres.forEach(genre =>{
                animeCard.querySelector('.anime-card-genre').textContent += ", "+genre;
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
        anime.genres.forEach(genre =>{
            animeCard.querySelector('.anime-card-genre').textContent = textContent+", "+genre;
        })
        animeCard.querySelector('.anime-card-rank').textContent = request.ranking;
        animeCard.querySelector('.anime-card-episode-number').textContent = request.episodes;
        animeCard.querySelector('.anime-card-id').textContent = request._id;

        container.appendChild(animeCard);
        container.setAttribute("style", "grid-template-columns: repeat(1, 1fr);");
    }
        

}