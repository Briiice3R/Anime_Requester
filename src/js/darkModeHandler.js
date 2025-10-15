export default function loadDarkMode(){
    const body = document.querySelector("body");
    const themeButton = document.querySelector(".themeButton");
    const iconTheme = document.getElementById("themeIcon");
    let darkMode = false;
    window.addEventListener("load", ()=>{
        if(window.sessionStorage.getItem("darkMode") == "yes"){
            body.classList.add("dark");
            iconTheme.classList.remove("fa-moon");
            iconTheme.classList.add("fa-sun");
            darkMode = true;
        } else{
            body.classList.remove("dark");
            iconTheme.classList.remove("fa-sun");
            iconTheme.classList.add("fa-moon");
            darkMode = false;
        }
    });
    themeButton.addEventListener("click", ()=>{
        if(!darkMode){
            body.classList.add("dark");
            iconTheme.classList.remove("fa-moon");
            iconTheme.classList.add("fa-sun");
            darkMode = true;
            window.sessionStorage.setItem("darkMode", "yes")
        } else{
            darkMode = false;
            body.classList.remove("dark");
            iconTheme.classList.remove("fa-sun");
            iconTheme.classList.add("fa-moon");
            window.sessionStorage.setItem("darkMode", "false")
        }
    });
}