let mainNutrition = document.getElementById("mainNutrition");
let container = document.createElement("div");
container.setAttribute("id","container");


let imag = document.createElement("div");
imag.setAttribute("id","imag");




let textContainer = document.createElement("div");
textContainer.setAttribute("id","text-container");


let span = document.createElement("span");

let h1 = document.createElement("h1");
h1.innerHTML = "NUTRITION";


let p = document.createElement("p");
p.innerText=  "Check out our collection of healthy recipies for vegans and Omnivores! ";
p.setAttribute("id","para")

let link = document.createElement("a");
link.innerHTML = "<a href='https://google.com' target='_blank'>Learn more</a>";
link.setAttribute("id","link")







textContainer.appendChild(span);
textContainer.appendChild(h1);
textContainer.appendChild(p);
textContainer.appendChild(link);
container.appendChild(imag);







container.appendChild(textContainer);


mainNutrition.appendChild(container);











