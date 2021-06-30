import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
//import matchGame from './components/Matchgame.js';


/*fetch('./data/pokemon/pokemon.json')
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error);*/
document.getElementById('root').appendChild(App (shuffle(setData(mariobros),6),mariobros));