const HOST = "https://anime-db.p.rapidapi.com"
const APIKEY = ""


const apiHandler = {};
apiHandler.getAnimeById = async (id)=>{
    try{
        const reqApi = await fetch(`${HOST}/anime/by-id/${id}`, 
        {
            method: "GET",
            headers:{
                "x-rapidapi-key": APIKEY
            }
        });
        const data = await reqApi.json();
        return data;

    
    } catch(e){
        console.log(e);
    }
};

apiHandler.getAnimeByName = async (name, size=10, asc=true)=>{
    try{
        const reqApi = await fetch(`${HOST}/anime?page=1&size=10&search=${name}&sortOrder=${asc?"asc":"desc"}`, 
        {
            method: "GET",
            headers:{
                "x-rapidapi-key": APIKEY
            }
        });
        const data = await reqApi.json();
        return data;

    
    } catch(e){
        console.log(e);
    }
};

export default apiHandler;