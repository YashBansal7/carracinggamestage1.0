class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){

    if(gameState === 0){

      player = new Player();
      var playercountreference= await database.ref('playerCount').once("value");

      if (playercountreference.exists()){
        playerCount=playercountreference.val();
      player.getCount();
      }

      form = new Form()
      form.display();

    }
  }

car1=createSprite(100,200,10,10);
car2=createSprite(200,200,10,10);
car3=createSprite(300,200,10,10);
car4=createSprite(400,200,10,10);
cars = [car1,car2,car3,car4];

  play(){
    form.hide();
 //   text("Game Begin",120,100);
    Player.getplayerinfo();
    var index = 0;
    var x=0;
    var y;
    if(allplayers!==undefined){
     // var displayposition=100;

      for(var plr in allplayers){

 index = index+1;

 x = x+200;
 y = displayHeight-allplayers[plr].distance;

 cars[index-1].x=x;
 cars[index-1].y=y;

 if(index===player.index){
   cars[index-1].shapeColor="red";
 }
   //   displayposition+=20;
      
    //  text(allplayers[plr].name + "" + allplayers[plr].distance,120,displayposition);
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+=20;
      player.update();
    }

drawSprites();
  }


}
