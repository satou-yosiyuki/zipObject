function slice(array,start=0, end=array.length){
  const slicedArray=[];
for(let i=start; i<end; i++){
    slicedArray.push(array[i]);
}

  return slicedArray;
}
const Numbers=[10,20,30,40,50];
const slicedNumbers=slice(Numbers,1,4);

console.log(slicedNumbers);

console.log(Numbers);
