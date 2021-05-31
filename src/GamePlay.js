import { useState } from 'react';
import GameField from './GameField'
import WinningField from './WinningField';
import Reset from './Reset';







function GamePlay ()  {
var [state, setState] =  useState([false,false,false,false,false,false,false,false,false])


var mvBox,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine;

var gameEngine = {
    player:'',
    pl2: [],  //array keep track of playerOne movement
    pl1: [],  //array keep track of playerTwo movement
    moves: true, // keeps track of players turn
    move: 0,    //keep track of players moves(should not exceeds 9)
    
  }
//Array winning combinations
  let winCon = [[1,2,3],
                [4,5,6],
                [7,8,9],
                [3,6,9],
                [2,5,8],
                [1,4,7],
                [3,5,7],
                [1,5,9]];
// checking for a winner by looping and cross matching winning combination and players movement array
function checked(player) {
  for (let i = 0; i < winCon.length; i++) {
      var combination = winCon[i];
      let checker = (arr, arr2) => 
      arr2.every(v => 
      arr.includes(v));
      let checking = checker(player, combination)
    if (checking === true) {
          return true 
}
  }
    };
    

    


// Reset function to revert all changes for new game session
function reset() {
    
  document.querySelector('#draw').style.visibility = 'hidden';
  document.querySelector('.pl2-win').style.display = 'none';
  document.querySelector('.pl1-win').style.display = 'none';
  gameEngine.pl1= []
  gameEngine.pl2= []
  gameEngine.moves = true 
  gameEngine.move = 0
  document.querySelector('.main-container').style.backgroundColor = '#faf6f6';
  document.querySelector('.winningClass').style.visibility = 'hidden';
  document.querySelector('#draw').style.visibility = 'hidden';
  document.querySelectorAll(".hook").forEach(e => {e.classList.remove("playerO","player1","won")});
  console.log(gameEngine.pl1,gameEngine.pl2)

}

  //chain of event to occur to if winner is detected
  function winEvent(player) {
    if (player !== 'draw') {
      document.querySelector('.winningClass').style.visibility = 'visible';
      document.querySelector('.main-container').style.backgroundColor = '#0f0f0f';
      document.querySelectorAll(".hook").forEach(e => {e.classList.add('won')});
      document.querySelector('.'+player).style.display = 'block';
    } else {
      document.querySelector('.winningClass').style.visibility = 'visible';
      document.querySelector('.main-container').style.backgroundColor = '#0f0f0f';
      document.querySelectorAll(".hook").forEach(e => {e.classList.add('won')});
      document.querySelector('#draw').style.visibility = 'visible';
      console.log(document.querySelector('#draw'))
    }
  }   

// checking for winner after every animation is completed
window.addEventListener('webkitAnimationEnd', ()=>{
  if(checked(gameEngine.pl1)=== true) {
    winEvent('pl1-win')
    console.log('pl1 win')
}else if(checked(gameEngine.pl2)=== true) {
    winEvent('pl2-win') 
    console.log('pl2 win')    
}else if(gameEngine.move >= 9) {
  console.log('setlemate')
    winEvent("draw")
} 
  })
        
const play = (event) => {
    mvBox = (Number(event.target.dataset.mv))
    console.log(mvBox)
    switch(mvBox) {
      case mvBox =1:
        setState(state[0]=true)
        break;
      case mvBox =2:
        setState(state[1]=true)
        break;
      case mvBox =3:
        setState(state[2]=true)
          break;
      case mvBox =4:
        setState(state[3]=true)
          break;
      case mvBox =5:
        setState(state[4]=true)
          break;
      case mvBox =6:
        setState(state[5]=true)
          break;  
      case mvBox =7:
        setState(state[6]=true)
          break;
      case mvBox =8:
        setState(state[7]=true)
          break;
      default:
        setState(state[8]=true)
          break;        
  }
      
    
    
      console.log(state)
    
    //played(mvBox)
    //console.log(one, two, three, four, five, six, seven, eight, nine)

    

      if (gameEngine.moves === true ){
        if(event.target.querySelector(".hook").className== 'hook'){
            gameEngine.player="playerO";
            //console.log(played.contains("playerO"))
            event.target.querySelector(".hook").classList.add(gameEngine.player);
            gameEngine.pl1.push(mvBox)
            gameEngine.moves= false
            gameEngine.move++
            //console.log(played.contains("playerO"))
        }
        
            
      }else if (gameEngine.moves === false) {
        if(event.target.querySelector(".hook").className== 'hook'){
          gameEngine.player="player1";
          event.target.querySelector(".hook").classList.add(gameEngine.player);
          gameEngine.pl2.push(mvBox)
          gameEngine.moves= true
          gameEngine.move++
          //console.log(played.contains("player1"))
        }
          
        
        
        
        //console.log(letstry(gameEngine.pl2, mvBox))
  }else{
      console.log('dont break me')
  }
    
      
};

    return (
 <div className="main-container" >
    <WinningField reset={reset}/>
    <GameField id={1} play = {!one ? play : null}/>
    <GameField id={2} play = {!two ? play : null} />
    <GameField id={3} play = {!three ? play : null}/>
    <GameField id={4} play = {!four ? play : null}/>
    <GameField id={5} play = {!five ? play : null}/>
    <GameField id={6} play = {!six ? play : null}/>
    <GameField id={7} play = {!seven ? play : null}/>
    <GameField id={8} play = {!eight ? play : null}/>
    <GameField id={9} play = {!nine ? play : null}/>
</div>
)

}
 export default GamePlay