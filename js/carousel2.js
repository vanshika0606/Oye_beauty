
var right2 = 0;
var maxMargin2;
var jumpMargin2 = 200;

function setWidth(){
  var boxwidth2 = document.querySelector(".container2").offsetWidth;
  var displaywidth2 = document.querySelector(".row2").offsetWidth;
  var displayheight2 = document.querySelector(".row2").offsetHeight;
  var children2 = document.querySelectorAll(".row-container2 > .container2").length;
  var outerboxwidth2 = children2 * boxwidth2 + (children2*10);
  document.querySelector(".row-container2").style.width = outerboxwidth2+"px";
  document.querySelectorAll("button")[0].style.height = displayheight2+"px";
  document.querySelectorAll("button")[1].style.height = displayheight2+"px";
  maxMargin2 = outerboxwidth2 - displaywidth2;
}

function slideLeft2(event){
  var rowcont = document.querySelector(".row-container2");
  if(right2 <= -maxMargin2){
    event.preventDefault();
  }
  else{
    right2 -= jumpMargin2;
  }
   rowcont.style.marginLeft = right2+"px";
}

function slideRight2(event){
  var rowcont = document.querySelector(".row-container2");
  if(right2==0){
    event.preventDefault();
  }
  else if(right2 >= maxMargin2){
    event.preventDefault();
  }
  else{
     right2 += jumpMargin2;
  }
  rowcont.style.marginLeft = right2+"px";
}

window.onload=setWidth;