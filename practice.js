function without(array,...values){
const newArray=[];
for(let i=0; i<array.length; i++){
    const caondidateToPush=array[i];
    if (!values.includes(caondidateToPush)){
        newArray.push(caondidateToPush);
    }
}
return newArray;
}

console.log(without([2,1,2,3],1,2));