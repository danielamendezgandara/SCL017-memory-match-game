// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 //import mariobros from './data/mariobros/mariobros.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import countTurn from "./ScoreGame.js";
//import pauseGame from "./Pausegame.js";

const App = (data,dataJS) => {
    let count=0;
    let firstGuess = '';
    let secondGuess = '';
    let index = 0;
    let previousTarget = null;
    let delay = 1000;
    let turn=0;

  const  dataObject=Object.entries(dataJS);
  const  backCardObject=Object.values(dataObject[2]);
  const  containerGame=document.createElement('section');
  containerGame.className='containerGame';
  const containerCards=document.createElement('section');
  containerCards.className='grid';

  
const match = () => {
  const selected = document.querySelectorAll('.flipped');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  let selected = document.querySelectorAll('.flipped');
  selected.forEach(card => {
    card.classList.remove('flipped');
  });
};
  data.forEach(([id,image])=>{
    const card=document.createElement('div');
    card.className='card';
    card.dataset.name = id;
    const audio=document.createElement('audio');
    audio.setAttribute('src','../sound/mario-bros-jump.mp3');
    audio.setAttribute('id','sound'+ index.toString());
    const frontCard=document.createElement('div');
    const imageFrontCard=document.createElement('img');
    frontCard.className='frontCard';
    card.setAttribute('id',index.toString());
    imageFrontCard.className='image';
    imageFrontCard.src=image;
    const backCard=document.createElement('div');
    const imageBackCard=document.createElement('img');
    backCard.className='backCard';
    imageBackCard.src=backCardObject[1];
    imageBackCard.className = 'imageBackCard';
    frontCard.appendChild(imageFrontCard);
    backCard.appendChild(imageBackCard);
    card.appendChild(frontCard);
    card.appendChild(backCard);
    card.appendChild(audio);
    containerCards.appendChild(card);
    card.addEventListener('click', event => {
      audio.play();
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
          turn++;
         // score=countTurn(turn);
          turnCards.innerHTML=countTurn(turn);
          if (firstGuess === secondGuess) {
            setTimeout(match, delay);
            /*audio.removeAttribute('src');
            audio.setAttribute('src','../sound/mario-bros-up.mp3');*/
            audio.pause();
            audio.src='../sound/mario-bros-up.mp3';
            audio.play();
          }
           setTimeout(resetGuesses, delay);
        }
       
        previousTarget = clicked;
      }
  
  
    });
    index++

}); 
const display=document.createElement('article');
const displayTurn=document.createElement('div');
const displayLevel=document.createElement('div');
const displayTime=document.createElement('div');

display.className='displayGame';
displayTurn.className='displayTurn';
displayLevel.className='displayLevel';
displayTime.className='displayTime';


displayTurn.innerHTML='<p class="paragraph">TURNOS<p>';
displayLevel.innerHTML='<p class="paragraph">WORLD<p><p>1-3<p>';
displayTime.innerHTML='<p class="paragraph">TIME<p>';

const timerGame=document.createElement('P');
timerGame.setAttribute('id','timer');

displayTime.appendChild(timerGame);
const turnCards=document.createElement('P');
turnCards.setAttribute('id','turn');

displayTurn.appendChild(turnCards);


let n=39;
let x = setInterval(function(){
       if(n>=10){
        timerGame.innerHTML='00:'+n;
        }
      if(n<10){

         timerGame.innerHTML='00:0'+n;
         timerGame.className='alert';
     }
    if(n==0){ clearInterval(x);}
n--;
},1000);



display.appendChild(displayTurn);
display.appendChild(displayLevel);
display.appendChild(displayTime);
  containerGame.appendChild(display);
  containerGame.appendChild(containerCards);
  return containerGame;
};


export default App;