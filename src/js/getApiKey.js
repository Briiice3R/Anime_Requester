import apiHandler from "./getDataAPI.js";

window.onload = function() {
    const cleApi = prompt("Veuillez entrer votre clé API :");

    if (cleApi) {
        document.getElementById("resultat").innerText = "Clé API reçue ✅";
        console.log("Clé API :", cleApi);
    } else {
        document.getElementById("resultat").innerText = "Aucune clé saisie ❌";
    }
};

export const ExportcleApi = cleApi;

const d = await apiHandler.getAnimeByName("Fullmetal");
console.log(d);