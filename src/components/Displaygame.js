
const displayGame=()=>{
    const display=document.createElement('article');
    const displayTurn=document.createElement('div');
    const displayLevel=document.createElement('div');
    const displayTime=document.createElement('div');

    display.className='displayGame';
    displayTurn.className='displayTurn';
    displayLevel.className='displayLevel';
    displayTime.className='displayTime';
   

    displayTurn.innerHTML='<p>TURNOS<p><p id="turn"><p>';
    displayLevel.innerHTML='<p>WORLD<p><p>1-3<p>';
    displayTime.innerHTML='<p>TIME<p><p id="timer"><p>';

    const turnCards=document.getElementById('turn');

    const audio=document.createElement('audio');
    audio.setAttribute('src','../sound/mario-bros-dateprisa.mp3');
    displayTime.appendChild(audio);

     
    let n=60;
    let x = setInterval(function(){
           if(n>=10){
              document.getElementById('timer').innerHTML='00:'+n;
              document.getElementById('turn').innerHTML='hola';
           }
          if(n<10){

             document.getElementById('timer').innerHTML='00:0'+n;
             document.getElementById('timer').className='alert';
             audio.play();
         }
       if(n==0){ clearInterval(x); audio.pause(); }
       n--;
   },1000);

   


    display.appendChild(displayTurn);
    display.appendChild(displayLevel);
    display.appendChild(displayTime);

    return display;


};

export default displayGame;