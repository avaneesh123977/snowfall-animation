class Snow {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.2

      }
      this.image = loadImage("snow4.webp")
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      imageMode(CENTER);
      fill(10,110,90);
      ellipseMode(RADIUS)
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };