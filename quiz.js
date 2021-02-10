class Quiz {
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
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Questions();
          question.display();
        }
    }


    play(){
      question.hide();
      textSize(30);
      background("yellow");
      fill("black")
      text("Results of the quiz", 300, 50)
      Contestant.getContestantInfo();
  
      if(allContestants !== undefined){
        var display_position = 230;
        for(var plr in allContestants){
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer){
            fill("green");
          }else {
            fill("red");
          }
         display_position+=20;
         textSize(20);
         textFont("ariel")
         text(allContestants[plr].name + ": " + allContestants[plr].answer, 135,display_position)
         fill("blue");
         text("Note: The name of the person who has given the correct answer is highlighted in green.",70,220)
        }
    }
  }
}
