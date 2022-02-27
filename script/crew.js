const img = document.querySelector(".crew-img");
const heading = document.getElementById("des-heading");
const heading1 = document.getElementById("heading-des");
const paragraph = document.getElementById("des-paragraph");
const  crewContent = document.getElementById("crew-content");
const radioBtn = document.querySelectorAll(".radio");
const content = document.querySelector(".content");
const crewInfo1 = () => {
        const result = fetch("./data.json")
            .then(result => result.json())
            .then(data => {
                 img.src = data.crew[0].images.png;
                heading.innerText=data.crew[0].name;
                heading1.innerText=data.crew[0].role;
                paragraph.innerText = data.crew[0].bio;
                console.log(data.crew[0].role);
            });
}
const crewInfo2 = () => {
        const result = fetch("./data.json")
            .then(result => result.json())
            .then(data => {
                 img.src = data.crew[1].images.png;
                 heading.innerText=data.crew[1].name;
                 heading1.innerText=data.crew[1].role;
                paragraph.innerText = data.crew[1].bio;
                console.log(data.crew[1].name);
            });
}
const crewInfo3 = () => {
        const result = fetch("./data.json")
            .then(result => result.json())
            .then(data => {
                 img.src = data.crew[2].images.png;
                 heading.innerText=data.crew[2].name;
                 heading1.innerText=data.crew[2].role;
                paragraph.innerText = data.crew[2].bio;
                console.log(data.crew[2].name);
               
            });
}
const crewInfo4 = () => {
        const result = fetch("./data.json")
            .then(result => result.json())
            .then(data => {
                 img.src = data.crew[3].images.png;
                 heading.innerText=data.crew[3].name;
                 heading1.innerText=data.crew[3].role;
                paragraph.innerText = data.crew[3].bio;
                console.log(data.crew);
              
            });
}
const radioBtnfill = ()=>{
    radioBtn.forEach(element => {
        // console.log(element.dataset);
        const id = element.dataset;
        console.log(id);
        // if (id ){
        //     if (id === douglas) {
        //         element.classList.toggle("radio-fill");
        //     }
        //     else if (id === SHUTTLEWORTH ) {
                
        //     }
        // }
    });
}
 
    for (const navBtn of radioBtn) {
        navBtn.addEventListener('click', () => {
            if (navBtn.hasAttribute("data-crew1")) {
                crewInfo1();
            }
            else if(navBtn.hasAttribute("data-crew2")){
               crewInfo2();
            }
            else if(navBtn.hasAttribute("data-crew3")){
                crewInfo3();
            }
            else if(navBtn.hasAttribute("data-crew4")){
                crewInfo4();
            }
            else{
                paragraph.innerText="cannot load json"
            }
           })

    }
    radioBtnfill();
  
setInterval(() => {
    
    setTimeout(() => {
      
        crewInfo1(); 
    }, 2000);
    setTimeout(() => {
        
        crewInfo2(); 
}, 5000);
setTimeout(() => {
   
        crewInfo3(); 
}, 7000);
setTimeout(() => {
   
        crewInfo4(); 
    }, 10000);
}, 10000);