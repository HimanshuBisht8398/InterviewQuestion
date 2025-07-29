let num=8;
let number;
if(num<=1){
    number='Not Prime'
}
else{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            number='Not Prime'
        }
        else{
            number='Prime'
        }
    }
}

console.log(number)