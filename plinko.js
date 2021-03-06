class Plinko {
    constructor(x,y,radius) {
      var options = {
          'isStatic': true,
          'restitution' : 0.5,
          'friction' : 0.5,
           'density' : 0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(this.x,this.y,this.radius);
    }
  };