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

  

  data.forEach((image,id)=>{
    const card=document.createElement('div');
    card.className='card';
    card.setAttribute('id',id.toString());
    const frontCard=document.createElement('div');
    const imageFrontCard=document.createElement('img');
    frontCard.className='frontCard';
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
      console.log(event);});
}); 
   containerGame.appendChild(containerCards);
   return containerGame;
};


export default App;