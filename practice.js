function nth(array,n=0){
if(n>=0){
  return array[n];
}else{
    return array[array.length+n];
}
}

const array=['a','b','c','d'];

console.log( nth(array,1));

console.log(nth(array,-2));