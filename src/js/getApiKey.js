import apiHandler from "./getDataAPI.js";
let cleApi;

export function popUpAPI() {
    return new Promise((resolve, reject) => {
        cleApi = prompt("Veuillez entrer votre clé API :");

        if (cleApi) {
            //console.log("Clé API :", cleApi);
            resolve(cleApi)
        } else {
            reject("Aucune clé saisie ❌");
        }
    })   
};

export const ExportcleApi = cleApi;

const d = await apiHandler.getAnimeByName("Fullmetal");
console.log(d);