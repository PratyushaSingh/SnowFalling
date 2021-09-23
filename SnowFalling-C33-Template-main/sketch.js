const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow2bg, snow4bg, fall=[];
var snowFall;
function preload() {
  snow2bg = loadImage("snow2.jpg")
  snow4bg = loadImage("snow4.webp")
}

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(snow2bg);  
  Engine.update(engine);
if(frameCount%5===0){
  fall.push(snowFall=new Snow())
}

for(var i=0; i<fall.length; i++){
  fall[i].display()
}



  
}