let footer = document.getElementById("row");

let column1 = document.createElement("div");
let column2 = document.createElement("div");
let column3 = document.createElement("div");

let column1Title = document.createElement("h2");
let column2Title = document.createElement("h2");
let column3Title = document.createElement("h2");

let column1Text = document.createElement("p");
let column2Text = document.createElement("p");
let column3Text = document.createElement("p");

let ulone = document.createElement("ul");
ulone.setAttribute("id","ulone");





column1.setAttribute("id","column");
column2.setAttribute("id","column");
column3.setAttribute("id","column");




column2Title.innerText="Title";
column3Title.innerText="Title";


column2Text.innerText="World";
column3Text.innerText="World";





/*

let footerList1 = ["<p id='serviceTitle'>Service</p><br>",
                  "<a id = 'link' href='https://www.google.com'>Workout</a>",
                  "<a id = 'link' href='https://www.google.com'>Nutrition</a>",
                  "<a id = 'link' href='https://www.google.com'>Home Equipment</a>", 
                  "<a id = 'link' href='https://www.google.com'>Tutorial</a>"];


                  */

                 
                  

        
                  let footerList1 = [" ",
                  " ",
                  " ",
                  " ", 
                  " "];

                  for(i = 0; i < footerList1.length; i++){

                    let li = document.createElement("li");
                    li.setAttribute("id","serviceListElement")
                    
                    li.innerHTML="<p>" + footerList1[i] + "</p>" + "<br>";
                    
                    ulone.appendChild(li);
                    
                    
                    }

                    column1.appendChild(ulone);

















let ultwo = document.createElement("ul");
ultwo.setAttribute("id","ulone");






/*


let footerList2 = ["<p id='serviceTitle'>Website</p><br>",
"<a id = 'link' href='https://www.google.com'>Home</a>",
"<a id = 'link' href='https://www.google.com'>About</a>",
"<a id = 'link' href='https://www.google.com'>Support</a>",
"<a id = 'link' href='https://www.google.com'>Contact</a>",
"<a id = 'link' href='https://www.google.com'>Sitemap</a>",
"<a id = 'link' href='https://www.google.com'>Disclaimer</a>",
"<a id = 'link' href='https://www.google.com'>FAQ</a>"];




*/



let footerList2 = ["<p id='serviceTitle'>Website</p><br>",
"<a id = 'link' href='https://www.google.com'>Home</a>",
" ",
" ",
" ",
" ",
" ",
" "];




for(i = 0; i < footerList2.length; i++){

    let li2 = document.createElement("li");
    li2.setAttribute("id","serviceListElement")
    
    li2.innerHTML="<p>" + footerList2[i] + "</p>" + "<br>";
    
    ultwo.appendChild(li2);
    
    
    }
    
    
    column2.appendChild(ultwo);
    









    let ulthree = document.createElement("ul");
ulthree.setAttribute("id","ulone");





/*
let footerList3 = ["<p id='serviceTitle'>Social</p><br>",
                  "<a id = 'link' href='https://www.google.com'>Instagram</a>",
                  "<a id = 'link' href='https://www.google.com'>Twitter</a>",
                  "<a id = 'link' href='https://www.google.com'>Tiktok</a>",
                  "<a id = 'link' href='https://www.google.com'>Facebook</a>",
                  "<a id = 'link' href='https://www.google.com'>Newletter</a>"];

*/




let footerList3 = [" ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " "];





                  for(i = 0; i < footerList3.length; i++){

                    let li3 = document.createElement("li");
                    li3.setAttribute("id","serviceListElement")
                    
                    li3.innerHTML="<p>" + footerList3[i] + "</p>" + "<br>";
                    
                    ulthree.appendChild(li3);
                    
                    
                    }
                    
                    
                    column3.appendChild(ulthree);
                    

footer.appendChild(column1);
footer.appendChild(column2);
footer.appendChild(column3);




