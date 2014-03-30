var projectnames;
var projectimages; 
var projectcosts;
var projectdescriptions;
var swipes = 0;
var current = 0; 
var max; 
window.onload = function() {
  loadProjectNames();
  loadProjectImages();
  loadDescriptions();
  loadProjectCosts();
  
  showImage();
  showTitle();
  showDescription();
  showMoney();
  
};

function loadProjectNames() {
  projectnames = ["waffle", "waffle2", "waffle3"];
}

function loadProjectImages() {
  projectimages = ["http://lorempixel.com/400/200/sports/", "http://lorempixel.com/output/food-q-c-640-480-6.jpg", "http://lorempixel.com/output/fashion-q-c-640-480-7.jpg"];
}

function loadDescriptions() {
  projectdescriptions = ["description1", "description2", "description3"];
  
}

function loadProjectCosts() {
  projectcosts = ["5", "6", "7"];
}


function showImage(){
 var project_page = document.getElementById('shownproject');
  project_page.querySelector('p.image').innerHTML = "<img src=" + projectimages[current]+ "> </img>";
 
  
}

function showTitle() {
  var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.title').innerHTML= projectnames[current];
}


function showTitle2() {
  var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.title').innerHTML= "Woot";
}


function showDescription(){
    var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.description').innerHTML= projectdescriptions[current];
}


function showMoney(){
    var project_page = document.getElementById('shownproject');
   project_page.querySelector('p.dollars').innerHTML= projectcosts[current];
}

$( document ).ready(function()  {

$( "#shownproject" ).dblclick(function() {
 
  current = current +1; 
  showImage();
  showTitle();
  showDescription();
  showMoney();
});

$("body").bind("swipeleft", function(e) {
              showTitle2();
               });
               
$("body").bind("swiperight", function(e) {
  showTitle2();
  
});


});
               
               
               





