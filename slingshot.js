class Slingshot {
    constructor(bodyA, bodyB) {
        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.004,
            length: 10.0,

        }
        this.bodyB = bodyB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;

    }
    display() {
        if(this.sling.bodyA){

     
        var pointA = this.sling.bodyA.position;
        var pointB = this.bodyB;


        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }

    }
}