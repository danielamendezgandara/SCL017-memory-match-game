import App from './components/App.js';
import mariobros from '../data/mariobros/mariobros.js';
import setData from './components/Setdata.js';
import shuffle from './components/Shufflecards.js';
import createHeader from './components/Header.js';
import clickCard from './components/ClickCard.js';
import createFooter from './components/Footer.js';

let dataset=setData(mariobros);
let ramdomset=shuffle(dataset,6);
document.getElementById('root').appendChild(createHeader());
document.getElementById('root').appendChild(App (ramdomset,mariobros));
document.getElementById('root').appendChild(createFooter());
clickCard();

