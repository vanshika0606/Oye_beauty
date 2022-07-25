var right = 0;
var maxMargin;
var jumpMargin = 200;

function setWidth(){
  var boxwidth = document.querySelector(".container1").offsetWidth;
  var displaywidth = document.querySelector(".row1").offsetWidth;
  var displayheight = document.querySelector(".row1").offsetHeight;
  var children = document.querySelectorAll(".row-container1 > .container1").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container1").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function slideLeft1(event){
  var rowcont = document.querySelector(".row-container1");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
}

function slideRight1(event){
  var rowcont = document.querySelector(".row-container1");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
}

window.onload=setWidth;