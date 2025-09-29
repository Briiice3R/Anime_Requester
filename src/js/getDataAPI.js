const HOST = "https://anime-db.p.rapidapi.com"
const APIKEY = ""

async function fetchAPI(endpoint, params = ""){
    try{
        const reqApi = await fetch(`${HOST}${endpoind}${params}`, 
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


apiHandler.getAnimeByName = async (name, size=10, asc=true)=>{
    try{
        const reqApi = await fetch(`${HOST}/anime?page=1&size=${size}&search=${name}&sortOrder=${asc?"asc":"desc"}`, 
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
};

apiHandler.getAnimeByRank = async (id)=>{
    try{
        const reqApi = await fetch(`${HOST}/anime/by-ranking/${id}`, 
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

apiHandler.getTenAnime = async ()=>{
    try{
        const reqApi = await fetch(`${HOST}/anime?size=10`, 
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