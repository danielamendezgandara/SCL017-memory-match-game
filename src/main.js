import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
import createHeader from './components/HeaderGame.js';
import flippCards from './components/FlippCards.js';
/*fetch('./data/pokemon/pokemon.json')
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);*/
document.getElementById('root').appendChild(createHeader());
//document.getElementById('root').appendChild(displayGame());
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
flippCards();
const time=document.getElementById('timer');
let n=39;
const myTimer=()=>{
   if(n>=10){
       time.innerHTML='00:'+n;
       }
     if(n<10){

        time.innerHTML='00:0'+n;
        time.className='alert';
    }
   if(n==0){ return false;}
   n--;
};

setInterval(myTimer,1000);

