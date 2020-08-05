class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke_Img=loadImage("sprites/smoke.png")
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if((this.body.velocity.x>15)&&this.body.position.x>200){
    var pos=[this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    }
    //console.log(this.trajectory.length); 
    
    for(var i=0;i<this.trajectory.length;i++){
    image(this.smoke_Img,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
