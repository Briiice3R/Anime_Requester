import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
import { displayAnime } from "./animeHandler.js";
export default async function init(){
    try{
        
        if(!window.sessionStorage.getItem("APIKey")){
            await popUpAPI();
        }
        const animeList = await apiHandler.getTenAnime();
        displayAnime(animeList);
        

    }catch (error){
        console.error("Erreur pendant l'initiation : ", error);
        alert("Clé incorrecte: relancez la page");
    }
}