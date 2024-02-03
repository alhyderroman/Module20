function makeAvg(number){
    if(number%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }

}

const num=makeAvg(554);
console.log(num);