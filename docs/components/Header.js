const createHeader = () => {
const header=document.createElement('header');
const   containerIcons = document.createElement ('div');
containerIcons.className ='container-icons';
const containerIconsLeft = document.createElement('div');
containerIconsLeft.className ='container-icons-left';
const  containerIconsRight = document.createElement('div');
containerIconsRight.className = 'container-icons-right';
const icon=document.createElement('I');
icon.className="fas fa-volume-up fa-2x";
icon.setAttribute('id','icon');
containerIconsLeft.innerHTML='<i class="fas fa-home fa-2x"></i><i class="fas fa-redo-alt fa-2x"></i><i class="fas fa-pause fa-2x"></i>';
const nameGame=document.createElement('div');
nameGame.className='name-game';
nameGame.innerHTML='<img class="logo" src="./img/mariobroslogo.png" width=40%><br><img class="nameg" src="./img/namegame.png" width=30%>'
header.appendChild(containerIcons);
containerIcons.appendChild(containerIconsLeft);
header.appendChild(nameGame);
containerIconsRight.appendChild(icon);
containerIcons.appendChild(containerIconsRight);
return header;

};
export default createHeader;
