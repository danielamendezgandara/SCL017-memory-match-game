import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
import clickCard from './components/ClickCard.js';
import createHeader from './components/Header.js';
import createFooter from './components/Footer.js';
//import displayGame from './components/DisplayGame.js';
//import matchGame from './components/Matchgame.js';
/*fetch('./data/pokemon/pokemon.json')
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);*/
document.getElementById('root').appendChild(createHeader());
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));
document.getElementById('root').appendChild(createFooter());
clickCard();