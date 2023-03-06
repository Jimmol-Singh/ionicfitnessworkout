let mainTutorial = document.getElementById("mainTutorial");
let containerTutorial = document.createElement("div");
containerTutorial.setAttribute("id","containerTutorial");


let imagTutorial = document.createElement("div");
imagTutorial.setAttribute("id","imagTutorial");




let textContainerTutorial = document.createElement("div");
textContainerTutorial.setAttribute("id","text-containerTutorial");


let spanTutorial = document.createElement("span");

let h1Tutorial = document.createElement("h1");
h1Tutorial.innerHTML = "TUTORIAL";


let pTutorial = document.createElement("p");
pTutorial.innerText=  "Check out our collection of healthy recipies for vegans and Omnivores! ";
pTutorial.setAttribute("id","paraTutorial")

let linkTutorial = document.createElement("a");
linkTutorial.innerHTML = "<a href='https://google.com' target='_blank'>Learn more</a>";
linkTutorial.setAttribute("id","linkTutorial")







textContainerTutorial.appendChild(spanTutorial);
textContainerTutorial.appendChild(h1Tutorial);
textContainerTutorial.appendChild(pTutorial);
textContainerTutorial.appendChild(linkTutorial);
containerTutorial.appendChild(imagTutorial);







containerTutorial.appendChild(textContainerTutorial);


mainTutorial.appendChild(containerTutorial);











