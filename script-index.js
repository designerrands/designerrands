$(function () {
    $("#nav").load("nav.html");
  });

let randomMarginLeft; 
let randomMarginRight; 
let randomMarginTop; 
let randomMarginBtm;


$( ".photo-container" ).each(function() {
  randomMarginLeft = Math.floor(Math.random()*100);
  randomMarginRight = Math.floor(Math.random()*100);
  randomMarginTop =  Math.floor(Math.random()*150);
  randomMarginBtm =  Math.floor(Math.random()*200);
  $(this).css({"marginLeft" : randomMarginLeft });
  $(this).css({"marginTop" : randomMarginTop });
  $(this).css({"marginRight" : randomMarginRight });
  $(this).css({"marginBottom" : randomMarginBtm });
  console.log(randomMarginLeft);
});


let colors=[ "#FA00FF", "#2D80FC", "#AA2AFE", "#FD0100", "#FD8130", "#FFFD05", "#02DA12"];
let randomColor; 
titleContainer = document.getElementById("title-container");

$( ".text-container" ).each(function(){
  randomColor = colors[Math.floor(Math.random() * 7)];
  $(this).css({"backgroundColor": randomColor })
})
  
let track;
let report;
let reportText;

report = document.getElementById("report");
track = document.getElementById("track");
reportText = document.getElementById("report-text");

report.onmouseover = function () {
  reportText.innerHTML =
    "REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS *";
};

report.onmouseleave = function () {
  reportText.innerHTML = "REPORT YOUR ERRANDS";
};

ScrollReveal().reveal('.photo-container',{ delay: 500});


