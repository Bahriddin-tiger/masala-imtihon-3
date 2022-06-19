function countTrue(array){
    var sum = 0;
 for(var i=0; i<array.length;i++){
    if(array[i] == true){
        sum++;
    }
 }
 return sum;
}
console.log(countTrue([false,true,false,true,true]));