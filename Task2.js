function makeAvg(number){
    if(number%2==0){
        return number/2;
    }
    else{
        return number*2;
    }

}

const num=makeAvg(555);
console.log(num);