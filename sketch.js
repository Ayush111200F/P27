
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject1;
var ropeOject1;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(300,500,30);
	bobObject2 = new Bob(200,300,30);
	bobObject3 = new Bob(350,200,30);
	bobObject4 = new Bob(250,100,30);
	bobObject5 = new Bob(378,150,30);

	roofObject1 = new Roof(300,100,400,20);

	rope1 = new rope(bobObject1.body, roofObject1.body, 20, 0);


	


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();
  rope1.display();
  
  drawSprites();
 
}



