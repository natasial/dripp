
$( document ).ready(function()  {
var index = 0;

$('td').on('click', function() {
   if(!this.id) {
    $(this).toggleClass('active');
     
     
  index = index + 1;
   }
  
  if (index == 3) {
    submitChoices();
  }
  
});

function submitChoices() {
  var myfilters = [];
  var classEle = document.querySelectorAll('.active');
  for (var i = 0, len = classEle.length; i < len; i++) {
  alert(classEle[i].innerHTML); 
  }
  
}

$( "#nextbutton" ).dblclick(function() {
  
  window.location = "cost.html";});




});
  


