let designWatch;
let arrow; 
let rad; 
let mouseX;
let mouseY


designWatch = document.getElementById('designWatch');
rad = document.getElementById('rad');

$( document ).on( "mousemove", function( event ) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    console.log(mouseX);
    // $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });


rad.addEventListener('mouseover',moveRad);
rad.addEventListener('mouseleave',moveRadleave);


function moveRad() {
    rad.style.left="11%";
}

function moveRadleave() {
  rad.style.left="10%";

}

