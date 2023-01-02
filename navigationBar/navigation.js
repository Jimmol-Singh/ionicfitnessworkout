//https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/

let navTag = document.getElementById("navbar");

let logoDiv = document.createElement("div");

logoDiv.setAttribute("id","logo");

navTag.appendChild(logoDiv);










let ulNavLink = document.createElement("ul");

ulNavLink.setAttribute("id","nav-links");








let websiteTitle = "Ionic Fitness Workout";



logoDiv.innerHTML = "<a  id = 'workoutLogoId'href='/'>"+ websiteTitle+ "</a>";





let menuDiv = document.createElement("div");
menuDiv.className = "menu";


/*/

let navList = [   "<a href='/'>Home</a>",
                  "<a href='/'>Workout</a>",
                  "<a href='/'>Nutrition</a>",
                  "<a href='/'>Equipment</a>",
                  "<a href='/'>Tutorial</a>"
            ];


 */



            let navList = [   "<a href='/ionicfitnessworkout/index.html'>Home</a>",                  
            ];




for(let i = 0; i <navList.length; i++){

        let li = document.createElement("li");
                li.setAttribute("id","navListElement");

                li.innerHTML=navList[i];

                menuDiv.appendChild(li);
                

         }

ulNavLink.appendChild(menuDiv);

navTag.appendChild(ulNavLink);
























