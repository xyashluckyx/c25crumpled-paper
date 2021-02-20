class Paper{
    constructor(x,y){
        var option={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png");

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;

        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        if(keyCode===UP_ARROW){
            pos.x=pos.x+0.3;
            pos.y=pos.y-1.3;
    }
        if(pos.y<400){
            pos.y=pos.y+1.2; 
        }
        if(pos.x>1100){
            pos.y=pos.y+3;
            pos.x=pos.x-0.3;
            pos.y=pos.y-0;
            pos.x=pos.x+0;
        }
        pop()     
    }

}