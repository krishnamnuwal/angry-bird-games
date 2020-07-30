class Chain{
    constructor(objA,ptB){

 var chain_options={
        bodyA: objA,
        pointB: ptB,
        length:10,
        stiffness:0.04
    }
    this.chain=Matter.Constraint.create(chain_options);
    World.add(world,this.chain);

    }

    display(){
        if(this.chain.bodyA){
        var bodyApos=this.chain.bodyA.position;
        var ptBpos=this.chain.pointB;
        strokeWeight(3);
        line(bodyApos.x,bodyApos.y,ptBpos.x,ptBpos.y);
        }
    }
    fly(){
        this.chain.bodyA=null;



    }
}
