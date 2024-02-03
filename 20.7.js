function arraySum(numbers){
    let sum=0;
    for(let num of numbers){
        sum=sum+num;
    }
    return sum;

}


const numb=[87,34,12,90];
const sum=arraySum(numb);
console.log('sum of numbers is',sum);