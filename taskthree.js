function numbers(array){
var sum = 0;
for(var i=0; i<array.length;i++){
    if(array[i]>0){
        sum+=array[i];
    }
}
return sum;
}
console.log(numbers([1,2,0,-1,-2,3,4]));