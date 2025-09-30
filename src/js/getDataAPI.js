const HOST = "https://anime-db.p.rapidapi.com"
const APIKEY = await fetch("../../key.json", {method: "GET"}).then((data)=>data.json().then((data)=>data.key));


async function fetchAPI(endpoint, params = ""){
    try{
        const reqApi = await fetch(`${HOST}${endpoint}${params}`, 
        {
            method: "GET",
            headers:{
                "x-rapidapi-key": APIKEY
            }
        });
        const data = await reqApi.json();
        return data.data;

    
    } catch(e){
        console.log(e);
    }
}

const apiHandler = {
    getAnimeById: id=>fetchAPI(`/anime/by-id/${id}`),
    getAnimeByName: (name, param="")=>fetchAPI(`/anime`,param),
    getAnimeByRank: rank => fetchAPI(`/anime/by-ranking/${rank}`),
    getTenAnime: (sortAsc=true)=> fetchAPI("/anime", `?size=10&${sortAsc?"asc":"desc"}`)
};

export default apiHandler;