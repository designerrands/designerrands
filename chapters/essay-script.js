$(function(){
    $("#nav").load("../navigation.html"); 
  });


let footerBoxprev;
let arrowLeft;
let footerBoxnext;
let arrowRight;

let titleContainer;
let colors=[ "#2a5dcb", "#ee5637", "#f85299", "#008c81"];
let randomColor; 

footerBoxprev = document.getElementById("prev");
arrowLeft = document.getElementById("arrow-left");

footerBoxprev.addEventListener('mouseover',changeArrowPrev);
footerBoxprev.addEventListener('mouseleave',unchangeArrowPrev);

footerBoxnext = document.getElementById("next");
arrowRight = document.getElementById("arrow-right");

footerBoxnext.addEventListener('mouseover',changeArrowNext);
footerBoxnext.addEventListener('mouseleave',unchangeArrowNext);

titleContainer = document.getElementById("title-container");
randomColor = colors[Math.floor(Math.random() * 4)];
titleContainer.style.borderColor = randomColor;


function changeArrowPrev() {
    arrowLeft.style.filter = "invert(1)";
    footerBoxprev.style.backgroundColor = randomColor;
}
function unchangeArrowPrev() {
    arrowLeft.style.filter = "invert(0)";
    footerBoxprev.style.backgroundColor = "#fff6ed"
}


function changeArrowNext() {
    arrowRight.style.filter = "invert(1)";
    footerBoxnext.style.backgroundColor = randomColor;

}
function unchangeArrowNext() {
    arrowRight.style.filter = "invert(0)";
    footerBoxnext.style.backgroundColor = "#fff6ed"
}

    var mouseXpos;
    var mouseYpos;

    $(document).mousemove(function(event) {
        mouseXpos = event.pageX;
        mouseYpos = event.pageY;
    });

let citeCol;
let refCol;
let cites;
let refs;

citeCol = document.getElementsByClassName("cite");
refCol = document.getElementsByClassName("ref");

cites = Array.prototype.slice.call( citeCol );
refs = Array.prototype.slice.call( refCol );

// for (let i=0; i<cites.length; i++) { 
//     cites[i].addEventListener("mouseover", function(){
//         refs[i].style.opacity = "1";
//         // refs[i].style.top = mouseYpos;
//         // refs[i].style.left = mouseXpos;


//     });
//     cites[i].addEventListener("mouseout", function(){
//         refs[i].style.opacity = "0";
        
//     });
// }



// $(function(){
//     // jQuery methods go here...

    
//     $('.cite').each(function(index, value) {
//         console.log(`.cite${index}: ${this.id}`);
//         $(".cite${index}").mouseenter(function(){
//             $(".ref${index}").css('opacity',1);
//         });
//         $(".cite${index}").mouseleave(function(){
//             $(".ref${index}").css('opacity',0);
//         });
//       });
    



//     $(".cite").mouseenter(function(){
//         $(".ref").css('opacity',1);
//     });

//     $(".cite").mouseleave(function(){
//         $(".ref").css('opacity',0);
//     });

//     var mouseXpos;
//     var mouseYpos;

//     $(document).mousemove(function(event) {
//         mouseXpos = event.pageX;
//         mouseYpos = event.pageY;
//     });

//     $("#cite1").mouseenter(function() {
//         $("#ref1").css('left', mouseXpos);
//         $("#ref1").css('top', mouseYpos);
//     });

  
//   });