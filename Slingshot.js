class Slingshot{
    constructor(objA,ptB){

 var chain_options={
        bodyA: objA,
        pointB: ptB,
        length:10,
        stiffness:0.04
    }
    this.chain=Matter.Constraint.create(chain_options);
    World.add(world,this.chain);
    this.slingImg1=loadImage("sprites/sling1.png");
    this.slingImg2=loadImage("sprites/sling2.png");
    this.slingImg3=loadImage("sprites/sling3.png");
    


    }

    display(){
       // imageMode(CENTER);
        image(this.slingImg1,205,30,30,150);
        image(this.slingImg2,190,30,25,93);

        

        if(this.chain.bodyA){
        var bodyApos=this.chain.bodyA.position;
        var ptBpos=this.chain.pointB;
        push()
        stroke(48,22,8);
        if(bodyApos.x<220){
            strokeWeight(7);
            line(bodyApos.x-20,bodyApos.y,ptBpos.x-10,ptBpos.y);
            line(bodyApos.x-20,bodyApos.y,ptBpos.x+30,ptBpos.y-3);
            image(this.slingImg3,bodyApos.x-30,bodyApos.y-10,15,30)
        }else{
            strokeWeight(3);
            line(bodyApos.x+25,bodyApos.y,ptBpos.x-10,ptBpos.y);
            line(bodyApos.x+25,bodyApos.y,ptBpos.x+30,ptBpos.y-3);
            image(this.slingImg3,bodyApos.x+25,bodyApos.y-10,15,30)
            

        }
       pop()
        
       
        }
    }
    fly(){
        this.chain.bodyA=null;



    }
}
