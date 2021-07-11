const createHeader = () => {
    let cont=0;

     const playSound=()=>{

           if(!volume.paused && !volume.ended)   { 
              icon.className="fas fa-volume-mute";
              volume.pause(); 
              cont=1;
           } else { 
              icon.className="fas fa-volume-up";
              volume.play(); 
              cont=2;
               
           } 
           };

       let n=39;
       let x = setInterval(function(){
               if(n==20){
                  volume.src='../sound/mario-bros-dateprisa.mp3';
                  volume.play();
                  if(cont==1)   { 
                     volume.pause();
                  }
                 /* volume.playbackRate = 1.5;
                  if(playSound()===true){
                     volume.play();
                  }else{
                     volume.play();
                  }*/
                  
              }
              if(n==0){ clearInterval(x); volume.pause();}
              n--;
              },1000);

           
        
     const headerGame = document.createElement('header');
     const  containerIcons = document.createElement ('div');
     containerIcons.className ='container-icons';
     const containerIconsLeft = document.createElement('div');
     containerIconsLeft.className ='container-icons-left';
     const  containerIconsRight = document.createElement('div');
     containerIconsRight.className = 'container-icons-right';
     const icon=document.createElement('I');
     icon.className="fas fa-volume-up";
     icon.setAttribute('id','icon');
     containerIconsRight.appendChild(icon);
     const containerVolume=document.createElement('div');

     const volume=document.createElement('audio');
     volume.setAttribute('src','../sound/super-mario-bros-game.mp3');
     volume.setAttribute('id','audio');
     volume.play();
     containerVolume.appendChild(volume);
     containerIconsRight.appendChild(containerVolume);
     const containerGameName =document.createElement('div');
     containerGameName.className='container-name-game';
     containerIconsLeft.innerHTML = '<i class="fas fa-home"></i><i id="redoAlt" class="fas fa-redo-alt"></i><i id="pause"class="fas fa-pause"></i>';
     /*const pausedIcon=document.createElement('i');
     pausedIcon.setAttribute('id','paused');
     pausedIcon.className="fas fa-pause fa-2x";*/
     //pausedIcon.addEventListener('click',pauseGame);
     //containerIconsLeft.appendChild(pausedIcon);
     containerGameName.innerHTML ='<img class = "logo" src = "../img/mariobroslogo.png" width =30% ><br><img class ="nameGame" src= "../img/namegame.png">';
     containerIcons.appendChild(containerIconsLeft);
     containerIcons.appendChild(containerIconsRight);
     headerGame.appendChild(containerIcons);
     headerGame.appendChild(containerGameName);
     containerIconsRight.addEventListener('click',playSound);
     
    
     return headerGame;
};



export default createHeader ;