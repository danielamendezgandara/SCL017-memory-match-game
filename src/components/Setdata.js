const setData=(dataObject)=>{
    const arrayObject=Object.entries(dataObject);
    const setItems=Object.values(arrayObject[1][1]);
    let arraySetImage=[];
    for (const element in setItems) {
        let arrayItems=Object.entries(setItems[element]).filter(([key,value]) =>(key!='bgColor')?[key,value]:false);
        let objectItems= Object.fromEntries(arrayItems);
        arraySetImage.push(objectItems);
    }


return arraySetImage;  

};

export default setData;