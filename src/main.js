import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
import createHeader from './components/Header.js';
import clickCard from './components/ClickCard.js';
import createFooter from './components/Footer.js';
//import displayGame from './components/DisplayGame.js';
//import matchGame from './components/Matchgame.js';
/*fetch('./data/pokemon/pokemon.json')
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);*/
<<<<<<< HEAD
document.getElementById('root').appendChild(createHeader());
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
document.getElementById('root').appendChild(createFooter());
clickCard();

=======
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
var cards=document.querySelectorAll(".container-front-back");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click',()=>{
    console.log(cards[i].getAttribute('name'));
  });
  
}
>>>>>>> 6e6d062448bde12ddb3da11bcc6da5164fed86b0
