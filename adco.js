// JavaScript File

//so all the fucntions work when the start button is hit
function startButton(){
    hunger();
    happy();
    knowledge();
    
}




//hunger level the girl starts off with 
//every 4 sec = -1 food point 
var getHungry = 35; 

function hunger(){
    
    var interval = setInterval(decrease, 4000); //4000 = 4 secs, every 4 secs going to call the function decrease
    document.getElementById("healthScore").innerHTML = getHungry;
    
    function decrease(){
          if(getHungry >= 0){
              getHungry = getHungry - 1; 
          document.getElementById("healthScore").innerHTML = getHungry; 
          }
          
          if(getHungry == -1){
              document.getElementById("healthScore").innerHTML = "\u2639";
              document.getElementById("speech").innerHTML = "Game Over";
          }
    }

}

 function food(){
     getHungry = getHungry + 3;
     document.getElementById("healthScore").innerHTML = getHungry;
    
     
 }
 //for the fitness button 
 function fitness(){
     getHungry = getHungry + 3;
     document.getElementById("healthScore").innerHTML = getHungry;
     
 }
 
 //Happiness points
 //Happiness points the girls starts off with 
 //every 3 sec = -1 happiness point
 
 var getHappy = 30; 
 function happy(){
    
    var interval = setInterval(decrease, 3000); //3000 = 3 secs, every 3 secs going to call the function decrease
    document.getElementById("happinessScore").innerHTML = getHappy;
    
    function decrease(){
          if(getHappy >= 0){
              getHappy = getHappy - 1; 
          document.getElementById("happinessScore").innerHTML = getHappy; 
          }
          
          if(getHappy == -1){
              document.getElementById("happinessScore").innerHTML = "\u2639";
              document.getElementById("speech").innerHTML = "Game Over";
          }
    }

}

 function play(){
     getHappy = getHappy + 3;
     document.getElementById("happinessScore").innerHTML = getHappy;
    
     
 }
 
 
 //Knowledge points
 //Knowledge points the girls starts off with 
 //every 3 sec = -1 happiness point
 
 var getLearn = 30; 
 function knowledge(){
    
    var interval = setInterval(decrease, 3000); //3000 = 3 secs, every 3 secs going to call the function decrease
    document.getElementById("knowledgeScore").innerHTML = getLearn;
    
    function decrease(){
          if(getLearn >= 0){
              getLearn = getLearn - 1; 
          document.getElementById("knowledgeScore").innerHTML = getLearn; 
          }
          
          if(getLearn == -1){
              document.getElementById("knowledgeScore").innerHTML = "\u2639";
              document.getElementById("speech").innerHTML = "Game Over";
          }
    }

}

 function learn(){
     getLearn = getLearn + 3;
     document.getElementById("knowledgeScore").innerHTML = getLearn;
    
     
 }
 
 //play again button
 //will reset the game once desired 
 
 function playAgain(){
  
 }
 
 