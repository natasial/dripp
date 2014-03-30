window.onload = function() {
  
  showImage();
  showTitle();
  showDescription();
};

function showImage(){
 var project_page = document.getElementById('shownproject');
  project_page.querySelector('p.image').innerHTML = "<img src= 'kittens.png'> </img>";
 
  
}

function showTitle() {
  var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.title').innerHTML= "Independent Animal Rescue Inc.";
}

function showDescription(){
    var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.description').innerHTML= "Provide the full cost of veterinary care for a litter of kittens.";
}





