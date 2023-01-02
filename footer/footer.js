//This block of code create and add the top footer
let topFooter = document.createElement("div");
topFooter.setAttribute("id","top");

footer.appendChild(topFooter);



//This block of code create and add the middle footer
let middleFooter = document.createElement("div");
middleFooter.setAttribute("id","middle");

footer.appendChild(middleFooter);




//This block of code create and add the bottom footer
let bottomFooter = document.createElement("div");
bottomFooter.setAttribute("id","bottom");

footer.appendChild(bottomFooter);







let column = document.createElement("div");
column.className = "column";

let h2_One = document.createElement("p");
h2_One.setAttribute("id","h2_1");











//This part is for the left section of the footer

let ulone = document.createElement("ul");
ulone.setAttribute("id","ulone");



/*

let footerList1 = ["<p id='serviceTitle'>Service</p>",
                  "<a id = 'link' href='https://www.google.com'>Workout</a>",
                  "<a id = 'link' href='https://www.google.com'>Nutrition</a>",
                  "<a id = 'link' href='https://www.google.com'>Home Equipment</a>", 
                  "<a id = 'link' href='https://www.google.com'>Tutorial</a>"];


*/




let footerList1 = [
                  "<a id = 'link' href='https://www.google.com'>Home Equipment</a>" 
                ];


for(i = 0; i < footerList1.length; i++){

let li = document.createElement("li");
li.setAttribute("id","serviceListElement")

li.innerHTML="<p>" + footerList1[i] + "</p>";

ulone.appendChild(li);


}







column.appendChild(h2_One);
column.appendChild(ulone);
















let column2 = document.createElement("div");
column2.className = "column2";


let ultwo = document.createElement("ul");
ultwo.setAttribute("id","ulone");






/*

let footerList2 = ["<p id='serviceTitle'>Website</p>",
                  "<a id = 'link' href='https://www.google.com'>About</a>",
                  "<a id = 'link' href='https://www.google.com'>Support</a>",
                  "<a id = 'link' href='https://www.google.com'>Contact</a>",
                  "<a id = 'link' href='https://www.google.com'>Sitemap</a>",
                  "<a id = 'link' href='https://www.google.com'>Disclaimer</a>",
                  "<a id = 'link' href='https://www.google.com'>FAQ</a>"];



                  */



                  let footerList2 = [
                  "<a id = 'link' href='https://www.google.com'>Home</a>"];


for(i = 0; i < footerList2.length; i++){

let li2 = document.createElement("li");
li2.setAttribute("id","serviceListElement")

li2.innerHTML="<p>" + footerList2[i] + "</p>";

ultwo.appendChild(li2);


}


column2.appendChild(ultwo);

























let column3 = document.createElement("div");
column3.className = "column3";


let ulthree = document.createElement("ul");
ulthree.setAttribute("id","ulone");






/*

let footerList3 = ["<p id='serviceTitle'>Social</p>",
                  "<a id = 'link' href='https://www.google.com'>Instagram</a>",
                  "<a id = 'link' href='https://www.google.com'>Twitter</a>",
                  "<a id = 'link' href='https://www.google.com'>Tiktok</a>",
                  "<a id = 'link' href='https://www.google.com'>Facebook</a>",
                  "<a id = 'link' href='https://www.google.com'>Newletter</a>"];



                  */


    
                  let footerList3 = [""];                


for(i = 0; i < footerList3.length; i++){

let li3 = document.createElement("li");
li3.setAttribute("id","serviceListElement")

li3.innerHTML="<p>" + footerList3[i] + "</p>";

ulthree.appendChild(li3);


}


column3.appendChild(ulthree);


















column3.appendChild(ulthree);
















middleFooter.appendChild(column);
middleFooter.appendChild(column2);
middleFooter.appendChild(column3);






let year = 2023;
let websiteName = "Ionic Fitness Workout"



let copyright =  document.createElement("p");
copyright.setAttribute("id","copyright");

copyright.innerHTML ="&copy;" + year + " " + websiteName;

bottomFooter.appendChild(copyright);





























