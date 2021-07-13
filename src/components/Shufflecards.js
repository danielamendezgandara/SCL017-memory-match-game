const shuffle = (dataImageInitial,numberElements) => {
    let dataImageLength=dataImageInitial.length;
    let dataImage=dataImageInitial;
    let unshuffled = [];
    let i = 0;


    while(i<numberElements){
        let index=Math.floor(Math.random() * ((dataImageLength-i) -0)) + 0;
           let randomImage=dataImage[index];
           dataImage = dataImage.filter(element => element!=randomImage);
           unshuffled.push(randomImage,randomImage);
           i++
     }
    let shuffled = unshuffled
       .map((a) => ({sort: Math.random(), value: a}))
       .sort((a, b) => a.sort - b.sort)
       .map((a) => a.value);
     return shuffled;
};

export default shuffle;