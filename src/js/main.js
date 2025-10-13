import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
const searchType = document.getElementById("searchType");
const searchParameter = document.getElementById("paramInput");
const form = document.getElementById("form");
const reinit = document.getElementById("reinit-btn");
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
reinit.addEventListener("click", reinitSearch);

function reinitSearch(){
    clearCards();
    searchType.selectedIndex = 0;
    searchParameter.value = '';
}

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
            displayAnime();
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


const body = document.querySelector("body");
const themeButton = document.querySelector(".themeButton");
const iconTheme = document.getElementById("themeIcon");
let darkMode = false;
window.addEventListener("load", ()=>{
    if(window.sessionStorage.getItem("darkMode") == "yes"){
        body.classList.add("dark");
        iconTheme.classList.remove("fa-moon");
        iconTheme.classList.add("fa-sun");
        darkMode = true;
    } else{
        body.classList.remove("dark");
        iconTheme.classList.remove("fa-sun");
        iconTheme.classList.add("fa-moon");
        darkMode = false;
    }
});
themeButton.addEventListener("click", ()=>{
    if(!darkMode){
        body.classList.add("dark");
        iconTheme.classList.remove("fa-moon");
        iconTheme.classList.add("fa-sun");
        darkMode = true;
        window.sessionStorage.setItem("darkMode", "yes")
    } else{
        darkMode = false;
        body.classList.remove("dark");
        iconTheme.classList.remove("fa-sun");
        iconTheme.classList.add("fa-moon");
        window.sessionStorage.setItem("darkMode", "false")
    }
});