const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,line1;

function setup(){
    canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,490,1200,20,ground_options);
    World.add(world,ground);

     ball = new Paper(200,200,50,50,40);

    line1 = new Dustbin(1000,470,150,20);
    line2 = new Dustbin(1075,385,20,150);    
    line3 = new Dustbin(925,385,20,150);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    line1.display();
    line2.display();
    line3.display();
    ball.display();
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:65,y:-65}); 
}
 
}

