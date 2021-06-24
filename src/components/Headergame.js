const createHeader = () => {
      const headerGame = document.createElement('header');
      const  containerIcons = document.createElement ('div');
      containerIcons.className ='container-icons';
      const containerIconsLeft = document.createElement('div');
      containerIconsLeft.className ='container-icons-left';
      const  containerIconsRight = document.createElement('div');
      containerIconsRight.className = 'container-icons-right';
      const containerGameName =document.createElement('div');
      containerIconsLeft.innerHTML = '<i class="fas fa-home fa-2x"></i><i class="fas fa-redo-alt fa-2x"></i><i class="fas fa-pause fa-2x"></i>';
      containerIconsRight.innerHTML = '<i class="fas fa-volume-up fa-2x"></i>';
      containerGameName.innerHTML ='<img class = "logo" src = "../img/mariobroslogo.png" width =30% ><br><img class ="nameGame" src= "../img/namegame.png" width =30%>';
      containerIcons.appendChild(containerIconsLeft);
      containerIcons.appendChild(containerIconsRight);
      headerGame.appendChild(containerIcons);
      headerGame.appendChild(containerGameName);
      return headerGame;
};

export default createHeader;