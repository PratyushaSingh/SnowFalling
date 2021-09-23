class Snow { 
    constructor(){
        var options = {isStatic: false}
   
   
  
    this.snowFall = Bodies.rectangle(random(1,800),10,30,30,options);
    World.add(world, this.snowFall);
    }
  display(){
    imageMode(CENTER);
    image(snow4bg, this.snowFall.position.x,this.snowFall.position.y,30,30)
    
  }
}

