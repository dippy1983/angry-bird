class Pig{
    constructor(x,y){
        var option={
'restitution':0.8,
'friction':0.3,
'density':1.0

        }


this.body=Bodies.rectangle(x,y,50,50,option)
this.height=50
this.width=50
World.add(world,this.body)



    }
    display(){
var pos=this.body.position  
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeWeight(4)
stroke("green")
fill("red")
rect(0,0,this.height,this.width)
pop ()
    }



}
