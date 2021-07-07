//import timer from "./Timer.js";

const displayGame=()=>{
    const display=document.createElement('article');
    const displayTurn=document.createElement('div');
    const displayLevel=document.createElement('div');
    const displayTime=document.createElement('div');
    
    display.className='displayGame';
    displayTurn.className='displayTurn';
    displayLevel.className='displayLevel';
    displayTime.className='displayTime';
    
    
    
    displayTurn.innerHTML='<p class="paragraph">TURNOS<p>';
    displayLevel.innerHTML='<p class="paragraph">WORLD<p><p>1-3<p>';
    displayTime.innerHTML='<p class="paragraph">TIME<p>';
    
    const timerGame=document.createElement('P');
    timerGame.setAttribute('id','timer');
    
    displayTime.appendChild(timerGame);
    const turnCards=document.createElement('P');
    turnCards.setAttribute('id','turn');
    
    displayTurn.appendChild(turnCards);
    
    //timer(39,timerGame);
    display.appendChild(displayTurn);
    display.appendChild(displayLevel);
    display.appendChild(displayTime);

    return display;

};



export default displayGame;
//export {myTimer};

