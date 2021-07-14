import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
import createHeader from './components/HeaderGame.js';
import flippCards, { countMatch } from './components/FlippCards.js';

document.getElementById('root').appendChild(createHeader());
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
flippCards();

document.getElementById('redoAlt').addEventListener('click',function(){
  location.reload();
});

const displayWinLoseGame=document.createElement('div');
displayWinLoseGame.className='winLoseGame';
displayWinLoseGame.style.display='none';
const displayShowScore=document.createElement('div');
displayShowScore.className='showScore';
displayShowScore.setAttribute('id','scoreGame');
const audioGameOver=document.createElement('audio');
audioGameOver.setAttribute('src','./sound/mario-bros-game-over.mp3');
const audioGameWin=document.createElement('audio');
audioGameWin.setAttribute('src','./sound/mario-bros-goal.mp3');
displayWinLoseGame.appendChild(displayShowScore);
displayWinLoseGame.appendChild(audioGameOver);
displayWinLoseGame.appendChild(audioGameWin);
const continueGame=document.createElement('button');
continueGame.setAttribute('id','continueGame');
displayShowScore.appendChild(continueGame);
continueGame.style.display='block';
document.getElementById('root').appendChild(displayWinLoseGame);

let onOff=false;

continueGame.addEventListener('click',function(){
  onOff = false;
  x = setInterval(myTimer, 1000);
  displayWinLoseGame.style.display='none';
  if(document.getElementById('audio').paused){
    document.getElementById('audio').play();
  }
})

document.getElementById('pause').addEventListener('click',function(){
  if (!onOff) {
    onOff = true;
    clearInterval(x);
    displayWinLoseGame.style.display='block';
    continueGame.innerHTML='reanudar';
    if(!document.getElementById('audio').paused){
      document.getElementById('audio').pause();
    }
    //document.getElementById('audio').pause();
  }
    
});

const time=document.getElementById('timer');
let n=39;
const myTimer=()=>{
   if(n>=10){
       time.innerHTML='00:'+n;
       if(countMatch[countMatch.length-1]==6){
         displayWinLoseGame.style.display='block';
         document.getElementById('audio').pause();
         audioGameWin.play();
         clearInterval(x);
       }
       }
     if(n<10){
      time.innerHTML='00:0'+n;
      time.className='alert';
      if(countMatch[countMatch.length-1]==6){
         displayWinLoseGame.style.display='block';
         document.getElementById('audio').pause();
         audioGameWin.play();
         clearInterval(x);
       }
       }
        
   if(n==0){
    clearInterval(x);
    displayWinLoseGame.style.display='block';
    if(countMatch[countMatch.length-1]!=6){
      displayShowScore.style.backgroundImage = "url('../img/mario-bros-gameover.gif')";
      audioGameOver.play();
      //displayShowScore.style.backgroundImage = "url('../img/game-over.gif')";
    }else{
      audioGameWin.play();
    }
   }
   n--;
};
let x=setInterval(myTimer,1000);