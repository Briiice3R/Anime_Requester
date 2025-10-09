import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
const searchType = document.getElementById("searchType");
const searchParameter = document.getElementById("paramInput");
const form = document.getElementById("form");
let request;
async function init(){
    try{
        
        // if(!window.sessionStorage.getItem("APIKey")){
        //     await popUpAPI();
        // }
        
    }catch (error){
        init();
    }
}

init();


form.addEventListener("submit", displayAnime);

async function displayAnime(event){
    event.preventDefault();
    console.log("searchType =", searchType.value);
    switch(searchType.value){
        case "title":
            console.log(paramInput.value);
            request = await apiHandler.getAnimeByName(searchParameter.value);
            break;
        case "genre":
            console.log(paramInput.value);
            // request = await apiHandler.getAnimeBy...(paramInput.value);
        break;
        case "id":
            console.log(paramInput.value);
            //request = await apiHandler.getAnimeById(paramInput.value);
        break;
        case "rank":
            console.log(paramInput.value);
            //request = await apiHandler.getAnimeByRank(paramInput.value);
        break;
    }

    //request = await apiHandler.getAnimeByName("Death note");

    const template = document.getElementById("anime-card");
    const container = document.getElementById("div-anime-cards");
    console.log(request);


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

    })
};



const themeButton = document.querySelector(".themeButton");
const body = document.querySelector("body");
const themeIcon = document.getElementById("themeIcon");
let darkMode = false;
themeButton.addEventListener("click", ()=>{
    if(body.className.includes("dark")){
        body.classList.remove("dark");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        darkMode = false;
    }else{
        body.classList.add("dark");
        darkMode = true;
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
    window.sessionStorage.setItem("darkMode", darkMode ? "yes": "no");
});