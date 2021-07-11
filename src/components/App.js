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
const  dataObject=Object.entries(dataJS);
const  backCardObject=Object.values(dataObject[2]);
const  containerGame=document.createElement('section');
containerGame.className='containerGame';
const containerCards=document.createElement('section');
containerCards.className='grid';
containerCards.setAttribute('id','cCards');


const endGame=document.createElement('div');
endGame.className='endGame';         
containerGame.appendChild(endGame);
endGame.style.display="none";
endGame.setAttribute('id','eGame');


const endMsg=document.createElement('p');
endMsg.className='endMsg';
endMsg.textContent="Lo Lograste";
endGame.appendChild(endMsg);

const marioEndGame=document.createElement("img");
marioEndGame.className='marioEndGame';
marioEndGame.src='../img/MarioFinal.gif';
endGame.appendChild(marioEndGame);




data.forEach(([id,image])=>{
  const card=document.createElement('div');
  card.className='card';
  card.dataset.name = id;
  const frontCard=document.createElement('div');
  const imageFrontCard=document.createElement('img');
  const audio=document.createElement('audio');
  audio.src='../sound/mario-bros-jump.mp3';
  frontCard.className='frontCard';
 // card.setAttribute('id',index.toString());
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
 
  });
   containerGame.appendChild(containerCards);
   return containerGame;

};
export default App;