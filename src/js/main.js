

import { requestAnime, displayAnime, reinitSearch } from "./animeHandler.js";
import loadDarkMode from "./darkModeHandler.js";
import updateFormElement from "./formChangeHandler.js";
import init from "./initLoader.js";

const searchType = document.getElementById("searchType");

const form = document.getElementById("form");
const reinit = document.getElementById("reinit-btn");




init();
loadDarkMode();

searchType.addEventListener("change", updateFormElement);
form.addEventListener("submit", requestAnime);
reinit.addEventListener("click", reinitSearch);



