// import apiHandler from "./getDataAPI.js";
let cleApi;

export function popUpAPI() {
    return new Promise((resolve, reject) => {
        cleApi = prompt("Veuillez entrer votre clé API :");
        if (cleApi) {
            fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",{
                method: "GET",
                headers:{
                "x-rapidapi-key": cleApi
                }
            }).then(res=>{
                if(res.ok){
                    window.sessionStorage.setItem("APIKey",cleApi);
                    resolve()
                } else{
                    reject("Clé saisie invalide❌")
                }
            }).catch((e)=>{
                reject("Aucune clé saisie ❌")
            })
            //console.log("Clé API :", cleApi);
        } else {
            reject("Aucune clé saisie ❌");
        }
    })   
};

// const d = await apiHandler.getAnimeByName("Fullmetal");
// console.log(d);