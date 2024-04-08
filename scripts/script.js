//......................................................
//                     Open-Close Mobile Size
// .....................................................
function myFunction(){
  var barNav = document.getElementById('pcMenu');

  barNav.classList.toggle('show');
  document.getElementById("xmark").classList.toggle("switchOn");
  document.getElementById("bars").classList.toggle("switchOff");    
  
}

//......................................................
//                     Learn More BTN
// .....................................................
function hrefFunction(){
  location.href = "pages/services.html";
};