function makeAvg(number){
   let sum=0;
   for(num of number){
    sum=sum+num;
   }
   const avg=sum/number.length;
   return avg;

}

const nums=[34,56,72,16,89,10];
const average=makeAvg(nums);
console.log(average);