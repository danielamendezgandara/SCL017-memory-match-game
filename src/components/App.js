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
<<<<<<< HEAD
  
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

=======
  let dataObject=Object.entries(dataJS);
  let backCardObject=Object.values(dataObject[2]);
    
  // console.log(dataObject);
  const container=document.createElement('section');
  container.className='container-grid';
  data.forEach((key,i)=>{   
    var figura = key
    var nombre = figura.split('/').pop().split('.')[0];
    console.log(filename);
    const containerBox =document.createElement('div');
    const containerFrontBack=document.createElement('div');
    containerFrontBack.className='container-front-back';
    containerFrontBack.setAttribute('name',nombre);
    const imageContainer=document.createElement('div');
    const image=document.createElement('img');
    imageContainer.className='container-image';
    containerFrontBack.setAttribute('id',i);
    image.className='image';
    image.src=key;
    const containerBackCard=document.createElement('div');
    const backCard=document.createElement('img');
    containerBackCard.className='container-backCard';
    backCard.className='backCard';
    backCard.src=backCardObject[1];
    imageContainer.appendChild(image);
    containerBackCard.appendChild(backCard);
    containerFrontBack.appendChild(imageContainer);
    containerFrontBack.appendChild(containerBackCard);
    containerBox.appendChild(containerFrontBack);
    container.appendChild(containerBox);
    containerFrontBack.addEventListener('click',myFunction);//Remoción de atributo y dar nuevo atributo de tipo class
    function myFunction(){
      containerFrontBack.setAttribute('class','container-front-back');
    }
});
  return container;
};
>>>>>>> 6e6d062448bde12ddb3da11bcc6da5164fed86b0

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