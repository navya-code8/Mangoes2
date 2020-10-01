class Constraint1{

    constructor(body1,point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.007,
            length: 50

        }

        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    fly(){

        this.sling.bodyA = null;
    }

    display(){
        
        if (this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB  =this.sling.pointB;
            line (posA.x+20, posA.y+20, posB.x+20, posB.y+20);
        }



    }

}