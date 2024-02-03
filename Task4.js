function count_zero(binary){
    let count=0;
 numbers=binary.split('');
 console.log(numbers);
 for(num of numbers){
    if(num==='0'){
    count++;
    }
    
 }
 
 return count;
}

const result=count_zero('00110010');
console.log( 'total zeros:',result);