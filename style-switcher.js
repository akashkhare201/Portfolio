/* toggeler style Switcher */
const styleSwitcherToggle= document.querySelector(".style-switcher-toggler")

styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})
/* hide style switch on scroll*/
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
document.querySelector(".style-switcher").classList.remove("open")
    }
})
/* Theme colors*/
const alternateStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {

if(color === style.getAttribute("title"))
{
    style.removeAttribute("disabled");
}
else{
    style.setAttribute("disabled","true");
}
    })
}
/* Theme light and Dark Mode */
const dayandNight = document.querySelector(".day-night")
dayandNight.addEventListener("click", () => {
    dayandNight.querySelector("i").classList.toggle("fa-sun")  
    dayandNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        dayandNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayandNight.querySelector("i").classList.add("fa-moon")
    }
})