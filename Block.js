class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      this.visibility = 255

    }
    display(){
     if(this.body.speed<3 ){
      var pos= this.body.position;
    
     push ();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     pop();
    

     }else{
       World.remove(world,this.body)
       push ();
       this.visibility = this.visibility-5
       tint (200,this.visibility)
       image(this.image,this.body.position.x,this.body.position.y,this.body.width,this.body.height)

        pop ();  
     }
    
  }
}