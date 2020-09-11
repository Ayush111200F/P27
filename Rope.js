class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetx = offSetx;
        this.offsety = offSety;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetx, y:this.offsetY}
            
        }
        
        //this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.rope.bodyA.position;
            //var pointB = this.pointB;
             var pointB = this.rope.bodyB.position;
            var anchor1X = pointA.x
            var anchor1Y = pointA.y;
            var anchor2X = pointB.x;
            var anchor2Y = pointB.y;
            line(anchor1X, anchor1Y, anchor2X, anchor2Y);
           
        }
    }
    
}