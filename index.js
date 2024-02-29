const $ = ($element)=> document.querySelector($element);
const $containerMenu = $(".header__container");

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("menu")){
        $containerMenu.classList.toggle("header__menu--active");
    }
});