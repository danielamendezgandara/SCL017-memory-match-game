import match from "./Match.js";
import resetGuesses from "./ResetGuesses.js";



const clickCard=()=>{ 

    let count=0;
    let firstGuess = '';
    let secondGuess = '';
    let previousTarget = null;
    let delay = 400;
    let matchGame=0;

    


function flippCards(event){
    let clicked=event.currentTarget;
    
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
        secondGuess = clicked.dataset.name;
        clicked.classList.add('flipped');
      }
      
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
          matchGame++;
          if (matchGame===6){
            document.getElementById('cCards').style.display="none";
            document.getElementById('eGame').style.display="block";
            document.getElementById('footer').style.display="none";
          }
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

    const setCard=document.querySelectorAll('.card');
    setCard.forEach(card=> {
        card.addEventListener('click', flippCards);
     
    });

};
export default clickCard;





