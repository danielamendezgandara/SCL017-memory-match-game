const setData=(dataObject)=>{
    const arrayObject=Object.entries(dataObject);
    const setItems=Object.values(arrayObject[1][1]);
    let arraySetImage=[];
    for (const element in setItems) {
        let arrayItemsImage=Object.entries(setItems[element]).filter(([key,value]) =>(key!='bgColor')?[key,value]:false);
        let objectItemsImage= Object.fromEntries(arrayItemsImage);
        let arraySrcImage=Object.values(objectItemsImage);
        arraySetImage.push(arraySrcImage);
    }

/*let setImage=arraySetImage.reduce((total, currentValue) => total.concat(currentValue), []);
return setImage;  */
return arraySetImage;

};

export default setData;