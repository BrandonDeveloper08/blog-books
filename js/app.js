const enlace = document.querySelector(".up a");
const html = document.querySelector("html");
const modeDark = document.querySelector(".mode-dark");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn")

enlace.addEventListener("click", ()=>{
    enlace.href = "#header"
    html.style.scrollBehavior = "smooth";
})

modeDark.addEventListener("click", ()=>{
    if(html.classList.contains("black")){
        html.classList.remove("black");
    }else{
        html.classList.add("black");
    }
})
