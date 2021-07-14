


function setup() {
   var  canvas = createCanvas(800, 600);
   canvas.parent("desirepathCanvas");

      background('#ee5637');
      noStroke(0);
    fill('#187845');
    rect(40,30,720,400);
    
    stroke(1);
    fill(200)
    
  beginShape();
  vertex(30, 50);
  vertex(30, 470);
  vertex(400, 470);
  vertex(400, 430);
  vertex(70, 430);
  vertex(70, 50);
  endShape(CLOSE);
    
  beginShape();
  vertex(770, 50);
  vertex(770, 470);
  vertex(400, 470);
  vertex(400, 430);
  vertex(730, 430);
  vertex(730, 50);
  endShape(CLOSE);
    
  rect(380,150,40,300);
  
    
    fill('#ffc600');
    ellipse(50,50,50,50); //B
    ellipse(750,50,50,50);//D
    ellipse(400,150,50,50);//C
    ellipse(400,450,50,50);//A
  
    fill('#000');
    textSize(30);
    text('A',390,460);
    text('B',40,60);
    text('C',390,160);
    text('D',740,60);
  
    
    button = createButton('Show suggestion');
    // button.position(1000, 1200);
    button.mousePressed(showAnswer);
    button.id('showAnswerbutton');
    button.parent("desirepathCanvas");

  }
  
  function draw() {

    
    
    
    // fill(000)
    // ellipse(mouseX, mouseY, 20, 20);
     
  
  }
  
  function mouseDragged() {
    noStroke();
    fill('#ee5637')
    ellipse(mouseX, mouseY, 30, 30);
    // prevent default
    return false;
  }
  
  function showAnswer() {
    stroke('#2a5dcb');
    strokeWeight(20);
    line(50,50, 400,150);
    line(400,150,750,50);
    line(400,450,750,50);
    line(400,450,50,50);
    line(50,50, 750,50);
  }