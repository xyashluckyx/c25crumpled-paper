class Dustbin{
    constructor(x,y){
        var option={
            isStatic:true    
        }
        this.body2=Bodies.rectangle(x, y, 210,225,option);
        this.w=210;
        this.h=225;
        this.image2=loadImage("trashcangreen.png");
        World.add(world,this.body2);
        
        this.body=Bodies.rectangle(x, y,210,225,option);
        this.width=210;
        this.height=225;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
       
    }
    display(){   
        var pos2=this.body2.position;
        var pos=this.body.position;
    
        push();
        translate(pos2.x, pos2.y);
        imageMode(CENTER)
        image(this.image2,0,0,this.w,this.h);
        pop() 

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop() 

    }
}