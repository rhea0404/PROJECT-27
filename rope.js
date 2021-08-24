class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Anchor1X = pointA.x;
		var Anchor1Y = pointA.y;

		var Anchor2X = pointB.x;
		var Anchor2Y = pointB.y;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

		//CHOOSE THE CORRECT OPTION TO RENDER A LINE BETWEEN THE TWO BODIES

		// line(pointA.x, pointA.y, pointB.y);
		// line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
		// line(pointA.x, pointA.y, pointB.x + this.offsetX);
		// line(pointA.x, pointA.y + this.offsetX,, pointB.x, pointB.y);
	}

}