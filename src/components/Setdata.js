const setData=(dataObject)=>{
    const arrayObject=Object.entries(dataObject);
    //console.log(arrayObject);
    const setItems=Object.values(arrayObject[1][1]);
    //console.log(setItems);
    let arraySetImage=[];
    for (const element in setItems) {
        let arrayItemsImage=Object.entries(setItems[element]).filter(([key,value]) =>(key=='image')?[key,value]:false);
        let objectItemsImage= Object.fromEntries(arrayItemsImage);
        let arraySrcImage=Object.values(objectItemsImage);
        arraySetImage.push(arraySrcImage);
        //console.log(arrayItemsImage);
        //console.log(objectItemsImage);
        //console.log(arraySrcImage);
    }
    let setImage=arraySetImage.reduce((total, currentValue) => total.concat(currentValue), []);
    console.log(setImage);
return setImage;  

};

export default setData;