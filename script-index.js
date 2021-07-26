$(function () {
    $("#nav").load("nav.html");
  });

let randomMarginLeft; 
let randomMarginRight; 
let randomMarginTop; 
let randomMarginBtm;

// randomNumber = Math.floor(Math.random()*50);
// console.log(randomNumber);

// $( ".photo-container" ).css({"marginLeft" : randomNumber })


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


let colors=[ "#ff1e00", "#ff00cc", "#0040ff", "#00e32a"];
let randomColor; 
titleContainer = document.getElementById("title-container");

$( ".text-container" ).each(function(){
  randomColor = colors[Math.floor(Math.random() * 4)];
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


