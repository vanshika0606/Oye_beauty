
var right3 = 0;
var maxMargin3;
var jumpMargin3 = 200;

function setWidth(){
  var boxwidth3 = document.querySelector(".container3").offsetWidth;
  var displaywidth3 = document.querySelector(".row3").offsetWidth;
  var displayheight3 = document.querySelector(".row3").offsetHeight;
  var children3 = document.querySelectorAll(".row-container3 > .container3").length;
  var outerboxwidth3 = children3 * boxwidth3 + (children3*10);
  document.querySelector(".row-container3").style.width = outerboxwidth3+"px";
  document.querySelectorAll("button")[0].style.height = displayheight3+"px";
  document.querySelectorAll("button")[1].style.height = displayheight3+"px";
  maxMargin3 = outerboxwidth3 - displaywidth3;
}

function slideLeft3(event){
  var rowcont = document.querySelector(".row-container3");
  if(right3 <= -maxMargin3){
    event.preventDefault();
  }
  else{
    right3 -= jumpMargin3;
  }
   rowcont.style.marginLeft = right3+"px";
}

function slideright3(event){
  var rowcont = document.querySelector(".row-container3");
  if(right3==0){
    event.preventDefault();
  }
  else if(right3 >= maxMargin3){
    event.preventDefault();
  }
  else{
     right3 += jumpMargin3;
  }
  rowcont.style.marginLeft = right3+"px";
}

window.onload=setWidth;