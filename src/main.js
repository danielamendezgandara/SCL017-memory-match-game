import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';


/*fetch('./data/pokemon/pokemon.json')
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);*/
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
var cards=document.querySelectorAll(".container-front-back");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click',()=>{
    console.log(cards[i].getAttribute('name'));
  });
  
}
