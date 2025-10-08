import apiHandler from "./getDataAPI.js";
import {popUpAPI, ExportcleApi} from "./getApiKey.js";

async function init(){
    try{
        const cleAPI = await popUpAPI();
        console.log(cleAPI);
        const d = await apiHandler.getAnimeByName("Fullmetal");
        console.log(d);


    const template = document.getElementById("anime-card");
    const container = document.getElementById("div-anime-cards");



    d.forEach(anime => {
        console.log(anime)
        const animeCard = template.content.cloneNode(true);
        animeCard.querySelector('.anime-card-title').textContent = anime.title;
        animeCard.querySelector('.anime-card-img').src = anime.image;
        animeCard.querySelector('.anime-card-synopsis').textContent = "Synopsis : "+anime.synopsis;
        animeCard.querySelector('.anime-card-genre').textContent = "Genre : "+anime.genres[0];
        animeCard.querySelector('.anime-card-rank').textContent = "Rang : "+anime.rank;
        animeCard.querySelector('.anime-card-episode-number').textContent = "Episodes : "+ anime.episodes;
        animeCard.querySelector('.anime-card-id').textContent = "Id : "+anime._id;
    
        container.appendChild(animeCard);

    });
    }   catch (error){
        console.error("erreur recup clé", error);
    }
}

init();


