import match from "./Match.js";
import resetGuesses from "./ResetGuesses.js";
import shiftCount from "./Scoregame.js";

let turn=1;
const turnCards=()=>{
  let flipp=shiftCount(turn);
  console.log(shiftCount(turn));
  turn++;
  return flipp;
}

const flippCards=()=>{
    const audio=document.querySelector('.audio');
    let count=0;
    let firstGuess = '';
    let secondGuess = '';
     let previousTarget = null;
     let delay = 400;
  
        function flippCards(event){
          let clicked=event.currentTarget;
          audio.src='../sound/mario-bros-jump.mp3';
          audio.play();
          
          if (clicked === previousTarget ||
            clicked.classList.contains('flipped')||
            clicked.classList.contains('match')
          ) {
            return;
          }
          if (count < 2) {
            count++;
            if (count === 1) {
              firstGuess = clicked.dataset.name;
              clicked.classList.add('flipped');
            } else { 
              document.getElementById('turn').innerHTML=turnCards();
              secondGuess = clicked.dataset.name;
              clicked.classList.add('flipped');
            }
            
            if (firstGuess && secondGuess) {
              if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                audio.src='../sound/mario-bros-up.mp3';
                audio.play();
              }
              firstGuess = '';
              secondGuess = '';
              count = 0;
              previousTarget = null;
               setTimeout(resetGuesses, delay);
            }
            previousTarget = clicked;
          }
        }
  
        const setCards=document.querySelectorAll('.card');
        setCards.forEach(card=>{
            card.addEventListener('click',flippCards);
        });
  }
  
  export default flippCards;