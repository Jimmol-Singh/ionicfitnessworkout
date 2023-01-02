
let link = ["https://www.google.com","https://www.youtube.com","https://www.yahoo.com", "https://www.mozilla.org/en-US/"];
let name = ["1. Upper Body Workout - Pull me Upper","2. Lower Body Workout - Homemade","3. Cardio Workout - Sweat!","4. Abs Workout - Abs of Steel"];
let description = ["Lorem ipsum dolor sit amet sit amet sit amet...","Lorem ipsum dolor sit amet...","Lorem ipsum dolor sit amet...","Lorem ipsum dolor sit amet..."];


let menu = document.getElementById('recommendMenu');


for(i = 0; i < name.length; i++){

  let li = document.createElement('li');

  let div = document.createElement('div');
  let br = document.createElement('br');
  
  div.setAttribute("id","recommendListItem");


  li.innerHTML = "<div id ='listItems'>"  + "<a id = 'linkID'href='"+ link[i] +"'>"+ name[i] + "<br>" + "<div id='descriptionText'>"+ description[i] +"</div>" + "</a>" + "</div>";

  //li.innerHTML = "<div id ='testID'>"  + "<a href='"+ link[i] +"'>"+ name[i]+"</a>" + "</div>" + description[i];

  //li.innerHTML = "<a href='"+ link[i] +"'>"+ name[i]+"</a>" ;

  menu.appendChild(li);
  menu.appendChild(br);
  
  


}