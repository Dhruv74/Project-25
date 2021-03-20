
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, dustbinImg
var world;
var paperObj


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,650);
    paperObj = new Paper(200,100,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();


}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:160,y:-145})

	}

}