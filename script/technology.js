let radioButton = document.querySelectorAll('.radio');
let para = document.getElementById("tech-paragraph");
let heading_1 = document.getElementById("heading-tech");
let heading_2 = document.getElementById("tech-heading");
let image = document.querySelector(".tech-img");
let source = document.querySelector("#img-container [srcset]");
console.log(source);
let tech ={
    name:[],
    description:[],
    imgPortrait:[],
    imgLandscape:[],
}
const fetchData = async ()=>{
    const data = await fetch("./data.json")
    const result = await data.json()
    return result
}
// fetchData()
const techStore = async()=>{
    const data = await fetchData();
    data.technology.forEach((element)=>{
        tech.name.push(element.name);
        tech.description.push(element.description);
        tech.imgPortrait.push(element.images.portrait)
        tech.imgLandscape.push(element.images.landscape)
    }) 
    function tech_1(){
        heading_2.innerText = tech.name[0];
        console.log(tech.name[0]);
        para.innerText = tech.description[0];
       image.src = tech.imgPortrait[0];
       source.srcset = tech.imgLandscape[0];
    }
    function tech_2(){
        heading_2.innerText = tech.name[1];
        console.log(tech.name[1]);
        para.innerText = tech.description[1];
       image.src = tech.imgPortrait[1];
       source.srcset = tech.imgLandscape[1];
    }
    function tech_3(){
        heading_2.innerText = tech.name[2];
        console.log(tech.name[2]);
        para.innerText = tech.description[2];
       image.src = tech.imgPortrait[2];
       source.srcset = tech.imgLandscape[2];
    }
    radioButton.forEach(element=>{
        element.addEventListener('click',(e)=>{
                if (element.hasAttribute("data-tech1")){
                   tech_1()
                }
                else if (element.hasAttribute("data-tech2")){
                    tech_2()
                    element.classList.toggle("fill")
                }
                else if (element.hasAttribute("data-tech3")){
                    tech_3()
                    element.classList.toggle("fill")
                }
                
        })
    })
}
techStore();

