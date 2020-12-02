const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var Ground;
var pig1;
var log1;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(200,300,50,50)
box2=new Box(240,100,50,100)
Ground=new ground(290,360,500,20)
pig1=new Pig(200,200)
log1=new Log(100,300,100,PI/2)
bird=new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
  box1 .display()
  box2.display() 
  Ground.display()
  pig1.display()
  log1.display()
  bird.display()
}