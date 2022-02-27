const desNav = document.querySelectorAll(".des-nav-anchors");
const img = document.querySelector(".destiantion-img");
const imgContainer = document.getElementById("img-container");
const heading = document.getElementById("des-heading");
const paragraph = document.getElementById("des-paragraph");
const distance = document.getElementById("distance")
const time = document.getElementById("time")
const destiantionInfoTitian = () => {
    const result = fetch("./data.json")
        .then(result => result.json())
        .then(data => {
             img.src = data.destinations[3].images.png;
            heading.innerText=data.destinations[3].name;
            paragraph.innerText = data.destinations[3].description;
            distance.innerText = data.destinations[3].distance;
            time.innerText = data.destinations[3].travel;
            console.log(data.destinations[3].distance);
            console.log(data.destinations[3].travel);
        });
        
    }
    const destiantionInfoMoon = () => {
        const result = fetch("./data.json")
        .then(result => result.json())
        .then(data => {
            img.src = data.destinations[0].images.png;
            heading.innerHTML=data.destinations[0].name
            paragraph.innerText = data.destinations[0].description;
            distance.innerText = data.destinations[0].distance;
            time.innerText = data.destinations[0].travel;
        });
        
}
const destiantionInfoMars = () => {
    const result = fetch("./data.json")
    .then(result => result.json())
    .then(data => {
            img.src = data.destinations[1].images.png;
            heading.innerHTML=data.destinations[1].name
            paragraph.innerText = data.destinations[1].description;
            distance.innerText = data.destinations[1].distance;
            time.innerText = data.destinations[1].travel;
             });
}
const destiantionInfoEuropa = () => {
    const result = fetch("./data.json")
    .then(result => result.json())
    .then(data => {
        img.src = data.destinations[2].images.png;
        heading.innerHTML=data.destinations[2].name
        paragraph.innerText = data.destinations[2].description;
        distance.innerText = data.destinations[2].distance;
            time.innerText = data.destinations[2].travel;
        });

}

for (const navBtn of desNav) {
    navBtn.addEventListener('click', () => {
        if (navBtn.hasAttribute("data-titan")) {
            destiantionInfoTitian();
        }
        else if(navBtn.hasAttribute("data-Europa")){
            destiantionInfoEuropa();
        }
        else if(navBtn.hasAttribute("data-Moon")){
            destiantionInfoMoon();
        }
        else if(navBtn.hasAttribute("data-Mars")){
            destiantionInfoMars();
        }
        else{
            paragraph.innerText="cannot load json"
        }
       })

}
