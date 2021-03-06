var img;
var img1;
var img2;
var img3;
var img4;
var initials ='nh';
var choice = '1'; 
var screenbg = 250;
var lastscreenshot=1; 

function preload() {
  img = loadImage('pla.png');
  img1 = loadImage('elk.png');
  img2 = loadImage('hor.png');
  img3 = loadImage('wal.png');
  img4 = loadImage('vem.png');
}

function setup() {
createCanvas(600, 600); 
background(screenbg);   

}

function draw() {
  if (keyIsPressed) {
    choice = key; 
    clear_print(); 
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  
  }
}

function newkeyChoice(toolChoice) { 
 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(20);
    strokeWeight(4);
    fill(0,3,7);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    stroke(250);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { 
    stroke(0, 0, 200);
    testbox();
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(100);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {
    
    stroke(100);
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(random(255), random(255), random(255), random(100));
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(100));
    ellipse(mouseX, mouseY, 100, 100);
  } else if (toolChoice == 'g' || toolChoice == 'G') { 
    image(img, mouseX, mouseY,60,60);
  } else if (toolChoice == 'h' || toolChoice == 'H') { 
    image(img1, mouseX, mouseY,60,60);
    } else if (toolChoice == 'j' || toolChoice == 'J') { 
    image(img2, mouseX, mouseY,140,140);
    } else if (toolChoice == 'k' || toolChoice == 'K') { 
    image(img3, mouseX, mouseY,80,80);
     } else if (toolChoice == 'l' || toolChoice == 'L') { 
    image(img4, mouseX, mouseY,80,80);
    
  }
 }
 
function testbox() {
  y = mouseY;
  fill(200, 20, 20);
  rect(30+x, 120+y, 100, 100);
  fill(20, 20, 200);
  rect(x-34, y-56, 100, 100);

}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg); 
  } else if (key == 'p' || key == 'P') {
     saveme(); 
  }
}

function saveme(){
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { 
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second();
  
}
