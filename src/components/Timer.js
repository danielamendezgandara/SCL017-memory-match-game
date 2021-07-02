const timer=(timerGame)=>{
    let n=60;
    let x = setInterval(function(){
           if(n>=10){
              timerGame='00:'+n;
            }

          if(n<10){
            timerGame='00:0'+n;
            timerGame='alert';
         }
   if(n==0){ clearInterval(x); }
   n--;
 },1000);
  return n;

};

export default timer;