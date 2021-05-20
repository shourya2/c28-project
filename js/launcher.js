class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
        }
        this.chain = Constraint.create(options);
       // this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){

     this.chain.bodyA = null;

    }
    
}