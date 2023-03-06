let topNavID = document.getElementById("myTopnav");
let ul = document.createElement("ul");


let NavItems = [
"<a href='#news' id='itemList'>Tutorial</a>",
"<a href='#news' id='itemList'>Tools</a>",
"<a href='#contact'id='itemList'>Equipments</a>",
"<a href='#about'id='itemList'>Nutrition</a>",
"<a href='#home' id='itemList'>Home</a>",
"<a href='#home' id='websiteLogo'>IONIC FITNESS WORKOUT</a>"


];


for(let i = 0; i < NavItems.length; i++){
let li = document.createElement("li");

li.innerHTML = NavItems[i];
li.setAttribute("id","listItem");

ul.appendChild(li);

}


topNavID.appendChild(ul);




