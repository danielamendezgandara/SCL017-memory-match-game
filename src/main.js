import App from './components/App.js';
import setData from './components/Setdata.js';
import shuffle from  './components/Shufflecards.js';
import pokemon from   '../data/pokemon/pokemon.js';


document.getElementById('root').appendChild(App(shuffle(setData(pokemon))));
