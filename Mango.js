class Mango{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
			friction :1,
			density:1.2
			}
		
		
		
		this.body=Bodies.circle(this.x, this.y, 20, options)
		this.image=loadImage("mango.png")
		World.add(world, this.body);

	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		//rotate(this.body.angle)
		//fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, 0,0,50,50)
		pop()
 }
}