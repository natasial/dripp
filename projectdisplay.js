window.onload = function() {
  
  showImage();
  showTitle();
  showDescription();
};

function showImage(){
 var project_page = document.getElementById('shownproject');
  project_page.querySelector('p.image').innerHTML = "<img src= 'http://radiofreethinker.files.wordpress.com/2013/04/zoo-atlanta-giant-panda-atlanta-usa-giant-panda-endangered-species-giant-facts-about-pandas-bear-habitat-panda-bear-panda-migration-travel-destination-beautiful-amazing-zoo-panda-animal.jpg'> </img>";
 
  
}

function showTitle() {
  var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.title').innerHTML= "Independent Animal Rescue Inc.";
}

function showDescription(){
    var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.description').innerHTML= "Provide the full cost of veterinary care for a litter of kittens.";
}





