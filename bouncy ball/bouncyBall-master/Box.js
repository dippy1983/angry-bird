class Box{
    constructor(x,y,height,width){
        var option={
restitution:1
        }


this.body=Bodies.rectangle(x,y,width,height,option)
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
fill(255)
rect(0,0,this.height,this.width)
pop ()
    }



}
