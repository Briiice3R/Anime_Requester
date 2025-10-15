import {popUpAPI} from "./getApiKey.js";
import apiHandler from "./getDataAPI.js";
export default async function init(){
    try{
        
        if(!window.sessionStorage.getItem("APIKey")){
            await popUpAPI();
        }
        request = await apiHandler.getTenAnime(searchParameter.value);
        displayAnime();
        

    }catch (error){
        init();
    }
}