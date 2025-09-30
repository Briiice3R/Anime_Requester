import apiHandler from "./getDataAPI.js";

const d = await apiHandler.getAnimeByName("Fullmetal");
console.log(d);
