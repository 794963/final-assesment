

/*
**  Ball Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Ball(){
  this.loc = createVector(width/2,height/2);
  this.vel = createVector(random(-20,20),random(-20,20));
  this.acc = createVector(0,0);
   this.diam = 32;
   this.col = color(random(360),255,100);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    this.loc = p5.Vector.add(this.loc,this.vel);
   }

   this.render = function(){
     noStroke();
     fill(this.col);
     ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
   }

   this.checkEdges = function(){
      if(this.loc.x < 0) this.loc.x=width;
      if(this.loc.x > width) this.loc.x=0;
      if(this.loc.y < 0) this.loc.y = height;
      if(this.loc.y > height) this.loc.y = 0;
   }





}//  End of Ball constructor function
