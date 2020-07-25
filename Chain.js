class Chain{
    constructor(objA,ptB){

 var chain_options={
        bodyA: objA,
        pointB: ptB,
        length:100,
        stiffness:1.4
    }
    this.chain=Matter.Constraint.create(chain_options);
    World.add(world,this.chain);

    }

    display(){
        var bodyApos=this.chain.bodyA.position;
        var ptBpos=this.chain.pointB;
        strokeWeight(3);
        line(bodyApos.x,bodyApos.y,ptBpos.x,ptBpos.y);
    }
}