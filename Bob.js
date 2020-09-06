class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:1,
          density:0.8
      }
     
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x,y,r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      push();
      translate(pos.x,pos.y);

      fill("pink");
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }

      

  };
