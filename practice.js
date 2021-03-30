function take(array, n=1){
  if(n===0){
    return [];
  }
  if(n>array.length){
    return [...array];
  }
  const takenValues=[];
  for(let i=0; i<n; i++){
takenValues.push(array[i]);
  }
  return takenValues;
}

console.log(take([1,2,3],5));