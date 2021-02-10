class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;

		var options={
			isStatic = true
		}
		this.body = Bodies.rectangle(x,y,50,50,options)
		this.body.width = 50;
		this.body.height = 50;
		this.image = loadImage("dustbingreen.png")
	}
	display()
	{
			var pos=this.body.position
			var angle=this.body.angle


			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255)
			rotate(angle)
			image(this.image,0,0,this.width, this.height);
			pop()

	
	}

}