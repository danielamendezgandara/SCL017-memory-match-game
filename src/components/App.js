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



/*const  cambiar_clase=()=> {
  cartasGiradas = Array.prototype.slice.call(document.querySelectorAll('.card.flipped'));

  if (cartasGiradas.length === 2) {
     cartasGiradas.forEach(function(carta) {
       carta.classList.remove('clicked');
     }
  }
}*/



const App = (data,dataJS) => {
  let dataObject=Object.entries(dataJS);
  let backCardObject=Object.values(dataObject[2]);
  const containerCards=document.createElement('section');
  containerCards.className='container-grid';
  let click=[];
let flipped=[];
let cartasGiradas=[];
let delay=1200;
  
const cardCliked=(cardSet)=>{
  for (let i=0 ;i<cardSet.length;i++){
       cardSet[i].classList.toggle('flipped');
       cartasGiradas.push(cardSet[i]);
       }
       console.log(cardSet);
       //cardSet[1].classList.toggle('flipped');

 
};

const flippCard=(target,idTarjet)=>{
  if(click.length<2 && !click.includes(target)){
    click.push(document.getElementById(idTarjet));
    target.classList.toggle('flipped');
    console.log(click);
       if(click.length===2){
        setTimeout(cardCliked(click),delay);
       }

    }
};
const change=(event)=>{
  let idCard=event.currentTarget.id;
  event.currentTarget.classList.toggle('select');
  flippCard(event.currentTarget,idCard);
  console.log(cartasGiradas);
  console.log(idCard);
};
    


  data.forEach((key,id)=>{
    const card=document.createElement('div');
    card.className='card';
    const frontCard=document.createElement('div');
    const imageFrontCard=document.createElement('img');
    frontCard.className='frontCard';
    frontCard.setAttribute('id','frontCard'+id);
    card.setAttribute('id',id);
    imageFrontCard.setAttribute('id',"image"+ id);
    imageFrontCard.className='image';
    imageFrontCard.src=key;
    const backCard=document.createElement('div');
    const imageBackCard=document.createElement('img');
    backCard.className='backCard';
    backCard.setAttribute('id','backCard'+id);
    imageBackCard.src=backCardObject[1];
    imageBackCard.className = 'imageBackCard';
    frontCard.appendChild(imageFrontCard);
    backCard.appendChild(imageBackCard);
    card.appendChild(frontCard);
    card.appendChild(backCard);
    containerCards.appendChild(card);
    card.addEventListener('click',change);   
}); 
  return containerCards;
};

    
 

   /* if(click.length===2){
      event.currentTarget.classList.toggle('flipped');
    }*/
    //sevent.currentTarget.classList.toggle('flipped');
   /* if(click.length===2){
       event.target.parentElement.classList.toggle('flipped');
    }*/
    //}
  
    


export default App;