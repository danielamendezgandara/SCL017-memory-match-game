//
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

const App = (data,dataJS) => {
  let count=0;
  let firstGuess = '';
  let secondGuess = '';
  let index = 0;
  let previousTarget = null;
  let delay = 400;

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
  containerCards.appendChild(card);
  card.addEventListener('click', event => {
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
        }
         setTimeout(resetGuesses, delay);
      }
     
      previousTarget = clicked;
    }


  });
  index++

}); 
   containerGame.appendChild(containerCards);
   return containerGame;

};
export default App;