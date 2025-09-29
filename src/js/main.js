import apiHandler from "./getDataAPI.js";

try{
    const data = await apiHandler.getAnimeByName("Fullmetal");
    console.log(data.data);
} catch(e){
    console.log(e);
}
