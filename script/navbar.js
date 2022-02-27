const navlinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close")
const hamburgerimg = document.querySelector(".nav-hamburger");
hamburger.addEventListener('click',()=>{
    close.classList.toggle("hidden");
    navlinks.classList.toggle("translate") ;
    hamburger.classList.toggle("hidden");
})
close.addEventListener("click",()=>{
    navlinks.classList.toggle("translate");
    hamburger.classList.remove("hidden");
    close.classList.toggle("hidden");
})
const anchors = document.querySelectorAll(".nav-anchors");
anchors.forEach(element => {
      element.addEventListener("click",()=>{
             element.classList.toggle("border-bottom")    
      })
});
// function playingwithjson() {
//     const result=fetch("./data.json")
//      .then(result => result.json())
//      .then(data => console.log(data))
// }
// playingwithjson();