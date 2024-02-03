function doubleTripple(number,double){
    if(double==true){
        const result=number*2;
        return result;

    }
    else{
        const result=number*3;
        return result;
    }
}

console.log(doubleTripple(5,true));

function oddEven(str){
    const size=str.length;
    if(size%2==0){
        console.log('The string has even numbers characters-',size);
    }
    else{
        console.log('The string has odd number characters-',size);
    }
}

oddEven('Dhaka');
