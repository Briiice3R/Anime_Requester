const HOST = "https://anime-db.p.rapidapi.com";


async function fetchAPI(endpoint = "", params = "", prod=true){
    let APIKEY = window.sessionStorage.getItem("APIKey");
    
    if(!prod){
        try{
            const resFile = await fetch("../../test.json", {method: "GET"}).then((data)=>data.json());
            if(endpoint.includes("by-id")){
                return resFile.data[0];
            }else if(endpoint.includes("search")){
                return resFile.data;

            }else if(endpoint.includes("by-ranking")){
                return resFile.data[0];
                
            } else{
                return resFile.data;
                
            }
                    
            return 0;
        } catch(e){
            console.log(e);
        }
       
    }
    try{
        const reqApi = await fetch(`${HOST}${endpoint}${params}`, 
        {
            method: "GET",
            headers:{
                "x-rapidapi-key": APIKEY
            }
        });
        const data = await reqApi.json();
        return data.data || data;

    
    } catch(e){
        console.log(e);
    }
}

const apiHandler = {
    getAnimeById: id=>fetchAPI(`/anime/by-id/${id}`, ""),
    getAnimeByName: name=>fetchAPI(`/anime?search=${name}`,"&page=1&size=10"),
    getAnimeByRank: rank => fetchAPI(`/anime/by-ranking/${rank}`, ""),
    getTenAnime: (sortAsc=true)=> fetchAPI("/anime", `?page=1&size=10&sortOrder=${sortAsc?"asc":"desc"}`),
    getAnimeByGenre: genre=>fetchAPI("/anime", `?page=1&size=10&genres=${encodeURIComponent(genre)}`),
    getGenres: ()=>fetchAPI("/genre", ``)
};

export default apiHandler;