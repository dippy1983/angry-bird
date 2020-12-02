class Bird{
    constructor(x,y){
        var option={
'restitution':0.5,
'density':1.5,
'friction':1.0
        }


this.body=Bodies.rectangle(x,y,50,50,option)
this.height=50
this.width=50
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)



    }
    display(){
var pos=this.body.position  
pos.x=mouseX
pos.y=mouseY
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeWeight(3)
stroke("blue")
fill("green")
rect(0,0,this.height,this.width)
pop()
    }
    }
