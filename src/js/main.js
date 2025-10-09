import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
const searchType = document.getElementById("searchType");
const searchParameter = document.getElementById("paramInput")

async function init(){
    try{
        /*
        if(!window.sessionStorage.getItem("APIKey")){
            await popUpAPI();
        }*/
        
        switch(searchType.value){
            case "title":
                const request = await apiHandler.getAnimeByName(paramInput.value);
                break;
        }

        const request = await apiHandler.getAnimeByName("Death note");
        
        const template = document.getElementById("anime-card");
        const container = document.getElementById("div-anime-cards");


        
        request.forEach(anime => {
            
            const animeCard = template.content.cloneNode(true);
            animeCard.querySelector('.anime-card-title').textContent = anime.title;
            animeCard.querySelector('.anime-card-img').src = anime.image;
            animeCard.querySelector('.anime-card-synopsis').textContent = anime.synopsis;
            animeCard.querySelector('.anime-card-genre').textContent = anime.genres[0];
            animeCard.querySelector('.anime-card-rank').textContent = anime.ranking;
            animeCard.querySelector('.anime-card-episode-number').textContent = anime.episodes;
            animeCard.querySelector('.anime-card-id').textContent = anime._id;
        
            container.appendChild(animeCard);

        });
    }catch (error){
        init();
    }
}

init();


