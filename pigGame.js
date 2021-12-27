var score, roundScore, activePlayer, gamePlaying, previousDice1, previousDice2;

init();

document.querySelector(".btn-roll").addEventListener('click', function(){
    if(gamePlaying){
        //get radom number
    var dice1 = Math.floor(Math.random()*6) +1;
    var dice2 = Math.floor(Math.random()*6) +1;
    
    //display the result
   var diceDOM1 = document.querySelector('.dice-p0');
   var diceDOM2 = document.querySelector('.dice-p1');
   diceDOM1.style.display = 'block';
    diceDOM1.src = '/img/Dice-'+ dice1 +'.png';
    diceDOM2.style.display = 'block';
    diceDOM2.src = '/img/Dice-'+ dice2 +'.png';

    if(previousDice1===6 && dice1===6 || previousDice2===6 && dice2===2){
        score[activePlayer]=0;
        document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
       nextPlayer();
    }
   
    //update current score if not 1
     if(dice1!=1 && dice2!=1){
         
        roundScore +=(dice1 + dice2);
        document.getElementById("current-"+activePlayer).textContent = roundScore;
        
    }

    //next player
    else{
        nextPlayer();
    }
     previousDice1 =dice1;
     previousDice2 =dice2;

}
});
document.querySelector('.btn-hold').addEventListener('click', function(){
   var winner;
   var input;
    if(gamePlaying){
    //get the global score
    score[activePlayer] += roundScore;

    //display global score
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
    input = document.querySelector('.final-score').value;

    if(input){
        winner = input;
    }
    else{
        winner = 100;
    }

    //if player wins by ver 100scores
    if(score[activePlayer]>=winner){
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.getElementById('name-'+activePlayer).textContent = 'winner';
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    }
    else{
    //nextplayer
    nextPlayer();
    }
}
})

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    document.getElementById("current-"+activePlayer).textContent = 0;
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active') ;
    document.querySelector('.player-1-panel').classList.toggle('active') ;
    hide();
}
function init(){
    score = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

hide();
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
}
function hide(){
    document.querySelector('.dice-p0').style.display = 'none';
    document.querySelector('.dice-p1').style.display = 'none';
}
function display(){
    document.querySelector('.dice-p0').style.display = 'block';
    document.querySelector('.dice-p1').style.display = 'block';
}