let mainTool = document.getElementById("mainTool");
let containerTool = document.createElement("div");
containerTool.setAttribute("id","containerTool");


let imagTool = document.createElement("div");
imagTool.setAttribute("id","imagTool");




let textContainerTool = document.createElement("div");
textContainerTool.setAttribute("id","text-containerTool");


let spanTool = document.createElement("span");
spanTool.setAttribute("id","spanTool")

let h1Tool = document.createElement("h1");
h1Tool.innerHTML = "EQUIPMENTS";


let pTool = document.createElement("p");
pTool.innerText=  "Check out our collection of equipments you can find around your house! ";
pTool.setAttribute("id","paraTool")

let linkTool = document.createElement("a");
linkTool.innerHTML = "<a href='https://google.com' target='_blank'>Learn more</a>";
linkTool.setAttribute("id","linkTool")






containerTool.appendChild(imagTool);
textContainerTool.appendChild(spanTool);
textContainerTool.appendChild(h1Tool);
textContainerTool.appendChild(pTool);
textContainerTool.appendChild(linkTool);





containerTool.appendChild(textContainerTool);
mainTool.appendChild(containerTool);











