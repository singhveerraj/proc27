
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobRadius = 200;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,40);
	bob2 = new Bob(360,500,40);
	bob3 = new Bob(320,500,40);
	bob4 = new Bob(440,500,40);
	bob5 = new Bob(480,500,40);
	roof = new Roof(400,300,250,30);
	rope1 = new Rope(bob1.body,roof.body,20,0);
	rope2 = new Rope(bob2.body,roof.body,20,0);
	rope3 = new Rope(bob3.body,roof.body,20,0);
	rope4 = new Rope(bob4.body,roof.body,20,0);
	rope5 = new Rope(bob5.body,roof.body,20,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



