class Paper {
    constructor(x, y,width,height,r) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1.0
      }
      this.body=Bodies.circle(x, y,r/2, options)
      this.width = width;
      this.height = height;
      this.r=r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.width, this.height,this.r);
      pop();
    }
  }
