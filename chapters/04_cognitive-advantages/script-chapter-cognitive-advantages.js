// let icon1;
// let title1;
// let icon2;
// let title2;

// icon1 = document.getElementById("essay1");
// title1 = document.getElementById("essay1-title");

// icon2 = document.getElementById("essay2");
// title2 = document.getElementById("essay2-title");

// icon1.addEventListener("mouseover", showtitle1); 
// icon1.addEventListener("mouseout", hidetitle1); 

// icon2.addEventListener("mouseover", showtitle2); 
// icon2.addEventListener("mouseout", hidetitle2); 


// function showtitle1() {
//     title1.style.display = "block";
//     console.log('shown');
// }

// function hidetitle1() {
//     title1.style.display = "none";
// }

// function showtitle2() {
//     title2.style.display = "block";
//     console.log('shown');
// }

// function hidetitle2() {
//     title2.style.display = "none";
// }

$(function(){
    $("#nav").load("../navigation.html"); 
  });

let iconsCol;
let titlesCol;
let icons;
let titles;
let titleHovered; 

iconsCol = document.getElementsByClassName("icon");
titlesCol = document.getElementsByClassName("essay-title");

icons = Array.prototype.slice.call( iconsCol );
titles = Array.prototype.slice.call( titlesCol );

for (let i=0; i<icons.length; i++) { 
    icons[i].addEventListener("mouseover", function(){
        titles[i].style.display = "block";
    });
    icons[i].addEventListener("mouseout", function(){
        titles[i].style.display = "none";
    });
}



