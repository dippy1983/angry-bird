class Log{
    constructor(x,y){
        var option={
           ' restitution':0.5,
            'density':1.5,
            'friction':1.0
                    }
            


        }


this.body=Bodies.rectangle(x,y,20,height,option)
this.height=height
this.width=20
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)



    
    display(){
var pos=this.body.position  
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeWeight(4)
stroke("green")
fill("255")
rect(0,0,this.height,this.width)
pop ()
    }
    }
