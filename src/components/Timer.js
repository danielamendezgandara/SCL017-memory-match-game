
const timer=(timerDisplay)=>{

    let n=39;
    let x = setInterval(function(){
           if(n>=10){
            timerDisplay.innerHTML='00:'+n;
            }
          if(n<10){
    
             timerDisplay.innerHTML='00:0'+n;
             timerDisplay.className='alert';
         }
        if(n==0){ clearInterval(x);}
    n--;
    },1000);
};

export default timer;
