function backgrounds(){
  colorMode(HSB,360,100,50);
  this.offsetX=0;
  this.offsetY=0;
  this.color1=color(random(360),100,50);
  this.color2=color(random(360),100,50);
  this.color3=color(random(360),100,50);

  this.run=function(){
    this.update();
    this.render();
  }

    this.update= function(){
    if (keyIsDown(68)){ //d
      this.offsetX+=5;
    }


    if (keyIsDown(65)){ //a
      this.offsetX-=5;
    }

    if (keyIsDown(87)){//w
      this.offsetY-=5;
    }
    if (keyIsDown(83)){//s
      this.offsetY+=5;
    }

    if(this.offsetX <= -width){
      this.offsetX = 0;
    }

    if(this.offsetX >= width){
      this.offsetX = 0;
    }

    if(this.offsetY >= 2*height){
      this.offsetY = -height;
    }

    if(this.offsetY <= -2*height){
      this.offsetY = height;
    }
  }

  this.render=function(){
    noStroke();
    //middle
    fill(this.color1);
    rect(this.offsetX,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX + width/3,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width * 2/3,this.offsetY,windowWidth/3,windowHeight);
    //top
    fill(this.color3);
    rect(this.offsetX,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width/3,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX + width * 2/3,this.offsetY-height,windowWidth/3,windowHeight);

    fill(this.color2);
    rect(this.offsetX,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 2/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    //bottom
    fill(this.color2);
    rect(this.offsetX,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width/3,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 2/3,this.offsetY+height,windowWidth/3,windowHeight);

    fill(this.color3);
    rect(this.offsetX,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width/3,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX + width * 2/3,this.offsetY+2*height,windowWidth/3,windowHeight);
//left side
    fill(this.color1);
    rect(this.offsetX- width,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX - width * 2/3,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX - width/3,this.offsetY,windowWidth/3,windowHeight);

    //top
    fill(this.color3);
    rect(this.offsetX- width,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX - width * 2/3,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX - width/3,this.offsetY-height,windowWidth/3,windowHeight);

    fill(this.color2);
    rect(this.offsetX- width,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX - width * 2/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX - width/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    //bottom
    fill(this.color2);
    rect(this.offsetX- width,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX - width * 2/3,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX - width/3,this.offsetY+height,windowWidth/3,windowHeight);

    fill(this.color3);
    rect(this.offsetX- width,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX - width * 2/3,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX - width/3,this.offsetY+2*height,windowWidth/3,windowHeight);
//right
    fill(this.color1);
    rect(this.offsetX+ width,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX + width *4/3,this.offsetY,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width * 5/3,this.offsetY,windowWidth/3,windowHeight);
    //top
    fill(this.color3);
    rect(this.offsetX+ width,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 4/3,this.offsetY-height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX + width * 5/3,this.offsetY-height,windowWidth/3,windowHeight);

    fill(this.color2);
    rect(this.offsetX+ width,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width * 4/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 5/3,this.offsetY-2*height,windowWidth/3,windowHeight);
    //bottom
    fill(this.color2);
    rect(this.offsetX+ width,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color3);
    rect(this.offsetX + width * 4/3,this.offsetY+height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 5/3,this.offsetY+height,windowWidth/3,windowHeight);

    fill(this.color3);
    rect(this.offsetX+ width,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color1);
    rect(this.offsetX + width * 4/3,this.offsetY+2*height,windowWidth/3,windowHeight);
    fill(this.color2);
    rect(this.offsetX +  width * 5/3,this.offsetY+2*height,windowWidth/3,windowHeight);

  }

}
