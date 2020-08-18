class Mango extends BaseClass {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        super(x,y,width,height, options);
        this.image = loadImage("mango.png");
    }
};