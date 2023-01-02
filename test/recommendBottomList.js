







let div = document.createElement('div');
let cards = document.getElementById("cards");
let cards2 = document.getElementById("cards2");
let ul = document.getElementById("cards");
let mainTitle = document.getElementById("mainTitle");



let studentsData = [    
    
/*  Upper Body   */
    
//1. Pull me Upper
['/Users/jimmolsingh/htmltest/workoutimage/challenge.png','Pull Me Upper', 'This is a description','https://www.google.com/'],

//2. Upperfactory
['/Users/jimmolsingh/htmltest/workoutimage/upperfactory2.png','Upperfactory', 'This is a description','https://www.google.com/'],



/* Lower Body*/

//1. Homemade

['/Users/jimmolsingh/htmltest/workoutimage/uppergainer.png','Homemade', 'This is a description','https://www.google.com/'],

//2. Leg Excite

['/Users/jimmolsingh/htmltest/workoutimage/Training at home-bro (1).png','Leg Excite', 'This is a description','https://www.google.com/'],




/* Cardio */


//1. Sweat

['/Users/jimmolsingh/htmltest/workoutimage/upperdelight.png','Sweat', 'This is a description','https://www.google.com/'],

//2. Werk It!


['/Users/jimmolsingh/htmltest/workoutimage/werkit.png','Werk It!', 'This is a description','https://www.google.com/'],






/* Abs */



//1. Abs of Steel



['/Users/jimmolsingh/htmltest/workoutimage/abs2.png','Abs of Steel', 'This is a description','https://www.google.com/'],

//2. Masterpack

['/Users/jimmolsingh/htmltest/workoutimage/masterpack.png','Masterpack', 'This is a description','https://www.google.com/'],



















];

let image = 0
let title = 1
let description = 2
let link = 3

















let haveIt = [];

function generateUniqueRandom(maxNr) {

    

    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}











/*
duplication();



function duplication(){

let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let array2 = []


while(array2.length < array.length){

  let random = Math.floor(Math.random() * array.length);

  if (!array2.includes(random)){



  let li = document.createElement('li');
  li.setAttribute("id","cardlist");
  
  li.innerHTML = "<img id ='card_image'" + "src='" + studentsData[randondomStudentData][image] + "'>" + "</div>" + "<div class='card_content'>" + "<p class='card_title'>" +"" +   studentsData[randondomStudentData][title] + "" +"</p>"+ "<p class='card_text'> " + studentsData[randondomStudentData][description] + "</p>" + "<a href=" + "'" +studentsData[randondomStudentData][link] + "'>" + "<button class='btn card_btn'>" + "Read More" + "</button></a>";
  
  
  
  
  cards.appendChild(li);
    array2.push(random);

  }

}
 
console.log(array2);

    
  
}




*/






let amountOfRecommendation = 8
let array2 = []

while(array2.length <  amountOfRecommendation){

  let random = Math.floor(Math.random() * studentsData.length);

  if (!array2.includes(random)){



  let li = document.createElement('li');
  li.setAttribute("id","cardlist");
  
  li.innerHTML = "<img id ='card_image'" + "src='" + studentsData[random][image] + "'>" + "</div>" + "<div class='card_content'>" + "<p class='card_title'>" +"" +   studentsData[random][title] + "" +"</p>"+ "<p class='card_text'> " + studentsData[random][description] + "</p>" + "<a href=" + "'" +studentsData[random][link] + "'>" + "<button class='btn card_btn'>" + "Read More" + "</button></a>";
  
  
  
  
  cards.appendChild(li);
    array2.push(random);

  }

}









/*



for (let i = 0; i <  9; i++){

 let randondomStudentData = Math.floor(Math.random() * 9);


 
  array.push(randondomStudentData)
  




 














}







 //let randondomStudentData = generateUniqueRandom(studentDataLength);
   // console.log(random);

   //let randondomStudentData = generateUniqueRandom(studentDataLength);
  





/*


let randondomStudentData = Math.floor(Math.random() * studentDataLength);

console.log(studentsData[0][3]);



let li = document.createElement('li');
li.setAttribute("id","cardlist");

li.innerHTML = "<img id ='card_image'" + "src='" + studentsData[0][image] + "'>" + "</div>" + "<div class='card_content'>" + "<p class='card_title'>" +"" +   studentsData[0][title] + "" +"</p>"+ "<p class='card_text'> " + studentsData[0][description] + "</p>" + "<a href=" + "'" +studentsData[0][link] + "'>" + "<button class='btn card_btn'>" + "Read More" + "</button></a>";




cards.appendChild(li);




*/








/*

let recommendListTitle = document.createElement('p');
recommendListTitle.setAttribute("id", "recommendListTitle");

recommendListTitle.innerText = "Hello worlddcdc";

mainTitle.appendChild(recommendListTitle);

*/




















    /*
    li.innerHTML = "<div class='card'>" +
    "<div class='card_image'>" + "<img src='/Users/jimmolsingh/htmltest/workoutimage/Skipping rope-bro.png'>" + "</div>" +
    "<div class='card_content'>" +
      "<h2 class='card_title'>" + "HOMEMADE" + "</h2>" + 
      "<p class='card_text'>" + "In this quick and easy workout, we will be using three basic..." + "</p>" +
      "<button class='btn card_btn'>" + "Read More</button>" + 
    "</div>" +"</div>";
    
*/

/*li.innerHTML = "<div id ='hellolist'> Hello</div>";*/








/*

var paragraph = document.getElementById("recommedListTitle");
var text = document.createTextNode("RECOMMEND ARTICLES");

paragraph.appendChild(text);



*/

















/*


for(i=0; i < 4; i++){

    
    let li = document.createElement('li');
    let li2 = document.createElement('li');


li.setAttribute("id","cardlist");



li.innerHTML = "<img id ='card_image' src='/Users/jimmolsingh/htmltest/workoutimage/Skipping rope-bro.png'>" + "</div>" + "<div class='card_content'>" + "<p class='card_title'>" +"HOMEMADE" +"</p>"+ "<p class='card_text'>Hello World</p>" +"<button class='btn card_btn'>Read More</button>";




li2.setAttribute("id","cardlist");

li2.innerHTML = "<img id ='card_image' src='/Users/jimmolsingh/htmltest/workoutimage/Skipping rope-bro.png'>" + "</div>" + "<div class='card_content'>" + "<p class='card_title'>" +"HOMEMADE" +"</p>"+ "<p class='card_text'>Hello World</p>" +"<button class='btn card_btn'>Read More</button>";



    cards.appendChild(li);
    cards2.appendChild(li2);
   

}






*/


