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
  projectnames = ["Buy Enough Food to Feed a Kitten for 1 Month", "Buy Urban Ministries 3 New Beds for the Homeless", "Buy 2 SAT Books for the Adolescent Parenting Program"];
}

function loadProjectImages() {
  projectimages = ["http://i1170.photobucket.com/albums/r537/natasial1/kittens_zps5c0aa397.png", "http://i1170.photobucket.com/albums/r537/natasial1/kids_zpsae66a9cf.png", "http://s1170.photobucket.com/user/natasial1/media/sats_zps93aeed71.png.html"];

function loadDescriptions() {
  projectdescriptions = ["description1", "description2", "description3"];
  
}

function loadProjectCosts() {
  projectcosts = ["$50", "$300", "$60"];
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
               
               
               





