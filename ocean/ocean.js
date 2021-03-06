let x, y;

function setup() {
createCanvas(600, 600);
x = width / 2;
  y = height;
}


function draw() {
  background(0, 62,71);
  strokeWeight(0);
   stroke(0);
  fill(255);
  ellipse(x, y,120,120);
  
fill(32,126,222);
line(276,150,342,170);
rect(0,200,600,600);

// rock 1
beginShape();
fill(16,36,48);
vertex(600,34);
vertex(581,60);
vertex(580,95);
vertex(550,194);
vertex(480,220);
vertex(460,245);
vertex(460,280);
vertex(400,320);
vertex(375,230);
vertex(325,340);
vertex(315,465);
vertex(340,600);
vertex(600,600);
vertex(600,34);
endShape();

beginShape();
fill(32,126,222);
vertex(480,380);
vertex(500,430);
vertex(480,540);
vertex(470,500);
vertex(457,560);
vertex(440,470);
vertex(430,440);
vertex(445,390);
vertex(449,425);
vertex(460,388);
endShape();

// rock 2
beginShape();
fill(16,36,48);
vertex(0,500);
vertex(30,515);
vertex(90,520);
vertex(155,460);
vertex(120,350);
vertex(100,330);
vertex(80,340);
vertex(50,325);
vertex(30,338);
vertex(0,347);
endShape();

beginShape();
fill(13,73,55);
vertex(120,350);
vertex(100,330);
vertex(80,340);
vertex(50,325);
vertex(30,338);
vertex(0,347);
vertex(0,365);
vertex(35,360);
vertex(53, 370);
vertex(76,358);
vertex(105,375);
endShape();
 
 // bird
beginShape();
fill(255,255,255);
vertex(40,100);
vertex(70,85);
vertex(90,100);
vertex(110,85);
vertex(140,100);
vertex(110,92);
vertex(90,100);
vertex(70,92);
vertex(40,100);
endShape();

beginShape();
vertex(200,220);
vertex(303,210);
vertex(400,220);
vertex(303,215);
endShape();

beginShape();
fill(25,46,30);
ellipse(240,40,95,85);
ellipse(300,60,100,100);
ellipse(270,55,110,110);
ellipse(340,48,130,130);
ellipse(390,40,95,85);
endShape();
  
   y = y - 2;
   
  if (y < 0) {
    y = height;
  }
}
