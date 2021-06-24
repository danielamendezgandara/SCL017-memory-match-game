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
  let dataObject=Object.entries(dataJS);
  let backCardObject=Object.values(dataObject[2]);
  const container=document.createElement('section');
  container.className='container-grid'
  data.forEach((key,i)=>{
    const containerBox =document.createElement('div');
    const containerFrontBack=document.createElement('div');
    //containerFrontBack.className='container-front-back';
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

export default App;