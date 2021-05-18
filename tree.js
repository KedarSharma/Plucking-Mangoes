class Tree {
    constructor(x2,y2){
        this.tree = Matter.Bodies.rectangle(x2,y2,256,272,{'isStatic' : true});
        this.width = 256;
        this.height = 272;
        this.image = loadImage("tree.png");
    }

    display(){
        var pos = this.tree.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    }
}