var current = 0;
var splashimages;
window.onload = function() {
splashimages = ["http://i1170.photobucket.com/albums/r537/natasial1/intro1_zpsf8a70abf.jpg", "http://i1170.photobucket.com/albums/r537/natasial1/intro2_zps22b765f1.jpg", "http://i1170.photobucket.com/albums/r537/natasial1/intro3_zps92ac072e.jpg"];

   var project_page = document.getElementById('splashimage');
   project_page.innerHTML= "<img src=" + splashimages[current]+ "> </img>";
                                      
  current = current +1;
  
};


$( document ).ready(function()  {
$( "#splashimage" ).click(function() {

  var project_page = document.getElementById('splashimage');
   project_page.innerHTML="<img src=" + splashimages[current]+ "> </img>";
                                             current = current + 1; 
if (current == 3) {
  window.location.href = 'filters.html';
}
});



});

   
               
               





