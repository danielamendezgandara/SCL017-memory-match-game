/*const matchGame=()=>{
    let arrayIdBoxImage=[];
    let clicked=[];
    //let matched=[];
    let suma=0;
    for(let i=0; i<12;i++){
       let index=i.toString();
       let indexImageBox=  document.getElementById(index);
       document.getElementById("image"+index);
       indexImageBox.addEventListener("click", myFunction);
       }

   function myFunction(evt){
     let idEvent=evt.currentTarget.id;
     console.log(idEvent);
     let event=document.getElementById(idEvent);
     event.setAttribute('class','card');
     let idImageBox=document.getElementById(("image"+ idEvent)).src;
     arrayIdBoxImage.push(event);
     console.log(arrayIdBoxImage);
     clicked.push(idImageBox);
     console.log(clicked);
    if(arrayIdBoxImage.length==2){
      if(clicked[0]!=clicked[1]){
        
         arrayIdBoxImage[0].removeAttribute('class');
         arrayIdBoxImage[1].removeAttribute('class');
         //arrayIdBoxImage[1].removeAttribute('class');
         //arrayIdBoxImage[0].classList.toggle('flop');
      }else if(clicked[0]==clicked[1]){
        arrayIdBoxImage[0].classList.toggle('matched');
        arrayIdBoxImage[1].classList.toggle('matched');
        suma++;
        console.log(suma);
      }
       arrayIdBoxImage=[];
       clicked=[];
    } 

  }
  
    return arrayIdBoxImage;
   
}*/


const cardCliked=(cardSet)=>{
  for (let i=0 ;i<cardSet.length;i++){
       cardSet[i].classList.toggle('flipped');
  }
};

export {cardCliked};