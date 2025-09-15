let starX = 0;
let starXX = 0;
let starSize;
let firstRun = true;
let liberty; 
let yankee;
let iheartX;
let iheartY;
let iheartScale;
let iheartActive = false;
let iheartAlpha = 0;
let yankeesX;
let yankeesY;
let yankeesScale;
let yankeesActive = false;
let yankeesAlpha = 0;
let statueX, statueY;
let statueScale;
let statueActive = false;
let statueAlpha = 0;
let frontWindows = [
  {x:60, y:600, w:30, h:40}, {x:170, y:600, w:30, h:40},
  {x:60, y:690, w:30, h:40}, {x:170, y:690, w:30, h:40},
  {x:60, y:780, w:30, h:40}, {x:170, y:780, w:30, h:40},
  {x:60, y:870, w:30, h:40}, {x:170, y:870, w:30, h:40},
  {x:420, y:550, w:30, h:40}, {x:520, y:550, w:30, h:40},
  {x:420, y:640, w:30, h:40}, {x:520, y:640, w:30, h:40},
  {x:420, y:730, w:30, h:40}, {x:520, y:730, w:30, h:40},
  {x:420, y:820, w:30, h:40}, {x:520, y:820, w:30, h:40},
];
let activeWindowIndex = -1;
let activeWindowColor = null;
let otherTriggered = false;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(15, 15, 30)

  if(firstRun){

   liberty = loadImage('statueofliberty.png')
   yankee = loadImage('Yankees.png')
   iheart = loadImage('iheartny.png')
   firstRun = false;

  }

   let lerpStar = map(vocal, 0, 100, 0, 1);
   let starColor = lerpColor(color(237, 234, 222), color(255, 253, 208, 95), lerpStar);
   
   fill(starColor);

//stars
starSize = map(other, 0, 100, 1, 8, 95);

ellipse(starXX - 20, 50, starSize);
ellipse(starX - 25, 150, starSize);
ellipse(starX, 100, starSize);
ellipse(20 + starX, 200, starSize);
ellipse(50 + starX, 50, starSize);
ellipse(80 + starXX, 120, starSize);
ellipse(200 + starX, 80, starSize);
ellipse(300 + starX, 40, starSize);
ellipse(400 + starXX, 90, starSize);
ellipse(500 + starX, 30, starSize);
ellipse(520 + starX, 150, starSize);
ellipse(150 + starXX, 200, starSize);
ellipse(250 + starX, 160, starSize);
ellipse(350 + starX, 200, starSize);
ellipse(450 + starXX, 130, starSize);
ellipse(600 + starX, 70, starSize);
ellipse(50 + starXX, 220, starSize);
ellipse(80 + starX, 250, starSize);
ellipse(200 + starX, 300, starSize);
ellipse(300 + starXX, 270, starSize);
ellipse(400 + starX, 320, starSize);
ellipse(500 + starXX, 240, starSize);
ellipse(600 + starX, 280, starSize);
ellipse(10 + starXX, 320, starSize);
starX = starX + 0.08;
starXX = starXX + 0.05;

if (starX > 90) {
   starX = 0;
}
if (starXX > 100) {
   starXX = 0;
}

noStroke();
fill(240, 234, 214);
starSize = map(drum, 0, 100, 25, 35, 95);
starX = starX + 0.05;

//background buildings
fill(60, 75, 100);
rect(285, 290, 120, 660);

triangle(405, 300, 420, 300, 405, 290);

fill(70, 85, 110);
rect(300, 300, 120, 660);

fill(60, 75, 100);
rect(115, 360, 70, 660);

triangle(185, 370, 200, 370, 185, 360);

fill(70, 85, 110);
rect(130, 370, 70, 660);

fill(60, 75, 100);
rect(455, 390, 120, 660);

fill(70, 85, 110);
rect(470, 400, 120, 660);

//mid buildings
fill(110, 120, 135);
rect(0, 420, 85, 530);

triangle(85, 430, 100, 430, 85, 420);

fill(120, 130, 145);
rect(0, 430, 100, 530);

fill(110, 120, 135);
rect(185, 700, 150, 250);

triangle(335, 710, 350, 710, 335, 700);

fill(120, 130, 145);
rect(200, 710, 150, 250);

//front builldings
fill(15, 20, 25);
rect(20, 550, 195, 410);

triangle(215, 560, 230, 560, 215, 550);

fill(20, 25, 30);
rect(30, 560, 200, 400);

fill(15, 20, 25);
rect(380, 500, 160, 460);

fill(20, 25, 30);
rect(390, 510, 150, 450);

//windows
let baseWindowColor = lerpColor(color(255, 230, 150), color(59, 59, 59), map(bass, 0, 100, 0, 0.5));

if (bass > 40 && !otherTriggered) {
  activeWindowIndex = floor(random(frontWindows.length));
  activeWindowColor = color(random(255), random(255), random(255));
  otherTriggered = true; 
}

if (bass <= 40) {
  otherTriggered = false;
}

for (let i = 0; i < frontWindows.length; i++) {
  let w = frontWindows[i];

  if (i === activeWindowIndex) {
    fill(activeWindowColor); 
  } else {
    fill(baseWindowColor);
  }

  rect(w.x, w.y, w.w, w.h);
}

//moon
noFill();
strokeWeight(2);
if (bass > 10){
   stroke(255, 0, 0);
   ellipse(450, 100, 100);
}
if (bass > 20){
   stroke(255, 255, 0);
   ellipse(450, 100, 107);
}
if (bass > 30){
   stroke(0, 255, 51);
   ellipse(450, 100, 115);
}
strokeWeight(3);
if (bass > 40){
   stroke(0, 255, 204);
   ellipse(450, 100, 124);
}
if (bass > 50){
   stroke(0, 102, 255);
   ellipse(450, 100, 134);
}
strokeWeight(4);
if (bass > 60){
   stroke(102, 0, 255);
   ellipse(450, 100, 145);
}
if (bass > 70){
   stroke(255, 0, 255);
   ellipse(450, 100, 157);
}

noStroke();
moonSize = map(bass, 0, 100, 0, 70);
drawingContext.filter = 'blur(10px)';
fill(255, 253, 208, 90);
ellipse(450, 100, 90 + moonSize, 90 + moonSize);
drawingContext.filter = 'none';

fill(255, 253, 208);
ellipse(450, 100, 80, 80);

fill(205, 203, 158, 90);
ellipse(460, 90, 15, 15);
ellipse(440, 110, 10, 10);
ellipse(430, 80, 7, 7);
ellipse(470, 120, 5, 5);
ellipse(480, 70, 3, 3);
ellipse(440, 130, 4, 4);
ellipse(420, 100, 6, 6);
ellipse(460, 140, 2, 2);
ellipse(410, 90, 3, 3);
ellipse(480, 150, 1, 1);

//statue of liberty
if (bass > 70 && !statueActive) {

statueX = 450;
statueY = 100;
statueScale = 0.5;
statueAlpha = 0;
statueActive = true;
}

if (statueActive) {

statueX -= 2;
statueY += 1;
statueScale += 0.01;
  
if (statueAlpha < 255) {
statueAlpha += 3;
}

tint(255, statueAlpha);

drawingContext.filter = 'blur(10px)';
image(
   liberty,
   statueX,
   statueY,
   142 * statueScale,
   375 * statueScale
);

drawingContext.filter = 'blur(1px)';
image(
   liberty,
   statueX + 15,
   statueY + 25,
   110 * statueScale,
   300 * statueScale
);

drawingContext.filter = 'none';
noTint();

  if (statueX + 200 * statueScale < 0 || statueY > height + 200) {
   statueAlpha -= 5; 
   if (statueAlpha <= 0) {
   statueActive = false; // done
   }
  }
}

// yankees
if (vocal > 80 && !yankeesActive) {
  yankeesX = 450;       // start under moon
  yankeesY = 100;
  yankeesScale = 0.5;
  yankeesAlpha = 0;
  yankeesActive = true;
}

if (yankeesActive) {
  yankeesX -= 2.5;       // move LEFT
  yankeesY += 0.2;       // slight down drift
  yankeesScale += 0.01;

  if (yankeesAlpha < 255) yankeesAlpha += 3;

  tint(255, yankeesAlpha);

  drawingContext.filter = 'blur(10px)';
  image(
   yankee,
   yankeesX,
   yankeesY,
   120 * yankeesScale,
   120 * yankeesScale
);

  drawingContext.filter = 'blur(3px)';
  image(
   yankee,
   yankeesX + 15,
   yankeesY + 15,
   90 * yankeesScale,
   90 * yankeesScale
);

  drawingContext.filter = 'none';
  noTint();

  if (yankeesX + 150 * yankeesScale < 0) {
    yankeesAlpha -= 5;
    if (yankeesAlpha <= 0) yankeesActive = false;
  }
}

//iheartny
if (drum > 80 && !iheartActive) {
iheartX = 450;
iheartY = 100;
iheartScale = 0.5;
iheartAlpha = 0;
iheartActive = true;
}

if (iheartActive) {
iheartY += 2.5;
iheartX += sin(frameCount * 0.02) * 0.5;
iheartScale += 0.01;

if (iheartAlpha < 255) iheartAlpha += 3;

tint(255, iheartAlpha);

drawingContext.filter = 'blur(10px)';
image(
iheart,
iheartX,
iheartY,
120 * iheartScale,
120 * iheartScale
);

drawingContext.filter = 'blur(2px)';
image(
iheart,
iheartX + 15,
iheartY + 15,
90 * iheartScale,
90 * iheartScale
);

drawingContext.filter = 'none';
noTint();

if (iheartY > height + 150) {
iheartAlpha -= 5;
if (iheartAlpha <= 0) iheartActive = false;
}
}

}