var ball= [];
var bg, button1,button2;

function setup() {
  // put setup code here
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  bg= new backgrounds();
  loadBalls(10);
  button1= color(0,0,100);
button2 = color(0,0,100);
}

function draw() {
  // put drawing code here
  background(255,255,255);
  bg.run();
  if(mouseX <= 210 && mouseX>=10 && mouseY >=10 && mouseY<=60){
      button1 = color(0,0,30);
      fill(button1);
      if(mouseIsPressed){
        bg.color1=color(random(360),100,50);
        bg.color2=color(random(360),100,50);
        bg.color3=color(random(360),100,50);
      }
  }else{
    button1 = color(0,0,100);
    fill(button1);
  }
  rect(10,10,200,50)
  textSize(30);
  fill(0,0,0);
  text("Random BG", 30,50);
  if(mouseX <= 420 && mouseX>=220 && mouseY >=10 && mouseY<=60){
      button2 = color(0,0,30);
      fill(button2);
      if(mouseIsPressed){
        for(i=0;i<ball.length;i++){
          ball[i].col = color(random(360),255,100);
        }
      }
  }else{
    button2 = color(0,0,100);
    fill(button2);
  }
  rect(220,10,200,50)
  textSize(30);
  fill(0,0,0);
  text("Circle Color", 250,50);
  for(i=0;i<ball.length;i++){
      ball[i].run();
}



//text("My Website", windowWidth/2, 100)


}
function loadBalls(n){
  for(i=0;i<n;i++){
    ball[i]=new Ball();
  }
}

function changeColors(){

}
