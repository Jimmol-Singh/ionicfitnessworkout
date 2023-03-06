let mainEquipment = document.getElementById("mainEquipment");
let containerEquipment = document.createElement("div");
containerEquipment.setAttribute("id","containerEquipment");


let imagEquipment = document.createElement("div");
imagEquipment.setAttribute("id","imagEquipment");




let textContainerEquipment = document.createElement("div");
textContainerEquipment.setAttribute("id","text-containerEquipment");


let spanEquipment = document.createElement("span");
spanEquipment.setAttribute("id","spanEquipment")

let h1Equipment = document.createElement("h1");
h1Equipment.innerHTML = "EQUIPMENTS";


let pEquipment = document.createElement("p");
pEquipment.innerText=  "Check out our collection of equipments you can find around your house! ";
pEquipment.setAttribute("id","paraEquipment")

let linkEquipment = document.createElement("a");
linkEquipment.innerHTML = "<a href='https://google.com' target='_blank'>Learn more</a>";
linkEquipment.setAttribute("id","linkEquipment")






containerEquipment.appendChild(imagEquipment);
textContainerEquipment.appendChild(spanEquipment);
textContainerEquipment.appendChild(h1Equipment);
textContainerEquipment.appendChild(pEquipment);
textContainerEquipment.appendChild(linkEquipment);



containerEquipment.appendChild(textContainerEquipment);
mainEquipment.appendChild(containerEquipment);











