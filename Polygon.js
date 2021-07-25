class polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      polygon = Bodies.circle(50,200,20);
      World.add(world,polygon);
   
      imageMode(CENTER)
      image(polygon_img,polygon.pos.x,polygon.pos.y,40,40);
}
}