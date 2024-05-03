document.addEventListener("DOMContentLoaded",()=>
{
  document.querySelector(".button").addEventListener("click",()=>
{
  document.querySelector(".popup").classList.add("open-popup");
})
document.querySelector(".tqbtn").addEventListener("click",()=>
{
    document.querySelector(".popup").classList.remove("open-popup");
})
})


