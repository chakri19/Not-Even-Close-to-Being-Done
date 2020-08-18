class Boy {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.boy = Constraint.create(options);
        World.add(world,this.boy);
    }

    fly(){
        this.boy.bodyA = null;
    }

    display(){
        //insert if condition for the display
    }
}