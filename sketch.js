
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,d1,d2,d3,d4,d5,d6;
var plinko,plinko1,plinko2,plinko3,plinko4,plinko5,plinko6;
var plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13;
var plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20;
var plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27;
var plinko28,plinko29,plinko30,plinko31,plinko32,plinko33,plinko34;
var plinko35,plinko36,plinko37,plinko38,plinko39,plinko40,plinko41;
var particles;

function preload(){
	
}

function setup() {
	createCanvas(480,780);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,760,480,20);

  d1 = new Ground(200,600,10,300);
  d2 = new Ground(0,600,10,300);
  d3 = new Ground(100,600,10,300);
  d4 = new Ground(300,600,10,300);
  d5 = new Ground(400,600,10,300);
  d6 = new Ground(480,600,10,300);

  plinko = new Plinko(20,100,15);
  plinko2 = new Plinko(100,100,15);
  plinko3 = new Plinko(180,100,15);
  plinko4 = new Plinko(260,100,15);
  plinko5 = new Plinko(340,100,15);
  plinko6 = new Plinko(420,100,15);
  plinko7 = new Plinko(60,200,15);
  plinko8 = new Plinko(140,200,15);
  plinko9 = new Plinko(220,200,15);
  plinko10 = new Plinko(300,200,15);
  plinko11 = new Plinko(380,200,15);
  plinko12 = new Plinko(20,300,15);
  plinko13 = new Plinko(180,300,15);
  plinko14 = new Plinko(260,300,15);
  plinko15 = new Plinko(340,300,15);
  plinko16 = new Plinko(420,300,15);
  plinko17 = new Plinko(60,400,15);
  plinko18 = new Plinko(140,400,15);
  plinko19 = new Plinko(220,400,15);
  plinko20 = new Plinko(300,400,15);
  plinko21 = new Plinko(380,400,15);
  plinko22 = new Plinko(100,300,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    pop();
  }

  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  plinko.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();

}