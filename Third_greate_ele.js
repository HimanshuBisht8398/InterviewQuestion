let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]
let first_big=-Infinity,second_big=-Infinity,third_big=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>first_big){
        third_big=second_big;
        second_big=first_big;
        first_big=arr[i];
    }
    else if(arr[i]<first_big && arr[i]>second_big){
        third_big=second_big;
        second_big=arr[i]
    }
    else if(arr[i]<second_big && arr[i]>third_big){
        third_big=arr[i];
    }
}
console.log(third_big)