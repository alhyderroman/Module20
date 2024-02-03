function evenNumbers(numbers){
   const newEven=[];
   let sum=0;
    for(const num of numbers){
        if(num%2==0){
           newEven.push(num); 
           sum=sum+num;
          
        }
        
        
    }
    console.log(sum);
    return newEven;
}


const num1=[45,32,78,98,57,35];
const evenNum=evenNumbers(num1);
console.log(evenNum);
