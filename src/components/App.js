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



const App = (data) => {
  const grid=document.createElement('div');
  data.forEach(item => {
    const item={ id, image } ;
  
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.id;
  
    const front = document.createElement('div');
    front.classList.add('front');
  
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.image})`;
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
  
  return grid;
};

    


export default App;