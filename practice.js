function takeRight(array,n=1){
if(n===0){
    return [];
}
if(n>array.length){
    return [...array];
}

if(n>array.length){
return [...array];
}

const takenArray =[];
for(let i=0; i<n; i++){
    const indexFromRight = array.length - (1+i)
    takenArray.unshift(array[indexFromRight]);
}
return takenArray;
}

console.log(takeRight([1,2,3]));
