var canvas;
var gameState = 0, contestantCount, database, quiz, question,contestant, allContestants;

function setup(){
  database= firebase.database();
  canvas = createCanvas(850,400);
  quizGame = new Quiz();
  quizGame.getState();
  quizGame.start();
}


function draw(){
  background("pink");
  if (contestantCount == 4){
    quizGame.update(1);
  }
  if(gameState === 1){
    clear();
    quizGame.play();
  }
  
}
