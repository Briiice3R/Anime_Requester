import apiHandler from "./getDataAPI.js";
export default async function updateFormElement(event){
    const genresGroup = document.querySelector(".genresGroup");
    const paramGroup = document.querySelector(".paramGroup");
    if(event.target.value === "genre"){
        if(genresGroup.children.length == 0){
            const genres = await apiHandler.getGenres();
            genres.forEach((genre, index)=>{
                const innerDiv = document.createElement("div");
                innerDiv.id = "innerDivGenreCheck";
                const labelGenre = document.createElement("label");
                labelGenre.htmlFor = "genreCheck";
                labelGenre.textContent = genre._id;
                innerDiv.appendChild(labelGenre)
                const checkboxGenre = document.createElement("input");
                checkboxGenre.type = "checkbox";
                checkboxGenre.name = "genreCheck";
                checkboxGenre.id = "genreCheck";
                checkboxGenre.value = genre._id;
                innerDiv.appendChild(checkboxGenre);
                genresGroup.appendChild(innerDiv);
            });
        }
        paramGroup.style.display = "none"
        genresGroup.style.display = "flex";
    } else{        
        genresGroup.style.display = "none";
        paramGroup.style.display = "flex";
    }
}
