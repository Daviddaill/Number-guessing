let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generate a random secret number from 0 to 10
function generateTarget(){
    return Math.floor(Math.random()*10);
}

//compare who is closer to sercret number, return true if human is bigger or equal to computer
function compareGuesses(human, computer, secret){
    if (checkUserguess(human)){
        alert( 'oh oh, your number is clearly out of range :/');
        
    } else{
    const comp= getAbsoluteDistance(secret, computer);
    const hum= getAbsoluteDistance(secret, human);
    if (hum <= comp){
        return true;
    } else{ 
        return false;
    }
    }
}

function getAbsoluteDistance(target, player ){
  return  Math.abs(target-player);
}

//increase human or computer score by 1 according to the parameter passed in
function updateScore(winner){
    switch(winner){
        case 'human':
            humanScore +=1;
            break;
        case 'computer':
            computerScore +=1
            break;
        default:
            break;
    }
}



function advanceRound(){
    currentRoundNumber +=1;

}

function checkUserguess(human){
    if (human < 0 || human >9){
        return true
    } else {
        return false
    }
}



